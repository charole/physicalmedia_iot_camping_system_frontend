import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="card rounded overflow-hidden shadow transition-shadow duration-300 ease-in-out">
      <div className="px-6 py-4">
        {title && (
          <div className="font-bold text-xl mb-2 text-gray-900">{title}</div>
        )}
        <p className="text-gray-700 text-base">{children}</p>
      </div>
    </div>
  );
}
