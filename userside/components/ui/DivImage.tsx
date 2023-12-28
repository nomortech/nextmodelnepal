/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image, { ImageProps } from "next/image";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface GridTileImageWithOverlayProps extends Omit<ImageProps, "src"> {
  src: string;
  active?: boolean;
  alpha?: number;
  imageClassname?: string;
  innerClassName?: string;
  children?: React.ReactNode;
}

export const DivImage: React.FC<GridTileImageWithOverlayProps> = ({
  active,
  src,
  alpha = 1,
  children,
  innerClassName,
  imageClassname,
  ...props
}) => {
  const overlayClasses = clsx("absolute inset-0 bg-black", {
    "opacity-50": active,
  });

  return (
    <div className={twMerge("group relative overflow-hidden", props.className)}>
      <Image
        alt="hero active image"
        src={src}
        className={twMerge(
          "transition z-[-1] absolute inset-0 object-cover object-center duration-300 ease-in-out group-hover:scale-105",
          imageClassname
        )}
        style={{ opacity: alpha }}
        fill
      />
      <div className={overlayClasses}></div>
      <div className={twMerge("absolute inset-0", innerClassName)}>
        {children}
      </div>
    </div>
  );
};
