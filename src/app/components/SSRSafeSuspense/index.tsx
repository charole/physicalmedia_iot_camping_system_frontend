"use client";

import { ReactNode, useEffect, useState } from "react";

export function SSRSafeSuspense({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && children;
}
