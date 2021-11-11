import React from 'react';

const useInput = (initVal = '') => {
  const [state, setState] = React.useState(initVal);

  const handleChange = ({ target }) => {
    setState(target.value);
  };

  const reset = () => {
    setState('');
  };

  return [state, handleChange, reset];
};

export default useInput;
