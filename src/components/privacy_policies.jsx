import React, { useState, useEffect, useRef } from 'react';
import Header from './header';
import Footer from './Footer';
import Form from './form';
import { motion } from 'framer-motion';

const policySections = [
    {
        id: "information-collect",
        title: "1. Information We Collect",
        content: (
            <>
                <h4 className="text-white font-semibold text-lg mb-2">Personal Information</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Name, email, phone number, company details</li>
                    <li>Billing and payment information</li>
                </ul>

                <h4 className="text-white font-semibold text-lg mt-6 mb-2">Project Information</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Creative briefs, scripts, and content</li>
                    <li>Images, videos, and branding assets</li>
                    <li>Marketing materials and campaign data</li>
                </ul>

                <h4 className="text-white font-semibold text-lg mt-6 mb-2">Technical Information</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>IP address, browser type, device information</li>
                    <li>Website usage data and cookies</li>
                </ul>
            </>
        )
    },
    {
        id: "use-information",
        title: "2. How We Use Your Information",
        content: (
            <>
                <p>We use your information to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Deliver our creative production services</li>
                    <li>Process payments and manage your account</li>
                    <li>Communicate about projects and provide support</li>
                    <li>Improve our services and website</li>
                    <li>Send service updates and promotional materials (with consent)</li>
                    <li>Comply with legal obligations</li>
                </ul>
            </>
        )
    },
    {
        id: "legal-basis",
        title: "3. Legal Basis for Processing",
        content: (
            <>
                <p>We process your data based on:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Your consent</li>
                    <li>Contractual necessity</li>
                    <li>Legal compliance</li>
                    <li>Legitimate business interests</li>
                </ul>
            </>
        )
    },
    {
        id: "data-sharing",
        title: "4. Data Sharing",
        content: (
            <>
                <p>We do not sell your personal information.</p>
                <p className="mt-4">We may share data with:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Payment processors and cloud hosting providers</li>
                    <li>IT and security service providers</li>
                    <li>Legal authorities when required by law</li>
                    <li>Professional advisors under confidentiality agreements</li>
                </ul>
                <p className="mt-4">All third parties are contractually bound to protect your data.</p>
            </>
        )
    },
    {
        id: "security-retention",
        title: "5. Data Security & Retention",
        content: (
            <>
                <h4 className="text-white font-semibold text-lg mb-2">Security Measures:</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Encrypted storage and transmission</li>
                    <li>Secure access controls</li>
                    <li>Regular security monitoring</li>
                    <li>Employee confidentiality training</li>
                </ul>

                <h4 className="text-white font-semibold text-lg mt-6 mb-2">Retention:</h4>
                <p className="text-gray-400">We retain your data only as long as necessary for service delivery, legal compliance, and business records. Data is securely deleted when no longer needed.</p>
            </>
        )
    },
    {
        id: "cookies",
        title: "6. Cookies",
        content: (
            <>
                <p>We use cookies to improve website performance and user experience. You can manage cookies through your browser settings, though this may affect website functionality.</p>
                <h4 className="text-white font-semibold text-lg mt-4 mb-2">Cookie Types:</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Essential (required for functionality)</li>
                    <li>Performance (analytics)</li>
                    <li>Functionality (preferences)</li>
                    <li>Marketing (relevant content)</li>
                </ul>
            </>
        )
    },
    {
        id: "confidentiality",
        title: "7. Client Confidentiality",
        content: (
            <>
                <p>All client projects, materials, and communications are strictly confidential. We do not share your content without permission, except when legally required.</p>
            </>
        )
    },
    {
        id: "rights",
        title: "8. Your Rights",
        content: (
            <>
                <p>You have the right to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Access your personal data</li>
                    <li>Request corrections or deletion</li>
                    <li>Withdraw consent</li>
                    <li>Restrict or object to processing</li>
                    <li>Request data portability</li>
                </ul>
                <p className="mt-4">To exercise your rights, contact us at <span className="text-white">privacy@miraai.com</span></p>
            </>
        )
    },
    {
        id: "third-party",
        title: "9. Third-Party Links",
        content: (
            <>
                <p>Our website may link to third-party sites. We are not responsible for their privacy practices. Please review their policies before sharing information.</p>
            </>
        )
    },
    {
        id: "children-privacy",
        title: "10. Children's Privacy",
        content: (
            <>
                <p>Our services are not intended for individuals under 18. We do not knowingly collect data from minors.</p>
            </>
        )
    },
    {
        id: "international",
        title: "11. International Transfers",
        content: (
            <>
                <p>If data is transferred outside India, we ensure appropriate safeguards and comply with data protection laws.</p>
            </>
        )
    },
    {
        id: "updates",
        title: "12. Policy Updates",
        content: (
            <>
                <p>We may update this Privacy Policy periodically. Changes will be posted with a revised date. Continued use of our services indicates acceptance of updates.</p>
            </>
        )
    },
    {
        id: "contact",
        title: "13. Contact Us",
        content: (
            <>
                <p>For questions or concerns about this Privacy Policy:</p>
                <p className="mt-2 text-white"><span className="text-gray-400">Email:</span> info@inaiworlds.com</p>
            </>
        )
    },
];

const PrivacyPolicy = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("information-collect");

    // Scroll spy logic listening to Window
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for better detection

            for (const section of policySections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="bg-black min-h-screen text-white font-['Inter'] flex flex-col">
            <Header openForm={() => setIsFormOpen(true)} />

            {/* Main Content Container */}
            <div className="flex-1 pt-28 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto w-full relative">

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                    {/* Left Sidebar - Sticky */}
                    <div className="hidden lg:block w-[320px] shrink-0 sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto customized-scrollbar">
                        <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 mb-8">
                            <h3 className="text-xl font-bold mb-6 text-white">Table of Contents</h3>
                            <nav className="flex flex-col space-y-1">
                                {policySections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === section.id
                                            ? "bg-[#1A1A1A] text-white shadow-lg border border-white/5"
                                            : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 w-full min-w-0">
                        <div className="mb-12">
                            <h1 className="text-[25px] md:text-[40px] font-bold mb-6 leading-tight tracking-[0.5px]">Privacy Policy</h1>
                            <p className="text-gray-400 text-[18px] max-w-3xl leading-relaxed tracking-[0.5px]">
                                Miraai ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered creative production services.
                                By using our services, you agree to this Privacy Po licy.
                            </p>
                        </div>

                        <div className="flex flex-col gap-12">
                            {policySections.map((section) => (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors duration-500 relative"
                                >
                                    <h2 className="text-2xl font-bold mb-6 text-white">{section.title}</h2>
                                    <div className="text-gray-400 leading-relaxed text-base space-y-4">
                                        {section.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

            {/* Full Width Footer at the bottom */}
            <Footer />

            <style jsx>{`
                .customized-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .customized-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .customized-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .customized-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;
