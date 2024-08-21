import React from 'react';

import AwardsRecognition from './AwardsRecognition';
import FooterNavigationsHome from './FooterNavigationsHome';
import JoinTeam from './JoinTeam';

export default function HomePageFooter() {
  return (
    <div>
      <AwardsRecognition />
      <JoinTeam />
      <FooterNavigationsHome />
    </div>
  );
}
