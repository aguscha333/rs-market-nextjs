import type { Meta, StoryObj } from "@storybook/react";
// import { MdExpandMore } from "react-icons/md";
import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select" },
    size: { control: "select" },
    disabled: { control: "boolean" },
  },
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    children: "Button",
    asChild: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
  },
};
