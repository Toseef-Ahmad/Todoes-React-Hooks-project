import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultVal) {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
      console.log('try block');
    } catch (e) {
      value = defaultVal;
      console.log('catch block');
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}

export default useLocalStorage;
