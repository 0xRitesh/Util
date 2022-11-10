// taken from https://github.com/facebook/react/issues/16474#issuecomment-582225302
import React, { useDebugValue, useState } from "react";

type Hook<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useStateWithLabel = <T,>(
  initialValue: T,
  name: string
): Hook<T> => {
  const [value, setValue] = useState<T>(initialValue);
  useDebugValue(`${name}: ${value}`);
  return [value, setValue];
};

// USAGE
/*
const FComponent = () => {
 const [item, setItem] = useStateWithLabel(2, "item");
};
*/
