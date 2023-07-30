import type { Meta, StoryObj } from "@storybook/react";
// import { MdExpandMore } from "react-icons/md";
import { Input } from "./input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    type: { control: "select" },
  },
  args: {
    placeholder: "Placeholder",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
