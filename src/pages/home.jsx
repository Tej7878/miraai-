import React, { useState } from 'react';
import '../App.css'
import Hero from '../components/hero'
import Percentage from '../components/percentage'
import Form from '../components/form'
import Features from '../components/features'
import TrustMiraai from '../components/trust_miraai'
import DoBest from '../components/comparison'
import AiContent from '../components/ai_content'
import Header from '../components/header'
import Supportingline from '../components/Supportingline';
import UsesMiraai from '../components/UsesMiraai';
import BusinessesChooseMiraai from '../components/BusinessesChooseMiraai';
import Creativerevisualization from '../components/Creativerevisualization';
import Aidesigngenration from '../components/Aidesigngenration';
import Whatourclientssay from '../components/whatourclientssay';
import Calltoaction from '../components/Calltoaction';
import Frequentlyaskedquestions from '../components/Frequentlyaskedquestions';
import Footer from '../components/Footer';
import Whatwedo from '../components/Whatwedo';

function Home() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="tracking-[0.5px] min-h-screen py-20">
            <Header openForm={() => setIsFormOpen(true)} />
            <Hero openForm={() => setIsFormOpen(true)} />
            <Percentage />
            <Features />
            <Creativerevisualization openForm={() => setIsFormOpen(true)} />
            <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
            <TrustMiraai />
            <Whatwedo />
            <DoBest />
            <AiContent />
            <Supportingline />
            <UsesMiraai />
            <BusinessesChooseMiraai />
            <Aidesigngenration />
            <Whatourclientssay />
            <Calltoaction openForm={() => setIsFormOpen(true)} />
            <Frequentlyaskedquestions />
            <Footer />
        </div>
    )
}

export default Home
