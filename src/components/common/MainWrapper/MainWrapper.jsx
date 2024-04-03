import React from 'react';
import './MainWrapper.sass';

const MainWrapper = ({ children }) => {
  return <section className="main-wrapper">{children}</section>;
};

export default MainWrapper;