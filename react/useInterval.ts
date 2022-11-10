// taken from Dan Abramov's blog (https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

import { useEffect, useRef } from "react";

// run the callback every time after a certain delay (i.e. not just once but continuously)
export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => savedCallback.current?.();

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

// USAGE
/* 
const Counter = () => {
  let [count, setCount] = useState(0);
  useInterval(() => { setCount(count + 1) }, 1000);

  return <h1>{count}</h1>;
}

// when you want to be able to pause the interval:
const Counter = () => {
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => { setCount(count + 1) }, isRunning ? delay : null);

  return <h1>{count}</h1>;
}
*/
