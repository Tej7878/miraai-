/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MagneticButton from './animations/MagneticButton';
import emailjs from '@emailjs/browser';

export default function Calltoaction() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    role: '',
    industry: '',
    city: '',
    projectRequirement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const roles = [
    'Creative Director',
    'Head of Production',
    'Marketing Leader',
    'Studio Owner',
    'CEO / Founder',
    'Brand Manager',
    'Other',
  ];

  const industries = [
    'Textile & Garments',
    'Jewellery & Diamonds',
    'Lifestyle & Fashion Brands',
    'Real Estate & Construction',
    'Hospitality & Travel',
    'E-Commerce & Retail',
    'Media & Entertainment',
    'Healthcare & Wellness',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ── EmailJS credentials ────────────────────────────────────────────────────
  // Replace these three values with your own from https://www.emailjs.com/
  // Service ID  → EmailJS dashboard → Email Services
  // Template ID → EmailJS dashboard → Email Templates
  // Public Key  → EmailJS dashboard → Account → API Keys
  const EMAILJS_SERVICE_ID = 'service_s6pd2pf';
  const EMAILJS_TEMPLATE_ID = 'template_kd1c754';
  const EMAILJS_PUBLIC_KEY = 'IIxo4ERMezegSYYV1';
  // ──────────────────────────────────────────────────────────────────────────

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Template variables matching your EmailJS template in the dashboard
    const templateParams = {
      name: formData.fullName,
      full_name: formData.fullName,
      company: formData.companyName,
      work_email: formData.workEmail,
      email: formData.workEmail,
      phone: formData.phoneNumber,
      role: formData.role,
      industry: formData.industry,
      city: formData.city,
      requirement: formData.projectRequirement || 'Not provided',
    };

    try {
      // ── Primary: EmailJS sends email directly to inbox ──────────────────
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Success → reset form and redirect
      setFormData({
        fullName: '',
        companyName: '',
        workEmail: '',
        phoneNumber: '',
        role: '',
        industry: '',
        city: '',
        projectRequirement: '',
      });
      navigate('/thank-you');

    } catch (emailErr) {
      console.error('EmailJS error:', emailErr);
      alert('Could not send your enquiry. Please try again or contact us directly at Info.renewtexaiworlds@gmail.com');
    } finally {
      setIsSubmitting(false);
    }

    // ── Secondary: also submit to PHP backend silently (best-effort) ──────
    try {
      fetch('https://miraai.inaiverse.com/submit_form.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.fullName,
          company_name: formData.companyName,
          work_email: formData.workEmail,
          phone_number: formData.phoneNumber,
          role: formData.role,
          industry: formData.industry,
          city: formData.city,
          project_requirement: formData.projectRequirement,
        }),
      }).catch(() => {}); // silent — don't block or alert
    } catch (_) { /* silent */ }
  };

  return (
    <section className="cta-wrap tracking-[0.5px]">
      <div className="cta-inner">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Title */}
          <div className="cta-title tracking-[0.5px]">
            Stop Overpaying For Video Production.
            Start Creating Smarter With{' '}
            <span className="bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent font-semibold animate-text-shimmer">
              Miraai
            </span>
            ?
          </div>
          <div className="cta-sub tracking-[0.5px]">
            Start Creating Professional Videos With AI - Faster, Smarter, And More Cost-Effective.
          </div>

          {/* Inline Embedded Form */}
          <div className="cta-form-container mt-8 sm:mt-10 max-w-[840px] mx-auto text-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-semibold text-xs md:text-sm mb-1.5 tracking-[0.5px]">
                    Full Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-[#05050c]/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold text-xs md:text-sm mb-1.5 tracking-[0.5px]">
                    Company Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    required
                    className="w-full bg-[#05050c]/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Row 2: Work Email & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-semibold text-xs md:text-sm mb-1.5 tracking-[0.5px]">
                    Work Email <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="w-full bg-[#05050c]/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold text-xs md:text-sm mb-1.5 tracking-[0.5px]">
                    Phone Number <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+91 (555) 000-0000"
                    required
                    className="w-full bg-[#05050c]/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Row 3: Role & Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-semibold text-xs md:text-sm mb-1.5 tracking-[0.5px]">
                    Role <span className="text-purple-400">*</span>
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#05050c]/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      backgroundSize: '18px',
                    }}
                  >
                    <option value="" disabled className="bg-[#0A0A0A]">
                      Select Your Role
                    </option>
                    {roles.map((role, index) => (
                      <option key={index} value={role} className="bg-[#0A0A0A]">
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold text-xs md:text-sm mb-1.5 tracking-[0.5px]">
                    Industry / Business Type <span className="text-purple-400">*</span>
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#05050c]/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      backgroundSize: '18px',
                    }}
                  >
                    <option value="" disabled className="bg-[#0A0A0A]">
                      Select Your Industry
                    </option>
                    {industries.map((industry, index) => (
                      <option key={index} value={industry} className="bg-[#0A0A0A]">
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: City */}
              <div>
                <label className="block text-gray-300 font-semibold text-xs md:text-sm mb-1.5 tracking-[0.5px]">
                  City <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  required
                  className="w-full bg-[#05050c]/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all shadow-inner"
                />
              </div>

              {/* Row 5: Project Requirement */}
              <div>
                <label className="block text-gray-300 font-semibold text-xs md:text-sm mb-1.5 tracking-[0.5px]">
                  Project Requirement
                </label>
                <textarea
                  name="projectRequirement"
                  value={formData.projectRequirement}
                  onChange={handleChange}
                  placeholder='Example: "We need AI video production for 50 SKUs in 5 languages"'
                  rows={3}
                  className="w-full bg-[#05050c]/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all resize-none shadow-inner"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <MagneticButton strength={0.3}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`cta-btn group relative overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                  >
                    <span className="cta-btn-star relative z-10">✦</span>
                    <span className="relative z-10 block overflow-hidden">
                      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                        {isSubmitting ? 'Submitting...' : 'Submit Your Request'}
                      </span>
                      <span className="absolute inset-0 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                        {isSubmitting ? 'Submitting...' : 'Submit Your Request'}
                      </span>
                    </span>
                    <span className="cta-btn-star relative z-10">✦</span>
                  </button>
                </MagneticButton>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        .cta-wrap {
          width: 100%;
          padding: 60px 18px 60px;
          background: #000;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .cta-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(760px 520px at 50% 40%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 60%),
            radial-gradient(820px 560px at 65% 70%, rgba(139, 92, 246, 0.08) 0%, rgba(0, 0, 0, 0) 62%);
          pointer-events: none;
          z-index: 0;
        }

        .cta-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 120% at 50% 50%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.86) 100%);
          pointer-events: none;
          z-index: 0;
        }

        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .cta-card {
          border-radius: 24px;
          padding: 48px 24px 44px;
          text-align: center;
          background: rgba(14, 14, 24, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          box-shadow: 0 26px 90px rgba(0, 0, 0, 0.88), 0 0 40px rgba(139, 92, 246, 0.1);
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(70% 90% at 50% 10%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 55%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 60%);
          pointer-events: none;
          z-index: 0;
        }

        .cta-title {
          position: relative;
          z-index: 1;
          font-size: 38px !important;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: 0.5px !important;
          color: rgba(255, 255, 255, 0.95);
          max-width: 900px;
          margin: 0 auto;
        }

        .cta-sub {
          position: relative;
          z-index: 1;
          margin-top: 12px;
          font-size: 19px !important;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          opacity: 0.85;
          max-width: 800px;
          margin: 0 auto;
          font-weight: 500;
          letter-spacing: 0.5px !important;
        }

        .cta-btn {
          border: 0;
          cursor: pointer;
          background: #fff;
          color: #000;
          padding: 12px 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
          z-index: 1;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
        }

        .cta-btn-star {
          font-size: 14px;
          color: inherit;
        }

        .cta-btn:hover {
          box-shadow: 0 6px 30px rgba(255, 255, 255, 0.35);
        }

        @media (max-width: 768px) {
          .cta-card {
            padding: 36px 16px 32px;
          }

          .cta-title {
            font-size: 24px !important;
          }
          
          .cta-sub {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
