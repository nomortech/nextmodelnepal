import { twMerge } from "tailwind-merge";
import Spinner from "@/components/ui/Spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "blue";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  children,
  disabled,
  isLoading,
  ...props
}) => {
  if (variant == "secondary") {
    return (
      <button
        type="button"
        className={twMerge(
          "bg-tertiary flex items-center justify-center text-white text-[16px] py-2 px-4",
          className
        )}
        {...props}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={twMerge(
        "bg-black flex items-center justify-center text-white text-[16px] py-2 px-4",
        className
      )}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
