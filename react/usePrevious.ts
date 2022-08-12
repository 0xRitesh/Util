// taken from the React Docs (https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)

import { useEffect, useRef } from "react";

// get the value from the previous render
export const usePrevious = <T>(value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

// USAGE
/*
const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
  return <h1>Now: {count}, before: {prevCount}</h1>
}
*/
