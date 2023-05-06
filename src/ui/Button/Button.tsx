import cn from "classnames";
import { Button as AKButton } from "@ariakit/react";

type ButtonKind = "primary" | "outline";
type ButtonSize = "lg" | "md" | "sm";

export interface ButtonProps {
  label: string;
  kind: ButtonKind;
  size: ButtonSize;
}

const BASE_CLASSES = "rounded-lg font-bold transition duration-200 ease-in-out";

const KIND_CLASSES = {
  primary: "bg-primary text-white",
  outline: "bg-white text-primary border border-primary",
};

const SIZE_CLASSES = {
  lg: "px-8 py-4 text-lg",
  md: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
};

export default function Button({
  label,
  kind = "primary",
  size = "md",
}: ButtonProps) {
  return (
    <AKButton
      className={cn(BASE_CLASSES, KIND_CLASSES[kind], SIZE_CLASSES[size])}
    >
      {label}
    </AKButton>
  );
}
