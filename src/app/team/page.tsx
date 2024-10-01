import React from 'react';

import CommunitySection from '../../components/team/community-section'
import TeamSection from '@/components/team/team-section';
import GlassmorphismCards from './glass';

const AboutUsPage = () => {
  return (
    <div>
      <GlassmorphismCards/>
      <CommunitySection/>
    </div>
    
  );
};

export default AboutUsPage;