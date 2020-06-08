import { useEffect, useRef } from 'react';

type Hook = (callback: () => void) => void;

const useInterval: Hook = callback => {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
};

export default useInterval;
