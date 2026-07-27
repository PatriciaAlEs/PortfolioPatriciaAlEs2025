import { useCallback, useState } from "react";

const readSessionValue = (key, fallback) => {
  try {
    const value = window.sessionStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
};

export default function useSessionState(key, fallback) {
  const [value, setValue] = useState(() => readSessionValue(key, fallback));

  const updateValue = useCallback((nextValue) => {
    setValue((current) => {
      const resolved = typeof nextValue === "function" ? nextValue(current) : nextValue;
      try {
        window.sessionStorage.setItem(key, JSON.stringify(resolved));
      } catch {
        // The interaction still works when session storage is unavailable.
      }
      return resolved;
    });
  }, [key]);

  return [value, updateValue];
}
