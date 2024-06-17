import React from 'react';
import HeroLabelsAndTags from '@/components/hero-labelsandtags';
import OurProcess from './ourprocess';
import Cta from '@/components/cta';

const LabelsAndTags = () => {
  return (
    <div>
      <HeroLabelsAndTags />
      <div className='pl-20'>
        <OurProcess />
      </div>
    </div>
  );
};

export default LabelsAndTags;
