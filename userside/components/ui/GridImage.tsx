import clsx from "clsx";
import Image from "next/image";

export function GridTileImage({
  active,
  ...props
}: {
  active?: boolean;
} & React.ComponentProps<typeof Image>) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className={
        "transition object-cover duration-300 ease-in-out group-hover:scale-105 aspect-square  object-center"
      }
      {...props}
    />
  );
}
