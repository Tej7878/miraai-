import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThankU from '../components/thank_u';

const ThankYouPage = () => {
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);

        // Auto redirect after 6 seconds
        const timer = setTimeout(() => {
            navigate('/');
        }, 6000);

        return () => clearTimeout(timer);
    }, [navigate]);

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#000004] flex items-center justify-center py-10 font-['Inter'] tracking-[0.5px]">
            <div className="w-full max-w-[1200px]">
                <ThankU onClose={handleBackToHome} />
            </div>
        </div>
    );
};

export default ThankYouPage;
