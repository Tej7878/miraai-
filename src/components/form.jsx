import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Form = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        workEmail: '',
        phoneNumber: '',
        role: '',
        industry: '',
        city: '',
        projectRequirement: ''
    });

    const roles = [
        'Creative Director',
        'Head of Production',
        'Marketing Leader',
        'Studio Owner',
        'CEO / Founder',
        'Brand Manager',
        'Other'
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
        'Other'
    ];

    const [isSubmitting, setIsSubmitting] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://3.110.177.95:2225/api/miraai_marketing/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
            });

            // read body once
            const text = await response.text();
            let data;

            try {
                data = JSON.parse(text);
            } catch {
                data = text;
            }

            if (response.ok) {
                console.log('Form submission successful:', data);

                navigate('/thank-you');

                setFormData({
                    fullName: '',
                    companyName: '',
                    workEmail: '',
                    phoneNumber: '',
                    role: '',
                    industry: '',
                    city: '',
                    projectRequirement: ''
                });

            } else {
                console.error(`Submission failed. Status: ${response.status}`, data);

                if (response.status === 422 && data.detail && Array.isArray(data.detail)) {

                    const formattedErrors = data.detail.map(err => {
                        const fieldNameKey = err.loc[err.loc.length - 1];

                        const fieldName = fieldNameKey
                            .replace(/_/g, ' ')
                            .replace(/\b\w/g, char => char.toUpperCase());

                        return `${fieldName}: ${err.msg}`;

                    }).join('\n');

                    alert(`Please fix the following errors:\n\n${formattedErrors}`);

                } else {
                    alert(`Submission failed (${response.status}): ${typeof data === 'object' ? JSON.stringify(data) : data}`);
                }
            }

        } catch (error) {

            console.error('Network or client error:', error);

            alert('Could not reach the server. Please check your internet connection or if the backend is running.');

        } finally {

            setIsSubmitting(false);

        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center tracking-[0.5px]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-[95%] max-w-[700px] max-h-[95vh] overflow-y-auto bg-[#000004] border border-[#22D3EE1A] backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-[0_0_60px_rgba(34,211,238,0.1)] hide-scrollbar font-['Inter']">

                <style>{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>


                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 pr-8 tracking-[0.5px]">
                    Get Your Personalized Demo
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-1 tracking-[0.5px]">
                                Full Name <span className="text-gray-400 tracking-[0.5px]">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="w-full bg-[#000004] border border-[#22D3EE1A] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-1 tracking-[0.5px]">
                                Company Name <span className="text-gray-400 tracking-[0.5px]">*</span>
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Enter Your Company Name"
                                required
                                className="w-full bg-[#000004] border border-[#22D3EE1A] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                            />
                        </div>
                    </div>

                    {/* Row 2: Work Email & Phone Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-1 tracking-[0.5px]">
                                Work Email <span className="text-gray-400 tracking-[0.5px]">*</span>
                            </label>
                            <input
                                type="email"
                                name="workEmail"
                                value={formData.workEmail}
                                onChange={handleChange}
                                placeholder="you@company.com"
                                required
                                className="w-full bg-[#000004] border border-[#22D3EE1A] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-1 tracking-[0.5px]">
                                Phone Number <span className="text-gray-400 tracking-[0.5px]">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="+91 (555) 000-0000"
                                required
                                className="w-full bg-[#000004] border border-[#22D3EE1A] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                            />
                        </div>
                    </div>

                    {/* Row 3: Role & Industry */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-1 tracking-[0.5px]">
                                Role <span className="text-gray-400 tracking-[0.5px]">*</span>
                            </label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#000004] border border-[#22D3EE1A] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#22D3EE] transition-colors appearance-none cursor-pointer"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center',
                                    backgroundSize: '20px'
                                }}
                            >
                                <option value="" disabled className="bg-[#0A0A0A]">Your Role</option>
                                {roles.map((role, index) => (
                                    <option key={index} value={role} className="bg-[#0A0A0A]">{role}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-1 tracking-[0.5px]">
                                Industry / Business Type <span className="text-gray-400 tracking-[0.5px]">*</span>
                            </label>
                            <select
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#000004] border border-[#22D3EE1A] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#22D3EE] transition-colors appearance-none cursor-pointer"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center',
                                    backgroundSize: '20px'
                                }}
                            >
                                <option value="" disabled className="bg-[#0A0A0A]">Select your industry</option>
                                {industries.map((industry, index) => (
                                    <option key={index} value={industry} className="bg-[#0A0A0A]">{industry}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Row 4: City */}
                    <div className="mb-3">
                        <label className="block text-gray-300 font-bold text-sm mb-1 tracking-[0.5px]">
                            City <span className="text-gray-400 tracking-[0.5px]">*</span>
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter your city"
                            required
                            className="w-full bg-[#000004] border border-[#22D3EE1A] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                        />
                    </div>

                    {/* Row 5: Project Requirement */}
                    <div className="mb-4">
                        <label className="block text-gray-300 font-bold text-sm mb-1 tracking-[0.5px]">
                            Project Requirement
                        </label>
                        <textarea
                            name="projectRequirement"
                            value={formData.projectRequirement}
                            onChange={handleChange}
                            placeholder='Example: "We need product videos for 50 SKUs in 5 languages"'
                            rows={4}
                            className="w-full bg-[#000004] border border-[#22D3EE1A] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#22D3EE] transition-colors resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`group relative bg-white text-black font-semibold py-2.5 px-8 rounded-full flex items-center gap-2 overflow-hidden transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] tracking-[0.5px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <span className="relative z-10">✦</span>
                            <span className="relative z-10 block overflow-hidden">
                                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                                    {isSubmitting ? 'Submitting...' : 'Submit Your Request'}
                                </span>
                                <span className="absolute inset-0 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                                    {isSubmitting ? 'Submitting...' : 'Submit Your Request'}
                                </span>
                            </span>
                            <span className="relative z-10">✦</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
