import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  active?: boolean;
}

export const Input: React.FC<InputProps> = ({ active, ...props }) => {
  // Define any additional classes or styles based on the 'active' prop or other logic
  const inputClasses = twMerge(
    "border p-2 rounded-md",
    active ? "border-blue-500" : "border-gray-300", // Example: Change border color when active
    props.className // Ensure that any class passed via props is included
  );

  return <input className={inputClasses} {...props} />;
};
