import React from 'react';
import Header from '../header';
import TeamSection from './team-section'
import CommunitySection from './community-section'
import Footer from '../components/footer';

const AboutUsPage = () => {
  return (
    <div>
      <Header/>
        <div>
            <TeamSection />
            <CommunitySection/>
        </div>
      <Footer/>
    </div>
    
  );
};

export default AboutUsPage;