import React from "react";

export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-lg font-medium transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
