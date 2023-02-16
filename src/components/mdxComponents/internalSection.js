import * as React from 'react';

const InternalSection = ({ children }) => {
  console.log(process.env);
  if (process.env.SHOW_INTERNAL) {
    return children;
  }
  return null;
};

export default InternalSection;
