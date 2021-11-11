import React from 'react';

export default (initVal = '') => {
  const [state, setState] = React.useState(initVal);
  const changeState = () => {
    setState(!state);
  };

  return [state, changeState];
};
