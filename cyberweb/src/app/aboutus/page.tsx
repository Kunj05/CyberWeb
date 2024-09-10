import React from 'react';
import Header from '../header';
import TeamSection from './team-section'
import CommunitySection from './community-section'


const AboutUsPage = () => {
  return (
    <div>
      <Header/>
      <div>
          <TeamSection />
          <CommunitySection/>
        {/* Other content */}
      </div>
    </div>
    
  );
};

export default AboutUsPage;