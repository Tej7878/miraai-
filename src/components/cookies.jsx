import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './Footer';
import Form from './form';
import { motion } from 'framer-motion';

const cookieSections = [
    {
        id: "about",
        title: "1. About Miraai",
        content: (
            <>
                <p>Miraai is an AI-powered video production service provider offering professional advertising and marketing video creation services for businesses.</p>
                <p className="mt-4">This Cookie Policy applies to all visitors, users, and clients accessing our website.</p>
            </>
        )
    },
    {
        id: "what-are-cookies",
        title: "2. What Are Cookies?",
        content: (
            <>
                <p>Cookies are small text files that are stored on your device (computer, mobile, or tablet) when you visit a website.</p>
                <p className="mt-4 text-white font-medium">They help websites:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Remember user preferences</li>
                    <li>Improve functionality</li>
                    <li>Analyze traffic</li>
                    <li>Enhance security</li>
                    <li>Provide better user experience</li>
                </ul>
                <p className="mt-4">Cookies do not contain viruses and do not harm your device.</p>
            </>
        )
    },
    {
        id: "how-we-use",
        title: "3. How We Use Cookies",
        content: (
            <>
                <p>Miraai uses cookies to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Ensure smooth website operation</li>
                    <li>Improve loading speed and performance</li>
                    <li>Analyze visitor behavior</li>
                    <li>Track website usage patterns</li>
                    <li>Enhance security</li>
                    <li>Improve service quality</li>
                </ul>
                <p className="mt-4">We do not use cookies to collect sensitive personal information without your consent.</p>
            </>
        )
    },
    {
        id: "types-of-cookies",
        title: "4. Types of Cookies We Use",
        content: (
            <>
                <h4 className="text-white font-semibold text-lg mb-2">a) Essential Cookies</h4>
                <p className="text-gray-400 mb-2">These cookies are required for basic website functions such as:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-400">
                    <li>Page navigation</li>
                    <li>Form submissions</li>
                    <li>Security verification</li>
                    <li>Session management</li>
                </ul>
                <p className="text-gray-400 mb-6">Without these cookies, the website may not function properly.</p>

                <h4 className="text-white font-semibold text-lg mb-2">b) Performance & Analytics Cookies</h4>
                <p className="text-gray-400 mb-2">These cookies help us understand how visitors use our website, including:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-400">
                    <li>Number of visitors</li>
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                    <li>Error tracking</li>
                    <li>Traffic sources</li>
                </ul>
                <p className="text-gray-400 mb-6">This information helps us improve our website and services.</p>

                <h4 className="text-white font-semibold text-lg mb-2">c) Functionality Cookies</h4>
                <p className="text-gray-400 mb-2">These cookies remember your preferences, such as:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-400">
                    <li>Language settings</li>
                    <li>Region selection</li>
                    <li>Form auto-fill data</li>
                    <li>User preferences</li>
                </ul>
                <p className="text-gray-400 mb-6">They help provide a better and personalized experience.</p>

                <h4 className="text-white font-semibold text-lg mb-2">d) Marketing & Advertising Cookies (If Applicable)</h4>
                <p className="text-gray-400 mb-2">These cookies may be used to:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-400">
                    <li>Measure marketing campaign performance</li>
                    <li>Track conversions</li>
                    <li>Display relevant advertisements</li>
                    <li>Improve ad targeting</li>
                </ul>
                <p className="text-gray-400">Miraai does not sell your personal data to advertisers.</p>
            </>
        )
    },
    {
        id: "third-party",
        title: "5. Third-Party Cookies",
        content: (
            <>
                <p>We may allow third-party service providers to place cookies on our website, such as:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Analytics providers</li>
                    <li>Payment gateways</li>
                    <li>Marketing platforms</li>
                </ul>
                <p className="mt-4">These third parties have their own privacy and cookie policies. Miraai is not responsible for their practices.</p>
            </>
        )
    },
    {
        id: "storage-duration",
        title: "6. Cookie Storage Duration",
        content: (
            <>
                <p>Cookies may be stored as:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li><span className="text-white">Session Cookies:</span> Deleted when you close your browser</li>
                    <li><span className="text-white">Persistent Cookies:</span> Stored for a defined period</li>
                </ul>
                <p className="mt-4">Storage duration depends on the type and purpose of the cookie.</p>
            </>
        )
    },
    {
        id: "managing-preferences",
        title: "7. Managing Your Cookie Preferences",
        content: (
            <>
                <p>You can manage or disable cookies through your browser settings. You may:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Accept or reject cookies</li>
                    <li>Delete stored cookies</li>
                    <li>Block future cookies</li>
                    <li>Set browser alerts</li>
                </ul>
                <p className="mt-4">Please note that disabling cookies may affect website functionality.</p>
            </>
        )
    },
    {
        id: "consent",
        title: "8. Consent to Use Cookies",
        content: (
            <>
                <p>By using our website, you consent to the use of cookies as described in this policy.</p>
                <p>Where required by law, we may display a cookie consent banner allowing you to manage your preferences.</p>
            </>
        )
    },
    {
        id: "data-protection",
        title: "9. Data Protection & Privacy",
        content: (
            <>
                <p>Information collected through cookies is processed in accordance with our Privacy Policy.</p>
                <p>We take appropriate technical and organizational measures to protect your data.</p>
            </>
        )
    },
    {
        id: "dnt",
        title: "10. Do Not Track (DNT) Signals",
        content: (
            <>
                <p>Some browsers provide a “Do Not Track” feature.</p>
                <p>Currently, our website does not respond differently to DNT signals, but we continue to monitor regulatory standards.</p>
            </>
        )
    },
    {
        id: "updates",
        title: "11. Updates to This Cookie Policy",
        content: (
            <>
                <p>Miraai reserves the right to update this Cookie Policy at any time.</p>
                <p>Any changes will be posted on this page with a revised “Last Updated” date.</p>
                <p>Continued use of the website indicates acceptance of the updated policy.</p>
            </>
        )
    },
    {
        id: "contact",
        title: "12. Contact Information",
        content: (
            <>
                <p>If you have any questions about this Cookie Policy, please contact us:</p>
                <p className="mt-2 text-white"><span className="text-gray-400">Email:</span> info@inaiworlds.com</p>
            </>
        )
    },
];

const CookiePolicy = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    // Scroll spy logic listening to Window
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for better detection

            for (const section of cookieSections) {
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
                                {cookieSections.map((section) => (
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
                            <h1 className="text-[25px] md:text-[40px] font-bold mb-6 leading-tight tracking-[0.5px]">Cookie Policy</h1>
                            <p className="text-gray-400 text-[18px] max-w-3xl leading-relaxed tracking-[0.5px]">
                                This Cookie Policy explains how Miraai uses cookies and similar technologies on its website to improve user experience, analyze website performance, and provide better services.
                                By continuing to use our website, you agree to the use of cookies in accordance with this policy.
                            </p>
                        </div>

                        <div className="flex flex-col gap-12">
                            {cookieSections.map((section) => (
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

export default CookiePolicy;
