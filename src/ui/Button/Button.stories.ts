import type { Meta, StoryObj } from "@storybook/react";
import { MdExpandMore } from "react-icons/md";

import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    kind: { control: "select", defaultValue: "primary" },
    size: { control: "select", defaultValue: "md" },
    disabled: { control: "select", options: [true, false] },
    icon: { control: "select", options: [undefined, MdExpandMore] },
  },
  parameters: {
    docs: {
      controls: { exclude: ["as", "ref", "wrapElement"] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    kind: "primary",
    label: "Button",
  },
};

export const Outline: Story = {
  args: {
    kind: "outline",
    label: "Button",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    kind: "primary",
    label: "Button",
    disabled: true,
  },
};

export const OutlineDisabled: Story = {
  args: {
    kind: "outline",
    label: "Button",
    disabled: true,
  },
};

export const Fill: Story = {
  args: {
    size: "fill",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Button",
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    kind: "primary",
    label: "Button",
    icon: MdExpandMore,
  },
};
