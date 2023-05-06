import React from "react";
import type { Preview } from "@storybook/react";
import { DM_Sans } from "next/font/google";
import "../src/app/globals.css";

import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

const dmSans = DM_Sans({ weight: "500", subsets: ["latin"] });

const preview: Preview = {
  decorators: [
    (StoryFn) => (
      <div className={dmSans.className}>
        <StoryFn />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
