import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
  onClick?: () => void;
}

export function Card({ children, title, onClick }: CardProps) {
  return (
    <div
      className="card rounded overflow-hidden shadow transition-shadow duration-300 ease-in-out"
      onClick={onClick}
    >
      <div className="px-6 py-4">
        {title && (
          <div className="font-bold text-xl mb-2 text-gray-900">{title}</div>
        )}
        {children}
      </div>
    </div>
  );
}
