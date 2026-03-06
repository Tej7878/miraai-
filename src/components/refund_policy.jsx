import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './Footer';
import Form from './form';
import { motion } from 'framer-motion';

const refundSections = [
    {
        id: "scope",
        title: "1. Scope of Services",
        content: (
            <>
                <p>Miraai provides customized AI-powered video creation services, including but not limited to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Advertising and promotional videos</li>
                    <li>UGC-style marketing videos</li>
                    <li>Product and business marketing videos</li>
                    <li>Real estate walkthrough videos</li>
                    <li>Industry-specific custom video projects</li>
                </ul>
                <p className="mt-4">All services are delivered digitally and are customized based on client requirements. Due to the personalized and digital nature of our services, special refund conditions apply.</p>
            </>
        )
    },
    {
        id: "initiation",
        title: "2. Order Confirmation & Service Initiation",
        content: (
            <>
                <p>A project is considered officially initiated once:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>The client confirms the project scope</li>
                    <li>Payment (full or partial advance) is received</li>
                    <li>Production planning begins</li>
                </ul>
                <p className="mt-4">Upon initiation:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>AI systems are allocated</li>
                    <li>Creative resources are assigned</li>
                    <li>Project timelines are activated</li>
                </ul>
                <p className="mt-4">This marks the official start of service delivery.</p>
            </>
        )
    },
    {
        id: "general-refund",
        title: "3. General Refund Policy",
        content: (
            <>
                <p>Due to the customized and service-based nature of our work, payments made to Miraai are generally non-refundable.</p>
                <p className="mt-2 text-white font-medium">Refunds may only be considered in the following exceptional cases:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Duplicate payment</li>
                    <li>Payment processing error</li>
                    <li>Verified service failure caused solely by Miraai</li>
                    <li>Service not initiated due to Miraai’s fault</li>
                </ul>
                <p className="mt-4 text-white font-medium">Refunds will not be provided if:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Production has begun</li>
                    <li>Drafts have been shared</li>
                    <li>Revisions have been provided</li>
                    <li>The client changes requirements mid-project</li>
                    <li>Delays are caused by the client</li>
                </ul>
            </>
        )
    },
    {
        id: "cancellation",
        title: "4. Cancellation Policy",
        content: (
            <>
                <h4 className="text-white font-semibold text-lg mt-4 mb-2">4.1 Cancellation Before Work Begins</h4>
                <p className="text-gray-400">If cancellation is requested before production starts, a partial refund may be issued after deducting administrative or processing costs.</p>

                <h4 className="text-white font-semibold text-lg mt-6 mb-2">4.2 Cancellation After Work Has Started</h4>
                <p className="text-gray-400">If cancellation is requested after production begins, no refund will be issued. Resources, AI processing time, and expert effort are considered consumed.</p>

                <h4 className="text-white font-semibold text-lg mt-6 mb-2">4.3 Cancellation After Delivery</h4>
                <p className="text-gray-400">Once final files are delivered and approved, no refund or cancellation request will be accepted.</p>
            </>
        )
    },
    {
        id: "subscription",
        title: "5. Subscription-Based Services (If Applicable)",
        content: (
            <>
                <p>If Miraai offers recurring service plans:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Fees are charged in advance</li>
                    <li>No refunds for partially used billing periods</li>
                    <li>Cancellation applies to the next billing cycle</li>
                </ul>
                <p className="mt-4">Clients must cancel prior to renewal to avoid charges.</p>
            </>
        )
    },
    {
        id: "one-time",
        title: "6. One-Time Service Projects",
        content: (
            <>
                <p>For single project engagements:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Payments are non-refundable once production begins</li>
                    <li>No refund after draft or partial delivery</li>
                    <li>Revisions are provided instead of refunds</li>
                </ul>
            </>
        )
    },
    {
        id: "revisions",
        title: "7. Revision Policy (Instead of Refunds)",
        content: (
            <>
                <p>Miraai prioritizes service improvement over refunds. If the client is dissatisfied:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Revisions will be provided as per the selected package</li>
                    <li>Feedback will be incorporated professionally</li>
                    <li>Final delivery will align with agreed project scope</li>
                </ul>
                <p className="mt-4">Revisions do not extend beyond originally agreed requirements.</p>
            </>
        )
    },
    {
        id: "non-refundable",
        title: "8. Non-Refundable Services",
        content: (
            <>
                <p>The following services are strictly non-refundable:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Customized video projects</li>
                    <li>Promotional and advertising videos</li>
                    <li>UGC-style videos</li>
                    <li>Express / urgent delivery projects</li>
                    <li>Discounted or promotional packages</li>
                    <li>Completed milestone-based work</li>
                </ul>
            </>
        )
    },
    {
        id: "failed-payments",
        title: "9. Failed or Incorrect Payments",
        content: (
            <>
                <p>If a payment error occurs:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>The client must notify Miraai within 7 days</li>
                    <li>Verified errors will be refunded</li>
                    <li>Payment gateway processing fees may be deducted</li>
                    <li>Refunds will be issued only after confirmation</li>
                </ul>
            </>
        )
    },
    {
        id: "processing",
        title: "10. Refund Processing Timeline",
        content: (
            <>
                <p>Approved refunds will be:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Processed within 7–10 working days</li>
                    <li>Credited to the original payment method</li>
                    <li>Subject to banking timelines</li>
                </ul>
                <p className="mt-4">Miraai is not responsible for delays caused by banks or payment gateways.</p>
            </>
        )
    },
    {
        id: "taxes",
        title: "11. Taxes & Government Charges",
        content: (
            <>
                <p>All applicable taxes, including GST and statutory levies, are non-refundable unless legally required.</p>
                <p>Government charges and payment gateway fees are non-refundable.</p>
            </>
        )
    },
    {
        id: "suspension",
        title: "12. Suspension or Termination of Services",
        content: (
            <>
                <p>Miraai reserves the right to suspend or terminate services if:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Payment obligations are not fulfilled</li>
                    <li>Policy terms are violated</li>
                    <li>Services are misused</li>
                    <li>Illegal or unethical content is requested</li>
                </ul>
                <p className="mt-4">No refunds will apply in such cases.</p>
            </>
        )
    },
    {
        id: "chargebacks",
        title: "13. Chargebacks & Payment Disputes",
        content: (
            <>
                <p>Clients must contact Miraai before initiating any chargeback. Unjustified chargebacks may result in:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Immediate service suspension</li>
                    <li>Permanent account restriction</li>
                    <li>Legal action for recovery</li>
                </ul>
                <p className="mt-4">We encourage dispute resolution through direct communication.</p>
            </>
        )
    },
    {
        id: "force-majeure",
        title: "14. Force Majeure",
        content: (
            <>
                <p>Miraai shall not be liable for delays or service interruption caused by events beyond reasonable control, including:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>Natural disasters</li>
                    <li>Government restrictions</li>
                    <li>Technical outages</li>
                    <li>Internet or infrastructure failure</li>
                </ul>
            </>
        )
    },
    {
        id: "modifications",
        title: "15. Policy Modifications",
        content: (
            <>
                <p>Miraai reserves the right to update or modify this policy at any time.</p>
                <p>Revised versions will be posted on this page with an updated date. Continued use of services implies acceptance of the revised policy.</p>
            </>
        )
    },
    {
        id: "governing-law",
        title: "16. Governing Law & Jurisdiction",
        content: (
            <>
                <p>This policy shall be governed by the laws of India.</p>
                <p>All disputes shall be subject to the exclusive jurisdiction of courts in Surat, Gujarat.</p>
            </>
        )
    },
    {
        id: "contact",
        title: "17. Contact Information",
        content: (
            <>
                <p>For refund or cancellation queries, contact us at:</p>
                <p className="mt-2 text-white"><span className="text-gray-400">Email:</span> info@inaiworlds.com</p>
            </>
        )
    },
];

const RefundPolicy = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("scope");

    // Scroll spy logic listening to Window
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for better detection

            for (const section of refundSections) {
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
                                {refundSections.map((section) => (
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
                            <h1 className="text-[25px] md:text-[40px] font-bold mb-6 leading-tight tracking-[0.5px]">Refund & Cancellation Policy</h1>
                            <p className="text-gray-400 text-[18px] max-w-3xl leading-relaxed tracking-[0.5px]">
                                This Refund & Cancellation Policy governs the terms under which cancellations, refunds, and payment adjustments are handled by Miraai for its AI-powered video production services.
                                By engaging Miraai’s services, you acknowledge that you have read, understood, and agreed to this policy.
                            </p>
                        </div>

                        <div className="flex flex-col gap-12">
                            {refundSections.map((section) => (
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

export default RefundPolicy;
