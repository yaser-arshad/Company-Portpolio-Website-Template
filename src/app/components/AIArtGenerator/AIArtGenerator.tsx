import React from 'react';
import ImageText from './components/ImageText';
import UseCaseStudy from './components/UseCaseStudy';
import Challenges from './components/Challenges';
import IrApproach from './components/IrApproach';
import Solution from './components/Solution';
import Results from './components/Results';
import Screens from './components/Screens';
export default function AIArtGenerator() {
  return (
    <div className=' w-full'>
      <ImageText/>
      <UseCaseStudy/>
      <Challenges/>
      <IrApproach/>
      <Solution/>
      <Results/>
      <Screens/>
           
    
    </div>
  )
}
