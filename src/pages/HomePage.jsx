import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

import CourseHighlights from '../components/CourseHighlights';
import ExamCarousel from '../components/ExamCarousel';
import Features from '../components/Features';
import LatestUpdates from '../components/LatestUpdates';
import TopPerformers from '../components/TopPerformers';
import Testimonials from '../components/Testimonials';
import CampaignCarousel from '../components/CampaignCarousel';

function HomePage() {
  return( 
    <>
    <Hero/>
   
    <LatestUpdates/>
    <CampaignCarousel />
    <TopPerformers/>
   <CourseHighlights/>

 

   <ExamCarousel/>
   <Features/>
   <Testimonials/>
  
    </>
  );
}

export default HomePage;