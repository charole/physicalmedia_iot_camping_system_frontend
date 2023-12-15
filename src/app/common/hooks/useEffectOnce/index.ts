import { DependencyList, EffectCallback, useEffect, useRef } from "react";

const useEffectOnceDev = (effect: EffectCallback, deps: DependencyList) => {
  const counter = useRef(0);
  useEffect(() => {
    if (!counter.current) {
      counter.current = 1;
      return () => {};
    }
    counter.current = 0;
    const cleanup = effect();
    return cleanup;
  }, deps);
};

export const useEffectOnce =
  process.env.NODE_ENV === "production" ? useEffect : useEffectOnceDev;
