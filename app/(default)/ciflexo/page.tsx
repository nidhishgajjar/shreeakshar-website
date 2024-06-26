import React from 'react';
import HeroCIFlexo from '@/components/hero-ciflexo';
import OurProcess from './ourprocess';
import Cta from '@/components/cta';

const CIFlexo = () => {
  return (
    <div>
      <HeroCIFlexo />
      <div className='pl-20'>
        <OurProcess />
      </div>
    </div>
  );
};

export default CIFlexo;
