import React from 'react';
import './MainWrapper.sass';

const MainWrapper = ({ children }) => {
  return <main className="main-wrapper"><div className="main-wrapper__inner">{children}</div></main>;
};

export default MainWrapper;