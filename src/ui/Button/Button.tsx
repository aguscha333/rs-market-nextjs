import cn from "classnames";
import {
  Button as AKButton,
  type ButtonProps as AKButtonProps,
} from "@ariakit/react";

type ButtonKind = "primary" | "outline";
type ButtonSize = "fill" | "md" | "sm";

export interface ButtonProps extends AKButtonProps {
  label: string;
  kind: ButtonKind;
  size: ButtonSize;
}

const BASE_CLASSES = "rounded-lg font-bold text-base box-border";

const KIND_MODIFIER_CLASSES = {
  primary: "bg-primary text-white",
  outline: "bg-white text-primary border border-primary",
};

const SIZE_MODIFIER_CLASSES = {
  fill: "w-full",
  md: "px-8",
  sm: "px-8 h-[27px] text-sm",
};

// STATE DECORATORS
const HOVER_CLASSES =
  "hover:bg-hover hover:text-white hover:border-none h-[44px]";

const FOCUS_CLASSES =
  "focus:outline-dashed focus:outline-focus focus:outline-2 focus:outline-offset-2";

const ACTIVE_CLASSES =
  "active:bg-active active:text-white active:ring-active-outline active:ring-4 active:outline-none";

const DISABLED_CLASSES = "disabled:bg-light-grey disabled:text-dark-grey";

const OUTLINE_DISABLED_MODIFIER_CLASSES = "disabled:border-grey";

export default function Button({
  label,
  kind = "primary",
  size = "md",
  className,
  ...restProps
}: ButtonProps) {
  return (
    <AKButton
      className={cn(
        BASE_CLASSES,
        // MODIFIERS
        KIND_MODIFIER_CLASSES[kind],
        SIZE_MODIFIER_CLASSES[size],
        { [OUTLINE_DISABLED_MODIFIER_CLASSES]: kind === "outline" },
        // STATE DECORATORS
        HOVER_CLASSES,
        FOCUS_CLASSES,
        ACTIVE_CLASSES,
        DISABLED_CLASSES,
        // CUSTOM CLASSNAMES
        className
      )}
      {...restProps}
    >
      {label}
    </AKButton>
  );
}
