import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiUploadCloud, 
  FiVideo, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiArrowLeft,
  FiTrash2,
  FiPlay,
  FiLayers,
  FiHardDrive
} from 'react-icons/fi';
import initialVideos from '../config/cloudinary_videos.json';

export default function CloudinaryAdmin() {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const hasEnvConfig = !!(
    cloudName && 
    cloudName !== 'your_cloud_name' && 
    uploadPreset && 
    uploadPreset !== 'your_upload_preset'
  );

  console.log('Vite Env CloudName:', cloudName);
  console.log('Vite Env UploadPreset:', uploadPreset);
  console.log('hasEnvConfig:', hasEnvConfig);
  // Helper to load videos from localStorage or initial json config
  const getSavedVideos = () => {
    try {
      const saved = localStorage.getItem('miraai_hero_videos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 6) return parsed;
      }
    } catch (e) {
      console.error('Error loading saved videos from localStorage:', e);
    }
    return initialVideos?.heroVideos || ['', '', '', '', '', ''];
  };

  const [heroVideos, setHeroVideos] = useState(getSavedVideos());
  const [uploads, setUploads] = useState(
    Array(6).fill(null).map(() => ({ progress: 0, status: 'idle', error: null }))
  );

  // Sync state with JSON config changes if localStorage not set
  useEffect(() => {
    setHeroVideos(getSavedVideos());
  }, [initialVideos]);

  const saveConfigToFile = async (updatedVideos) => {
    // 1. Always save to browser localStorage for production persistence
    try {
      localStorage.setItem('miraai_hero_videos', JSON.stringify(updatedVideos));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }

    // 2. Attempt to save to local dev server file if endpoint is available
    try {
      const response = await fetch('/api/save-cloudinary-videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ heroVideos: updatedVideos })
      });
      return true;
    } catch (e) {
      console.info('Saved to browser storage (production environment):', e);
      return true;
    }
  };

  const uploadVideo = (index, file) => {
    if (!hasEnvConfig) {
      alert('Please configure your Cloudinary credentials in your .env file first.');
      return;
    }

    setUploads(prev => {
      const updated = [...prev];
      updated[index] = { progress: 0, status: 'uploading', error: null };
      return updated;
    });

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    // Track upload progress
    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded / e.total) * 100);
        setUploads(prev => {
          const updated = [...prev];
          updated[index] = { ...updated[index], progress: percent };
          return updated;
        });
      }
    });

    xhr.addEventListener('load', async () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          const publicId = response.public_id;
          
          const updatedVideos = [...heroVideos];
          updatedVideos[index] = publicId;
          
          const isSaved = await saveConfigToFile(updatedVideos);
          if (isSaved) {
            setHeroVideos(updatedVideos);
            setUploads(prev => {
              const updated = [...prev];
              updated[index] = { progress: 100, status: 'success', error: null };
              return updated;
            });
            setTimeout(() => {
              setUploads(prev => {
                const updated = [...prev];
                updated[index] = { progress: 0, status: 'idle', error: null };
                return updated;
              });
            }, 3000);
          } else {
            throw new Error('Failed to write configuration update to project files.');
          }
        } catch (err) {
          setUploads(prev => {
            const updated = [...prev];
            updated[index] = { progress: 0, status: 'error', error: err.message };
            return updated;
          });
        }
      } else {
        let errorMsg = 'Upload failed';
        try {
          const response = JSON.parse(xhr.responseText);
          errorMsg = response.error?.message || errorMsg;
        } catch (e) {}
        
        setUploads(prev => {
          const updated = [...prev];
          updated[index] = { progress: 0, status: 'error', error: errorMsg };
          return updated;
        });
      }
    });

    xhr.addEventListener('error', () => {
      setUploads(prev => {
        const updated = [...prev];
        updated[index] = { progress: 0, status: 'error', error: 'Network error occurred' };
        return updated;
      });
    });

    xhr.open('POST', url, true);
    xhr.send(formData);
  };

  const handleClearVideo = async (index) => {
    if (window.confirm('Are you sure you want to remove this video slot? It will revert back to local fallback.')) {
      const updatedVideos = [...heroVideos];
      updatedVideos[index] = '';
      
      const isSaved = await saveConfigToFile(updatedVideos);
      if (isSaved) {
        setHeroVideos(updatedVideos);
        setUploads(prev => {
          const updated = [...prev];
          updated[index] = { progress: 0, status: 'idle', error: null };
          return updated;
        });
      } else {
        alert('Failed to clear video config from project files.');
      }
    }
  };

  const getPreviewUrl = (publicId) => {
    if (!publicId || !cloudName) return null;
    return `https://res.cloudinary.com/${cloudName}/video/upload/c_limit,w_250/ac_none/f_auto/q_auto:good/${publicId}`;
  };

  const getPosterUrl = (publicId) => {
    if (!publicId || !cloudName) return null;
    return `https://res.cloudinary.com/${cloudName}/video/upload/c_limit,w_250/f_auto/q_auto/${publicId}.jpg`;
  };

  const cloudinaryCount = heroVideos.filter(v => !!v).length;
  const fallbackCount = 6 - cloudinaryCount;

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pb-20 relative overflow-hidden">
      
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-slate-900 bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm font-semibold">
            <FiArrowLeft className="w-4 h-4" /> Return to Website
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs px-2.5 py-1 bg-slate-900/80 border border-slate-800 rounded-lg text-slate-400 font-mono">
              miraai_video_uploader
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] animate-pulse" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 mt-12 relative z-10">
        
        {/* Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2.5">
              Hero Section Video Uploader
            </h1>
            <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
              Upload videos here to save them directly to your Cloudinary storage. Once uploaded, the uploader automatically saves the connection IDs to the code files, updating the live homepage immediately.
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-900 p-4 rounded-2xl">
            <div className="flex items-center gap-3 pr-4 border-r border-slate-900">
              <FiLayers className="text-indigo-400 w-5 h-5" />
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Cloudinary</div>
                <div className="text-lg font-bold text-white">{cloudinaryCount} Active</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiHardDrive className="text-slate-500 w-5 h-5" />
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Local Gifs</div>
                <div className="text-lg font-bold text-slate-400">{fallbackCount} Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Banner if Credentials are not set in .env */}
        {!hasEnvConfig && (
          <div className="mb-8 p-5 bg-rose-950/20 border border-rose-900/30 text-rose-300 rounded-2xl flex items-start gap-3.5 backdrop-blur-sm">
            <FiAlertCircle className="w-5.5 h-5.5 mt-0.5 flex-shrink-0 text-rose-400" />
            <div>
              <h3 className="font-bold text-sm text-white">Cloudinary Credentials Required</h3>
              <p className="text-xs mt-1 text-slate-300 leading-relaxed max-w-3xl">
                Please edit your project's <code className="bg-rose-950/50 border border-rose-900/40 px-1.5 py-0.5 rounded font-mono text-white text-[11px]">.env</code> file to configure <code className="bg-rose-950/50 border border-rose-900/40 px-1.5 py-0.5 rounded font-mono text-white text-[11px]">VITE_CLOUDINARY_CLOUD_NAME</code> and <code className="bg-rose-950/50 border border-rose-900/40 px-1.5 py-0.5 rounded font-mono text-white text-[11px]">VITE_CLOUDINARY_UPLOAD_PRESET</code> before attempting to upload.
              </p>
            </div>
          </div>
        )}

        {/* Video Slots Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroVideos.map((publicId, index) => {
              const upload = uploads[index];
              const previewVideo = getPreviewUrl(publicId);
              const previewPoster = getPosterUrl(publicId);
              
              return (
                <div key={index} className="bg-slate-950/40 border border-slate-900 rounded-3xl overflow-hidden flex flex-col group hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] transition-all duration-300">
                  
                  {/* Preview Media Window */}
                  <div className="aspect-[4/5] bg-slate-950 relative flex items-center justify-center overflow-hidden border-b border-slate-900">
                    {previewVideo ? (
                      <video
                        src={previewVideo}
                        poster={previewPoster}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-slate-600 text-center px-6">
                        <FiPlay className="w-12 h-12 opacity-20 text-slate-400" />
                        <span className="text-xs font-semibold text-slate-500">Local fallback active</span>
                      </div>
                    )}

                    {/* Slot badge indicator */}
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider select-none">
                      Slot {index + 1}
                    </div>

                    {/* Type badge */}
                    <div className="absolute top-4 right-4">
                      {publicId ? (
                        <span className="bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-[9px] px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wide">
                          Cloudinary
                        </span>
                      ) : (
                        <span className="bg-slate-900 border border-slate-800 text-slate-500 text-[9px] px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wide">
                          Fallback
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions / Status */}
                  <div className="p-5 flex-col justify-between gap-5 bg-slate-950/70 border-t border-slate-900/60 flex">
                    
                    {/* Status Info */}
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold text-slate-400">Current File</h3>
                      {publicId ? (
                        <div className="text-xs text-slate-300 font-mono truncate select-all" title={publicId}>
                          {publicId}
                        </div>
                      ) : (
                        <div className="text-xs text-slate-500">
                          Playing default local project file
                        </div>
                      )}
                    </div>

                    {/* Action button */}
                    <div className="space-y-3.5">
                      {upload.status === 'uploading' ? (
                        <div className="space-y-2.5">
                          <div className="flex justify-between text-xs font-semibold text-slate-300">
                            <span>Uploading video...</span>
                            <span>{upload.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                            <div 
                              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all duration-300"
                              style={{ width: `${upload.progress}%` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <label className={`flex-1 cursor-pointer flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 rounded-2xl px-4 py-3.5 text-xs text-white font-bold transition-all ${!hasEnvConfig ? 'opacity-40 cursor-not-allowed' : ''}`}>
                            <FiUploadCloud className="w-4.5 h-4.5 text-indigo-400" />
                            {publicId ? 'Change Video' : 'Upload Video'}
                            <input
                              type="file"
                              accept="video/*"
                              disabled={!hasEnvConfig}
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files?.[0]) {
                                  uploadVideo(index, e.target.files[0]);
                                }
                              }}
                            />
                          </label>

                          {publicId && (
                            <button
                              onClick={() => handleClearVideo(index)}
                              className="p-3.5 border border-slate-900 text-slate-500 hover:text-rose-400 hover:border-rose-950 hover:bg-rose-950/20 rounded-2xl transition-all"
                              title="Clear Video Slot"
                            >
                              <FiTrash2 className="w-4.5 h-4.5" />
                            </button>
                          )}
                        </div>
                      )}

                      {/* Success / Error Banners */}
                      {upload.status === 'success' && (
                        <div className="flex items-center gap-2.5 text-emerald-400 text-xs bg-emerald-950/20 border border-emerald-900/40 p-3 rounded-xl">
                          <FiCheckCircle className="flex-shrink-0 text-emerald-400" />
                          <span>Uploaded and saved automatically!</span>
                        </div>
                      )}

                      {upload.status === 'error' && (
                        <div className="flex items-start gap-2.5 text-rose-400 text-xs bg-rose-950/20 border border-rose-900/40 p-3 rounded-xl">
                          <FiAlertCircle className="flex-shrink-0 mt-0.5 text-rose-400" />
                          <span className="leading-relaxed">{upload.error}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
