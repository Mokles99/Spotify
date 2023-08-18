// LayoutHome.tsx
import React from 'react';
import Home from '../Components/Home/Home'
import One from '../Components/SectionOne/One';
import Two from '../Components/SectionTwo/Two';

const LayoutHome: React.FC = () => {
  return (
    <div>
      <Home />
      <One />
      <Two />
    </div>
  );
}

export default LayoutHome;
