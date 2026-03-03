import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './Footer';
import Form from './form';
import { motion } from 'framer-motion';

const termSections = [
    {
        id: "about",
        title: "1. About Miraai",
        content: (
            <>
                <p>Miraai is an AI-powered creative production service provider offering professional video, image, branding, and marketing content services to businesses and individuals.</p>
                <p>We provide done-for-you creative services using artificial intelligence and human expertise.</p>
            </>
        )
    },
    {
        id: "acceptance",
        title: "2. Acceptance of Terms",
        content: (
            <>
                <p>By using our website, submitting a request, or engaging our services, you confirm that:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>You have read and understood these Terms</li>
                    <li>You agree to be legally bound by them</li>
                    <li>You are at least 18 years old</li>
                </ul>
                <p className="mt-4">If you do not agree, please do not use our services.</p>
            </>
        )
    },
    {
        id: "scope",
        title: "3. Scope of Services",
        content: (
            <>
                <p>Miraai provides:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>AI-powered video production</li>
                    <li>Image and design services</li>
                    <li>UGC ad creation</li>
                    <li>Catalog design</li>
                    <li>Branding creatives</li>
                    <li>Content localization</li>
                </ul>
                <p className="mt-4">All services are delivered based on client requirements and agreed scope.</p>
            </>
        )
    },
    {
        id: "process",
        title: "4. Service Process",
        content: (
            <>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Client submits project details</li>
                    <li>Miraai reviews and confirms scope</li>
                    <li>Production begins</li>
                    <li>Client reviews draft</li>
                    <li>Revisions (as per package)</li>
                    <li>Final delivery</li>
                </ul>
                <p className="mt-4">Delivery timelines are estimates and may vary depending on project complexity.</p>
            </>
        )
    },
    {
        id: "responsibilities",
        title: "5. Client Responsibilities",
        content: (
            <>
                <p>Clients agree to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Provide accurate project information</li>
                    <li>Ensure legal rights to provided materials</li>
                    <li>Respond to approvals on time</li>
                    <li>Avoid illegal or misleading content requests</li>
                </ul>
                <p className="mt-4">Miraai is not responsible for delays caused by incomplete information.</p>
            </>
        )
    },
    {
        id: "pricing",
        title: "6. Pricing & Payments",
        content: (
            <>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>All pricing is shared before project start</li>
                    <li>Payments must be made as per invoice terms</li>
                    <li>Advance payment may be required</li>
                    <li>Taxes (GST) are applicable where required</li>
                </ul>
                <p className="mt-4">Non-payment may result in service suspension.</p>
            </>
        )
    },
    {
        id: "revisions",
        title: "7. Revisions & Modifications",
        content: (
            <>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Revisions are provided as per agreed package</li>
                    <li>Major changes beyond scope may incur extra charges</li>
                    <li>Unlimited revisions are not guaranteed unless stated</li>
                </ul>
            </>
        )
    },
    {
        id: "intellectual-property",
        title: "8. Intellectual Property Rights",
        content: (
            <>
                <h4 className="text-white font-semibold text-lg mb-2">Client Content</h4>
                <p className="text-gray-400 mb-4">Clients retain ownership of materials they provide.</p>

                <h4 className="text-white font-semibold text-lg mb-2">Delivered Content</h4>
                <p className="text-gray-400 mb-4">Upon full payment, ownership of final deliverables is transferred to the client unless otherwise agreed.</p>

                <h4 className="text-white font-semibold text-lg mb-2">Miraai Assets</h4>
                <p className="text-gray-400">Templates, workflows, and internal tools remain Miraai’s property.</p>
            </>
        )
    },
    {
        id: "confidentiality",
        title: "9. Confidentiality",
        content: (
            <>
                <p>Both parties agree to keep business information, data, and project details confidential unless legally required.</p>
            </>
        )
    },
    {
        id: "security",
        title: "10. Data Security",
        content: (
            <>
                <p>We use reasonable technical and organizational measures to protect client data. However, no system is 100% secure.</p>
            </>
        )
    },
    {
        id: "prohibited",
        title: "11. Prohibited Use",
        content: (
            <>
                <p>You may not use our services for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Illegal activities</li>
                    <li>Hate or abusive content</li>
                    <li>Copyright infringement</li>
                    <li>Fraud or deception</li>
                    <li>Adult or obscene content</li>
                </ul>
                <p className="mt-4">We reserve the right to refuse such projects.</p>
            </>
        )
    },
    {
        id: "availability",
        title: "12. Service Availability",
        content: (
            <>
                <p>We aim for high availability but do not guarantee uninterrupted service due to maintenance, technical issues, or external factors.</p>
            </>
        )
    },
    {
        id: "liability",
        title: "13. Limitation of Liability",
        content: (
            <>
                <p>Miraai shall not be liable for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Indirect or consequential losses</li>
                    <li>Business interruption</li>
                    <li>Loss of profits</li>
                    <li>Third-party platform issues</li>
                </ul>
                <p className="mt-4">Our maximum liability is limited to the amount paid for services.</p>
            </>
        )
    },
    {
        id: "termination",
        title: "14. Termination",
        content: (
            <>
                <p>We may suspend or terminate services if:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Terms are violated</li>
                    <li>Payments are pending</li>
                    <li>Illegal use is detected</li>
                </ul>
                <p className="mt-4">Clients may terminate by written notice, subject to payment obligations.</p>
            </>
        )
    },
    {
        id: "third-party",
        title: "15. Third-Party Services",
        content: (
            <>
                <p>We may use third-party tools (cloud hosting, payment gateways, etc.). Miraai is not responsible for their policies.</p>
            </>
        )
    },
    {
        id: "governing-law",
        title: "16. Governing Law",
        content: (
            <>
                <p>These Terms are governed by the laws of India. Any disputes shall be subject to Surat, Gujarat jurisdiction.</p>
            </>
        )
    },
    {
        id: "changes",
        title: "17. Changes to Terms",
        content: (
            <>
                <p>We may update these Terms periodically. Continued use means acceptance of changes.</p>
            </>
        )
    },
    {
        id: "contact",
        title: "18. Contact Information",
        content: (
            <>
                <p>For queries:</p>
                <p className="mt-2 text-white"><span className="text-gray-400">Email:</span> info@inaiworlds.com</p>
            </>
        )
    },
];

const TermsCondition = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    // Scroll spy logic listening to Window
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for better detection

            for (const section of termSections) {
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
                                {termSections.map((section) => (
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
                            <h1 className="text-[25px] md:text-[40px] font-bold mb-6 leading-tight tracking-[0.5px]">Terms of Service</h1>
                            <p className="text-gray-400 text-[18px] max-w-3xl leading-relaxed tracking-[0.5px]">
                                Welcome to Miraai. These Terms of Service (“Terms”) govern your use of our website and services. By accessing or using our services, you agree to comply with these Terms.
                            </p>
                        </div>

                        <div className="flex flex-col gap-12">
                            {termSections.map((section) => (
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

export default TermsCondition;
