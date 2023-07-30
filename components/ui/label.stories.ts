import type { Meta, StoryObj } from "@storybook/react";
// import { MdExpandMore } from "react-icons/md";
import { Label } from "./label";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Label> = {
  title: "UI/Form/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Label",
    asChild: false,
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
