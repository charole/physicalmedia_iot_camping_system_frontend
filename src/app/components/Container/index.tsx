import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="p-6">{children}</div>;
}
