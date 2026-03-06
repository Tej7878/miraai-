import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './Footer';
import Form from './form';
import { motion } from 'framer-motion';

const disclaimerSections = [
    {
        id: "general",
        title: "1. General Information",
        content: (
            <>
                <p>Miraai is an AI-powered creative production service provider offering professional video, image, branding, and digital content creation services.</p>
                <p className="mt-4">While we strive to ensure accuracy, quality, and reliability, we do not guarantee that all information, content, or services will always be error-free, complete, or up to date.</p>
            </>
        )
    },
    {
        id: "no-professional-advice",
        title: "2. No Professional Advice",
        content: (
            <>
                <p>All content, materials, and services provided by Miraai are intended for creative and marketing purposes only.</p>
                <p className="mt-4">They do not constitute legal, financial, medical, or professional advice. Clients are encouraged to consult appropriate professionals for specific business or legal decisions.</p>
            </>
        )
    },
    {
        id: "service-results",
        title: "3. Service Results Disclaimer",
        content: (
            <>
                <p>Miraai uses advanced AI technology and human expertise to deliver high-quality creative services. However:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Results may vary based on client inputs, market conditions, and audience behavior.</li>
                    <li>We do not guarantee specific sales, revenue, or marketing outcomes.</li>
                    <li>Past performance does not guarantee future results.</li>
                </ul>
                <p className="mt-4">Our services are focused on improving creative quality and efficiency, not guaranteeing business success.</p>
            </>
        )
    },
    {
        id: "client-responsibility",
        title: "4. Client Responsibility",
        content: (
            <>
                <p>Clients are responsible for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Providing accurate and lawful content</li>
                    <li>Ensuring ownership or permission for materials submitted</li>
                    <li>Reviewing and approving final deliverables</li>
                    <li>Using delivered content in compliance with applicable laws</li>
                </ul>
                <p className="mt-4">Miraai is not responsible for issues arising from incorrect or unauthorized client-provided materials.</p>
            </>
        )
    },
    {
        id: "intellectual-property",
        title: "5. Intellectual Property Disclaimer",
        content: (
            <>
                <p>Unless otherwise agreed in writing:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Clients retain ownership of their original materials.</li>
                    <li>Ownership of final deliverables is transferred after full payment.</li>
                    <li>Miraai retains rights to internal tools, workflows, and templates.</li>
                    <li>Unauthorized use of Miraai’s intellectual property is prohibited.</li>
                </ul>
            </>
        )
    },
    {
        id: "third-party",
        title: "6. Third-Party Platforms",
        content: (
            <>
                <p>Our services may involve third-party platforms such as social media networks, advertising platforms, cloud services, and payment gateways.</p>
                <p className="mt-4 text-white font-medium">Miraai is not responsible for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Policy changes</li>
                    <li>Technical failures</li>
                    <li>Account suspensions</li>
                    <li>Service interruptions</li>
                    <li>Data breaches on third-party systems</li>
                </ul>
                <p className="mt-4">Clients are subject to the terms of those platforms.</p>
            </>
        )
    },
    {
        id: "website-use",
        title: "7. Website Use Disclaimer",
        content: (
            <>
                <p>We make reasonable efforts to keep our website functional and secure. However, we do not guarantee:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Continuous availability</li>
                    <li>Error-free operation</li>
                    <li>Protection from viruses or cyber threats</li>
                </ul>
                <p className="mt-4">Users access the website at their own risk.</p>
            </>
        )
    },
    {
        id: "liability",
        title: "8. Limitation of Liability",
        content: (
            <>
                <p>To the maximum extent permitted by law, Miraai shall not be liable for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Direct or indirect losses</li>
                    <li>Business interruption</li>
                    <li>Loss of profits</li>
                    <li>Loss of data</li>
                    <li>Reputation damage</li>
                </ul>
                <p className="mt-4">Our total liability, if any, is limited to the amount paid for services.</p>
            </>
        )
    },
    {
        id: "testimonials",
        title: "9. Testimonials & Examples",
        content: (
            <>
                <p>Any testimonials, case studies, or examples displayed on our website represent individual experiences.</p>
                <p>They do not guarantee similar results for all clients.</p>
            </>
        )
    },
    {
        id: "external-links",
        title: "10. External Links Disclaimer",
        content: (
            <>
                <p>Our website may contain links to external websites. These are provided for convenience only.</p>
                <p>Miraai does not endorse or control the content of external sites and is not responsible for their practices.</p>
            </>
        )
    },
    {
        id: "changes",
        title: "11. Changes to This Disclaimer",
        content: (
            <>
                <p>We reserve the right to modify this Disclaimer at any time without prior notice.</p>
                <p>Updated versions will be posted on this page with a revised date.</p>
            </>
        )
    },
    {
        id: "contact",
        title: "12. Contact Information",
        content: (
            <>
                <p>For questions regarding this Disclaimer, please contact:</p>
                <p className="mt-2 text-white"><span className="text-gray-400">Email:</span> info@inaiworlds.com</p>
            </>
        )
    },
];

const Disclaimer = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("general");

    // Scroll spy logic listening to Window
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for better detection

            for (const section of disclaimerSections) {
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
                                {disclaimerSections.map((section) => (
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
                            <h1 className="text-[25px] md:text-[40px] font-bold mb-6 leading-tight tracking-[0.5px]">Disclaimer</h1>
                            <p className="text-gray-400 text-[18px] max-w-3xl leading-relaxed tracking-[0.5px]">
                                The information provided on the Miraai website and through our services is for general informational and business purposes only. By accessing our website or using our services, you agree to the terms of this Disclaimer.
                            </p>
                        </div>

                        <div className="flex flex-col gap-12">
                            {disclaimerSections.map((section) => (
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

export default Disclaimer;
