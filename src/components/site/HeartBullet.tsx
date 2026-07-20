import heartAsset from "@/assets/heart.svg";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  alt?: string;
};

export function HeartBullet({ className, alt = "" }: Props) {
  return (
    <img
      src={heartAsset}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      className={cn("shrink-0 select-none", className)}
      draggable={false}
    />
  );
}
