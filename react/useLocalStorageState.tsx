// taken from Kent C. Dodds' Beginner's Guide to React (https://egghead.io/lessons/react-create-reusable-custom-hooks)

import React, { useEffect, useState } from "react";

type Hook = [string, React.Dispatch<React.SetStateAction<string>>];

export const useLocalStorageState = (key: string, defaultValue = ""): Hook => {
  const [state, setState] = useState(
    () =>
      (typeof window !== "undefined" && window.localStorage.getItem(key)) ||
      defaultValue
  );

  useEffect(() => {
    typeof window !== "undefined" && window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
