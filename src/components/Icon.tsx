import { createElement } from "react";

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 24, className }: IconProps) {
  return createElement("iconify-icon", {
    icon: name,
    width: size,
    height: size,
    class: className,
    "aria-hidden": "true",
  });
}
