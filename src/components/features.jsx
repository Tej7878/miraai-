/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import HoloCard from './animations/HoloCard';

// RenewTex Features Dataset
const featuresData = [
  {
    id: "ai-video-modeling",
    title: "AI Video Modeling",
    description: "Generate High-Fidelity AI Video Models And Virtual Actors For Ads, Campaigns, And Commercials.",
    tag: "Trending",
    category: "Video AI",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/AI%20Video%20Modeling.png?updatedAt=1789021760582",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    glowColor: "rgba(99, 102, 241, 0.4)",
    laserColor: "#8B5CF6",
    demoType: "video-with-raw",
    demos: [
      {
        id: "v-demo-1",
        title: "Demo 01: Fashion Model Runway",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%201/01.mp4",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%201/1%20(15).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%201/1%20(5).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%201/1%20(13).jpeg"
        ],
        rawImages: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%201/IMG_20260731_151610.jpg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%201/IMG_20260731_151627.jpg"
        ]
      },
      {
        id: "v-demo-2",
        title: "Demo 02: Studio Apparel Motion",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%202/02.mp4",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%202/1%20(3).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%202/1%20(2).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%202/1%20(1).jpeg"
        ],
        rawImages: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%202/1%20(1).jpg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%202/1%20(2).jpg"
        ]
      },
      {
        id: "v-demo-3",
        title: "Demo 03: Editorial Commercial Sequence",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%203/03.mp4",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%203/1%20(7).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%203/1%20(15).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%203/1%20(14).jpeg"
        ],
        rawImages: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%203/IMG_20260620_100147.jpg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20VIDEO%20%20MODELING/DEMO%203/IMG_20260620_110552.jpg"
        ]
      }
    ]
  },
  {
    id: "ai-photo-modeling",
    title: "AI Photo Modeling",
    description: "Create Professional Studio-Grade Model Photoshoots Without Physical Studios, Sets, Or Crews.",
    tag: "Ultra Quality",
    category: "Photo & Models",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/AI%20Photo%20Modeling.png?updatedAt=1789021758347",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    laserColor: "#06B6D4",
    demoType: "gallery",
    demos: [
      {
        id: "p-demo-1",
        title: "Collection 01: Fashion Editorial",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/1/1%20(9).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/1/1%20(7).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/1/1%20(1).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/1/1%20(3).jpeg"
        ]
      },
      {
        id: "p-demo-2",
        title: "Collection 02: Haute Couture Studio",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/2/1%20(11).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/2/1%20(3).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/2/1(14).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/2/1(15).jpeg"
        ]
      },
      {
        id: "p-demo-3",
        title: "Collection 03: Modern Glamour Portraits",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/3/13.jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/3/15.jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/3/3.jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/3/5.jpeg"
        ]
      },
      {
        id: "p-demo-4",
        title: "Collection 04: Urban Contemporary Fashion",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/4/1%20(15).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/4/1%20(6).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/4/1%20(9).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/4/22.jpeg"
        ]
      },
      {
        id: "p-demo-5",
        title: "Collection 05: Luxury Traditional & Modern",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/5/1%20(10).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/5/1%20(15).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/5/1%20(4).jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AI%20PHOTO%20MODELING/5/1%20(7).jpeg"
        ]
      }
    ]
  },
  {
    id: "concept-shoot",
    title: "Concept Shoot",
    description: "Execute Futuristic Thematic Campaigns, Abstract Artworks, And Avant-Garde Visual Concepts.",
    tag: "Artistic",
    category: "Video AI",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/Concept%20Shoot.png?updatedAt=1789021761233",
    gradient: "from-teal-400 via-emerald-500 to-green-500",
    glowColor: "rgba(20, 184, 166, 0.4)",
    laserColor: "#14B8A6",
    demoType: "video-only",
    demos: [
      {
        id: "cs-demo-1",
        title: "Concept Symphony Demo 01",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Concept%20Shoot/Demo%201.mp4"
      },
      {
        id: "cs-demo-2",
        title: "Avant-Garde Concept Demo 02",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Concept%20Shoot/Demo%202.mp4"
      }
    ]
  },
  {
    id: "ad-marketing",
    title: "AD Marketing",
    description: "Produce High-ROI Performance Ad Creatives Engineered For Maximum Social Media Conversions.",
    tag: "High ROI",
    category: "Marketing & Ads",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/AD%20Marketing.png?updatedAt=1789021760572",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    glowColor: "rgba(16, 185, 129, 0.4)",
    laserColor: "#10B981",
    demoType: "video-only",
    demos: [
      {
        id: "ad-demo-1",
        title: "Performance Commercial Demo 01",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AD%20Marketing/01.mp4"
      },
      {
        id: "ad-demo-2",
        title: "Social Conversion Ad Demo 02",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AD%20Marketing/02.mp4"
      },
      {
        id: "ad-demo-3",
        title: "Patel Perfume Luxury Ad Campaign",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/AD%20Marketing/Patel%20Perfume%20Demo%201.mp4"
      }
    ]
  },
  {
    id: "brand-video-development",
    title: "Brand Video Development",
    description: "Craft Premium Cinematic Brand Stories, Corporate Profiles, And Identity Videos At Scale.",
    tag: "Enterprise",
    category: "Video AI",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/Brand%20Video%20Development.png?updatedAt=1789021760553",
    gradient: "from-purple-500 via-indigo-500 to-blue-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    laserColor: "#8B5CF6",
    demoType: "video-only",
    demos: [
      {
        id: "bvd-demo-1",
        title: "Lioness Walk - Brand Story Part 1",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Brand%20Video%20Development/LIONESS%20WALK%202.mp4"
      },
      {
        id: "bvd-demo-2",
        title: "Lioness Walk - Brand Story Part 2",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Brand%20Video%20Development/LIONESS%20WALK%203.mp4"
      },
      {
        id: "bvd-demo-3",
        title: "Miraai Marketing Global Campaign",
        video: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Brand%20Video%20Development/MIRAAI%20MARKETING%20CAMPAING%2002.mp4"
      }
    ]
  },
  {
    id: "catalog-design",
    title: "Catalog Design",
    description: "Create Complete Digital Catalogs, Interactive Lookbooks, And Dynamic Multi-Product Showcases.",
    tag: "Automated",
    category: "Design & 3D",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/Catalog%20Design.png?updatedAt=1789021760895",
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
    glowColor: "rgba(59, 130, 246, 0.4)",
    laserColor: "#3B82F6",
    demoType: "pdf-catalog",
    demos: [
      {
        id: "cat-demo-1",
        title: "Digital Catalog Edition 01",
        pdf: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Catalog%20Design/1.pdf",
        preview: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Catalog%20Design/1.jpg"
      },
      {
        id: "cat-demo-2",
        title: "Fashion Lookbook Catalog 02",
        pdf: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Catalog%20Design/2.pdf",
        preview: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Catalog%20Design/2.jpg"
      },
      {
        id: "cat-demo-3",
        title: "Commercial Showcase Catalog 03",
        pdf: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Catalog%20Design/3.pdf",
        preview: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Catalog%20Design/3.jpg"
      }
    ]
  },
  {
    id: "movie-marketing",
    title: "Movie Marketing",
    description: "Generate Blockbuster Motion Posters, Teasers, Trailer Visuals, And Complete Promotional Campaigns.",
    tag: "Cinematic",
    category: "Video AI",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/Movie%20Marketing.png?updatedAt=1789021761169",
    gradient: "from-rose-500 via-red-500 to-amber-500",
    glowColor: "rgba(244, 63, 94, 0.4)",
    laserColor: "#F43F5E",
    demoType: "video-only",
    demos: [
      {
        id: "mm-demo-1",
        title: "Blockbuster Motion Poster 01",
        video: "https://ik.imagekit.io/pdbz08zeh/Movie%20Marketing/01%20C.mp4"
      },
      {
        id: "mm-demo-2",
        title: "Cinematic Motion Teaser 02",
        video: "https://ik.imagekit.io/mr3dyk3m0/02%20C.mp4"
      },
      {
        id: "mm-demo-3",
        title: "Theatrical Promotion Trailer 03",
        video: "https://ik.imagekit.io/fob4cflp1/03%20C.mp4"
      }
    ]
  },
  {
    id: "poster-design",
    title: "Poster Design",
    description: "Design Striking High-Resolution Event Posters, Digital Billboards, And Eye-Catching Display Graphics.",
    tag: "Visual Art",
    category: "Design & 3D",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/Poster%20Design.png?updatedAt=1789021761323",
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    glowColor: "rgba(217, 70, 239, 0.4)",
    laserColor: "#D946EF",
    demoType: "poster",
    demos: [
      {
        id: "post-demo-1",
        title: "Commercial Campaign Poster 01",
        image: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Poster%20Design/MIRAAI%20POST%20(3).jpg"
      },
      {
        id: "post-demo-2",
        title: "Digital Display Billboard 02",
        image: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Poster%20Design/MIRAAI%20POST%20(6).jpg"
      },
      {
        id: "post-demo-3",
        title: "High-Fashion Editorial Poster 03",
        image: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Poster%20Design/MIRAAI%20POST%20(8).jpg"
      }
    ]
  },
  {
    id: "product-design",
    title: "Product Design",
    description: "Photorealistic 3D Packaging Previews, Product Renders, And E-Commerce Showcase Graphics.",
    tag: "3D & AI",
    category: "Design & 3D",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/Product%20Design.png?updatedAt=1789021760420",
    gradient: "from-indigo-400 via-purple-500 to-pink-500",
    glowColor: "rgba(99, 102, 241, 0.4)",
    laserColor: "#6366F1",
    demoType: "product-renders",
    demos: [
      {
        id: "prod-demo-1",
        title: "Packaging & Container Collection",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Product%20Design/1/2.jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Product%20Design/1/3.jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Product%20Design/1/6.jpeg"
        ]
      },
      {
        id: "prod-demo-2",
        title: "Bottle & Commercial 3D Render Suite",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Product%20Design/2/10.png",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Product%20Design/2/2.jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Product%20Design/2/7.jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Product%20Design/2/8.jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Product%20Design/2/9.jpeg"
        ]
      },
      {
        id: "prod-demo-3",
        title: "Minimalist Cosmetic Product 3D",
        images: [
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Product%20Design/3/1.jpeg",
          "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Product%20Design/3/4.jpeg"
        ]
      }
    ]
  },
  {
    id: "speech-video-marketing",
    title: "Speech Video Marketing",
    description: "Deliver AI Avatars Delivering Multi-Language Speeches, Executive Messages, And Scripted Talks.",
    tag: "AI Voice",
    category: "Marketing & Ads",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/Speech%20Video%20Marketing.png?updatedAt=1789021760113",
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.4)",
    laserColor: "#A855F7",
    demoType: "video-only",
    demos: [
      {
        id: "svm-demo-1",
        title: "Executive AI Speech & Avatar Presentation",
        video: "https://ik.imagekit.io/dauwaiwet/01%20SPEECH.mp4"
      },
      {
        id: "svm-demo-2",
        title: "Cultural Storytelling (Navratri Narration)",
        video: "https://ik.imagekit.io/fcijpe5wh/NAVRATRI%20STORY%201.mp4"
      }
    ]
  },
  {
    id: "book-development",
    title: "Book Development",
    description: "Design Illustrated Covers, Full Layouts, And Dynamic Storybook Visuals Powered By AI.",
    tag: "Creative",
    category: "Books & Print",
    fieldImage: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Field%20Images/Book%20Development.png?updatedAt=1789021761178",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    glowColor: "rgba(245, 158, 11, 0.4)",
    laserColor: "#F59E0B",
    demoType: "book-pdf",
    demos: [
      {
        id: "book-demo-1",
        title: "Radhika Illustrated Book Edition",
        pdf: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Book%20Development/Radhika%20BOOK.pdf",
        preview: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Book%20Development/Radhika%20BOOK.jpg"
      },
      {
        id: "book-demo-2",
        title: "Madhuram Storybook Layout",
        pdf: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Book%20Development/Madhuram%20Book.pdf",
        preview: "https://ik.imagekit.io/mi1zqsrns/RENEWTEX%20WEBSITE/Book%20Development/Madhuram%20Book.jpg"
      }
    ]
  }
];

const categoriesList = [
  "All Services",
  "Video AI",
  "Photo & Models",
  "Marketing & Ads",
  "Design & 3D",
  "Books & Print"
];

const Features = ({ openForm }) => {
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [activeModalFeature, setActiveModalFeature] = useState(null);
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);
  const [selectedVideoDemo, setSelectedVideoDemo] = useState(null); // null = 3 demo cards picker, 0/1/2 = full view
  const [lightboxImage, setLightboxImage] = useState(null);

  const isInView = useInView(sectionRef, { once: false, amount: 0.1, margin: "-50px" });

  // Handle ESC key for modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (lightboxImage) {
          setLightboxImage(null);
        } else if (activeModalFeature) {
          setActiveModalFeature(null);
          setSelectedVideoDemo(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, activeModalFeature]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (activeModalFeature || lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeModalFeature, lightboxImage]);

  // Reset active demo index when opening a new feature
  const openFeatureModal = (feature) => {
    setActiveModalFeature(feature);
    setActiveDemoIndex(0);
    setSelectedVideoDemo(null);
  };

  // Filter features
  const filteredFeatures = selectedCategory === "All Services"
    ? featuresData
    : featuresData.filter(f => f.category === selectedCategory);

  return (
    <section ref={sectionRef} id="features" className="bg-[#030308] min-h-screen py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden font-['Inter']">
      
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-[8%] left-[10%] w-[550px] h-[550px] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[550px] h-[550px] bg-purple-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-cyan-600/7 rounded-full blur-[180px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.15)] mb-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">Next-Gen Production Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-tight">
            Powerful Platform Features
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to create, scale, and automate your AI content production in one unified studio.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categoriesList.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 relative cursor-pointer ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.4)] border border-indigo-400/40'
                      : 'text-slate-400 bg-slate-900/60 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                  }`}
                >
                  {cat}
                  {cat === "All Services" && ` (${featuresData.length})`}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Features Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredFeatures.map((feature) => (
            <motion.div
              layout
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <HoloCard borderRadius="24px" maxTilt={6} className="h-full">
                <div 
                  onClick={() => openFeatureModal(feature)}
                  className="feature-card group relative flex flex-col justify-between h-full overflow-hidden select-none bg-slate-950/70 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/50 rounded-3xl transition-all duration-500 hover:-translate-y-2 shadow-2xl cursor-pointer"
                >
                  {/* Subtle Gradient Glow on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl z-0"
                    style={{
                      background: `radial-gradient(500px circle at 50% 30%, ${feature.glowColor}, transparent 60%)`
                    }}
                  />

                  {/* Top Media Cover: Real Field Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-3xl bg-slate-900 z-10">
                    <img 
                      src={feature.fieldImage} 
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Media Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-slate-200 shadow-lg">
                        {feature.tag}
                      </span>
                    </div>

                    {/* Demo Count Pill */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-indigo-600/85 backdrop-blur-md text-white shadow-[0_0_12px_rgba(99,102,241,0.5)] border border-indigo-400/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {feature.demos.length} {feature.demoType === 'gallery' ? 'Collections' : feature.demoType === 'book-pdf' ? 'Books' : feature.demoType === 'pdf-catalog' ? 'Catalogs' : 'Demos'}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 relative z-10">
                    <div>
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-200 group-hover:via-white group-hover:to-purple-200 transition-colors">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed font-normal group-hover:text-slate-300 transition-colors line-clamp-3">
                        {feature.description}
                      </p>
                    </div>

                    {/* Action Bar / Trigger */}
                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors flex items-center gap-1">
                        <span>Explore Showcase & Demos</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>

                      <div className="w-8 h-8 rounded-full bg-slate-900 group-hover:bg-indigo-600/30 border border-slate-700 group-hover:border-indigo-400/50 flex items-center justify-center text-slate-300 group-hover:text-white transition-all shadow">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </HoloCard>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Cinematic Feature Showcase Modal */}
      <AnimatePresence>
        {activeModalFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalFeature(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl z-40 cursor-pointer"
            />

            {/* Modal Dialog Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#090a14] border border-indigo-500/30 rounded-3xl shadow-[0_0_80px_rgba(99,102,241,0.25)] overflow-hidden z-50 my-auto max-h-[92vh] flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-6 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeModalFeature.gradient} p-[1px]`}>
                    <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-white">
                      <span className="text-xs font-extrabold">{activeModalFeature.demos.length}D</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                        {activeModalFeature.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-indigo-500/30">
                        {activeModalFeature.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {activeModalFeature.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  {openForm && (
                    <button
                      onClick={() => {
                        setActiveModalFeature(null);
                        openForm();
                      }}
                      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-950 hover:bg-indigo-50 transition-all shadow-md cursor-pointer"
                    >
                      <span>Book Service</span>
                      <span>✦</span>
                    </button>
                  )}

                  <button
                    onClick={() => setActiveModalFeature(null)}
                    aria-label="Close modal"
                    className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Demo Sub-Navigation Tabs (for other features) */}
              {activeModalFeature.demos.length > 1 && activeModalFeature.id !== "ai-video-modeling" && (
                <div className="px-4 sm:px-6 pt-3 pb-3 bg-slate-950/40 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
                  {activeModalFeature.demos.map((demo, idx) => {
                    const isSelected = activeDemoIndex === idx;
                    return (
                      <button
                        key={demo.id}
                        onClick={() => setActiveDemoIndex(idx)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] border border-indigo-400/40'
                            : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                      >
                        {demo.title || `Demo ${idx + 1}`}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Modal Scrollable Body */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
                
                {/* 1. AI Video Modeling: Step 1 = Only Demo 1, 2, 3 cards | Step 2 = Full Demo in ONE unified view (No separate tabs) */}
                {activeModalFeature.demoType === "video-with-raw" && (
                  selectedVideoDemo === null ? (
                    /* STEP 1: ONLY DEMO 1, 2, 3 POPUP CARDS */
                    <div className="py-2 space-y-6">
                      <div className="text-center max-w-xl mx-auto space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                          <span>AI Video Modeling Demonstrations</span>
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-black text-white">
                          Select A Demo Showcase
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          Choose Demo 1, Demo 2, or Demo 3 to open its full commercial video, raw smartphone input photos, and AI generated model frames together.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                        {activeModalFeature.demos.map((demo, idx) => (
                          <div
                            key={demo.id}
                            onClick={() => setSelectedVideoDemo(idx)}
                            className="group relative rounded-3xl p-5 bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/80 transition-all duration-400 cursor-pointer shadow-2xl hover:-translate-y-2 flex flex-col justify-between"
                          >
                            <div className="relative z-10">
                              {/* Preview Video Snippet */}
                              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black mb-4 border border-slate-800 group-hover:border-indigo-500/40 transition-colors shadow-inner">
                                <video
                                  src={demo.video}
                                  muted
                                  loop
                                  autoPlay
                                  playsInline
                                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 pointer-events-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.6)] border border-indigo-400/40 flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                  Demo {idx + 1}
                                </div>
                              </div>

                              <div className="space-y-2 mb-4">
                                <h5 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                                  {demo.title}
                                </h5>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                  Full production showcase with {demo.rawImages?.length || 2} raw camera input photos and {demo.images?.length || 3} studio model frames.
                                </p>
                              </div>
                            </div>

                            <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-indigo-300">
                                <span>{demo.rawImages?.length || 2} Raw</span>
                                <span>•</span>
                                <span>{demo.images?.length || 3} AI Stills</span>
                              </div>

                              <span className="text-xs font-bold text-white group-hover:text-indigo-200 flex items-center gap-1 bg-indigo-600/30 group-hover:bg-indigo-600 px-3.5 py-1.5 rounded-xl border border-indigo-500/40 transition-all shadow">
                                <span>Open Full Demo</span>
                                <span>→</span>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* STEP 2: FULL DEMO IN ONE UNIFIED VIEW (NO SEPARATE PHOTO/RAW TABS) */
                    (() => {
                      const currentDemo = activeModalFeature.demos[selectedVideoDemo];
                      return (
                        <div className="space-y-6">
                          {/* Navigation Bar: Back Button + Quick Demo Switcher */}
                          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                            <button
                              onClick={() => setSelectedVideoDemo(null)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-all cursor-pointer shadow-sm"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 19"></polyline>
                              </svg>
                              <span>Back to All Demos</span>
                            </button>

                            {/* Quick Demo Switcher Pills */}
                            <div className="flex items-center gap-1.5">
                              {activeModalFeature.demos.map((d, dIdx) => {
                                const isCurrent = selectedVideoDemo === dIdx;
                                return (
                                  <button
                                    key={d.id}
                                    onClick={() => setSelectedVideoDemo(dIdx)}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                      isCurrent
                                        ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.5)] border border-indigo-400/40'
                                        : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
                                    }`}
                                  >
                                    Demo {dIdx + 1}
                                  </button>
                                );
                              })}
                            </div>

                            <span className="text-xs text-indigo-300 font-semibold px-2.5 py-1 bg-indigo-950/60 rounded-md border border-indigo-500/20">
                              {currentDemo.title}
                            </span>
                          </div>

                          {/* 1. Main Video Player */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                AI Video Model Commercial
                              </span>
                              <span className="text-[11px] text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/20 font-semibold">
                                HD 60 FPS AI Fluid Motion
                              </span>
                            </div>

                            <div className="rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-2xl relative aspect-[16/9] sm:aspect-[16/10] max-h-[460px] flex items-center justify-center">
                              <video
                                key={currentDemo.video}
                                src={currentDemo.video}
                                controls
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* 2. Unified Photos Showcase: Raw Input AND AI Stills in ONE View (No Tabs) */}
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
                            
                            {/* Raw Input Photos (Before) */}
                            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950/80 border border-amber-500/25 space-y-4">
                              <div className="flex items-center justify-between pb-2 border-b border-amber-500/10">
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                                    Raw Input Photos (Before)
                                  </span>
                                  <p className="text-[11px] text-slate-400 mt-0.5">Unedited camera snapshots</p>
                                </div>
                                <span className="text-[10px] text-amber-300 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 font-semibold">
                                  {currentDemo.rawImages?.length || 0} Photos
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                {currentDemo.rawImages?.map((rawImg, rIdx) => (
                                  <div
                                    key={rIdx}
                                    onClick={() => setLightboxImage(rawImg)}
                                    className="group relative rounded-xl overflow-hidden aspect-[3/4] border border-slate-800 hover:border-amber-500/60 cursor-pointer bg-slate-900 shadow-lg"
                                  >
                                    <img
                                      src={rawImg}
                                      alt={`Raw input photo ${rIdx + 1}`}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-semibold text-amber-300 border border-amber-500/30">
                                      Raw #{rIdx + 1}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <p className="text-[11px] text-slate-500 italic">Click any photo to zoom in fullscreen</p>
                            </div>

                            {/* AI Generated Model Stills (After) */}
                            <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/80 border border-indigo-500/25 space-y-4">
                              <div className="flex items-center justify-between pb-2 border-b border-indigo-500/10">
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                                    AI Model Stills (After)
                                  </span>
                                  <p className="text-[11px] text-slate-400 mt-0.5">Studio-grade virtual model results</p>
                                </div>
                                <span className="text-[10px] text-indigo-300 px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 font-semibold">
                                  {currentDemo.images?.length || 0} Frames
                                </span>
                              </div>

                              <div className="grid grid-cols-3 gap-3">
                                {currentDemo.images?.map((img, iIdx) => (
                                  <div
                                    key={iIdx}
                                    onClick={() => setLightboxImage(img)}
                                    className="group relative rounded-xl overflow-hidden aspect-[3/4] border border-slate-800 hover:border-indigo-400/80 cursor-pointer bg-slate-900 shadow-lg"
                                  >
                                    <img
                                      src={img}
                                      alt={`AI generated frame ${iIdx + 1}`}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                      <span className="text-white text-[10px] font-bold px-2 py-1 bg-black/80 rounded-md">Zoom</span>
                                    </div>
                                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-semibold text-indigo-300 border border-indigo-500/30">
                                      AI Still #{iIdx + 1}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <p className="text-[11px] text-slate-500 italic">Click any photo to zoom in fullscreen</p>
                            </div>

                          </div>
                        </div>
                      );
                    })()
                  )
                )}

                {/* 2. AI Photo Modeling: 4-Photo Editorial Collections */}
                {activeModalFeature.demoType === "gallery" && (() => {
                  const currentDemo = activeModalFeature.demos[activeDemoIndex];
                  return (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{currentDemo.title}</span>
                          <span className="text-xs text-indigo-400 font-normal">({currentDemo.images.length} High-Res Editorial Photos)</span>
                        </h4>
                        <span className="text-xs text-slate-400">Click any image to view fullscreen</span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {currentDemo.images.map((img, i) => (
                          <div
                            key={i}
                            onClick={() => setLightboxImage(img)}
                            className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-slate-800 hover:border-indigo-400/80 cursor-pointer bg-slate-900 shadow-xl transition-all hover:-translate-y-1"
                          >
                            <img
                              src={img}
                              alt={`Photo ${i + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                              <span className="text-white text-xs font-bold flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <circle cx="11" cy="11" r="8"></circle>
                                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                                Fullscreen Preview
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                {/* 3. Pure Video Categories (Concept Shoot, AD Marketing, Brand Video, Movie Marketing, Speech Video) */}
                {activeModalFeature.demoType === "video-only" && (() => {
                  const currentDemo = activeModalFeature.demos[activeDemoIndex];
                  return (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">{currentDemo.title}</h4>
                        <span className="text-xs text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-500/30">
                          HD Cinematic 60 FPS
                        </span>
                      </div>

                      <div className="rounded-3xl overflow-hidden bg-black border border-slate-800 shadow-2xl relative aspect-video max-h-[540px] flex items-center justify-center">
                        <video
                          key={currentDemo.video}
                          src={currentDemo.video}
                          controls
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  );
                })()}

                {/* 4. Catalog Design: PDF + Preview */}
                {activeModalFeature.demoType === "pdf-catalog" && (() => {
                  const currentDemo = activeModalFeature.demos[activeDemoIndex];
                  return (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group relative aspect-[4/3]">
                          <img
                            src={currentDemo.preview}
                            alt={currentDemo.title}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                          />
                        </div>

                        <div className="md:col-span-5 space-y-5">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Digital Lookbook</span>
                            <h4 className="text-2xl font-black text-white mt-1">{currentDemo.title}</h4>
                            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                              Complete multi-page interactive catalog engineered with AI page composition, lookbook photography, and typography.
                            </p>
                          </div>

                          <div className="space-y-3">
                            <a
                              href={currentDemo.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all cursor-pointer"
                            >
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                              <span>Open Full Catalog PDF</span>
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </a>

                            <div className="text-center">
                              <span className="text-[11px] text-slate-500">Instant PDF download & cloud reader</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* 5. Book Development: PDF + Cover Preview */}
                {activeModalFeature.demoType === "book-pdf" && (() => {
                  const currentDemo = activeModalFeature.demos[activeDemoIndex];
                  return (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-6 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group relative aspect-[4/3] flex items-center justify-center">
                          <img
                            src={currentDemo.preview}
                            alt={currentDemo.title}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                          />
                        </div>

                        <div className="md:col-span-6 space-y-5">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Illustrated Book Edition</span>
                            <h4 className="text-2xl font-black text-white mt-1">{currentDemo.title}</h4>
                            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                              Full illustrated publication including AI-generated character art, cover designs, storybook framing, and print-ready typesetting.
                            </p>
                          </div>

                          <div className="space-y-3">
                            <a
                              href={currentDemo.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
                            >
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                              </svg>
                              <span>Read & View Book PDF</span>
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </a>

                            <div className="text-center">
                              <span className="text-[11px] text-slate-500">High-resolution print & interactive digital PDF</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* 6. Poster Design: High-Res Poster Showcase */}
                {activeModalFeature.demoType === "poster" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">Full-Resolution Promotional Posters</h4>
                      <span className="text-xs text-slate-400">Click any poster for high-definition zoom</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {activeModalFeature.demos.map((demo, idx) => (
                        <div
                          key={demo.id}
                          onClick={() => setLightboxImage(demo.image)}
                          className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-pink-500/80 cursor-pointer bg-slate-900 shadow-2xl aspect-[3/4]"
                        >
                          <img
                            src={demo.image}
                            alt={demo.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                            <span className="text-xs font-bold text-white">{demo.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. Product Design: 3D Packaging & Commercial Suites */}
                {activeModalFeature.demoType === "product-renders" && (() => {
                  const currentDemo = activeModalFeature.demos[activeDemoIndex];
                  return (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">{currentDemo.title}</h4>
                        <span className="text-xs text-slate-400">Click to expand product render</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {currentDemo.images.map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => setLightboxImage(img)}
                            className="group relative rounded-xl overflow-hidden border border-slate-800 hover:border-indigo-400 cursor-pointer bg-slate-900 aspect-square shadow-lg"
                          >
                            <img src={img} alt={`Product render ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-108 transition-all duration-300" />
                            <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}

              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 bg-slate-950/90 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Ready for production: All services tailored to your exact brand aesthetics.</span>
                </div>

                {openForm && (
                  <button
                    onClick={() => {
                      setActiveModalFeature(null);
                      openForm();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Request Similar Project</span>
                    <span>→</span>
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* High-Resolution Fullscreen Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 bg-black/92 backdrop-blur-2xl cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] z-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
            >
              <img
                src={lightboxImage}
                alt="Full resolution preview"
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
              <button
                onClick={() => setLightboxImage(null)}
                aria-label="Close zoom"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Features;
