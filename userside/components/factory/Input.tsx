import { twMerge } from "tailwind-merge";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: "primary" | "secondary";
}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      className={twMerge(
        " border rounded-md w-full active:border-primary min-w-[20vw] p-3 outline-white text-white bg-transparent focus:outline-none focus:shadow-outline placeholder:text-disabled",
        props.className
      )}
      {...props}
    />
  );
};
