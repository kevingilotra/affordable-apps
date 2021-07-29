import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "Kevin Gilotra",
  facebook: "https://geek.sg/",
  instagram: "https://geek.sg/",
  twitter: "https://geek.sg/",
  github: "https://geek.sg/",
  dribble: "https://geek.sg/",
  linkedin: "https://geek.sg/",
  createdBy: {
    name: "Kevin Johar",
    link: "https://kevinjohar.com",
  },
};

story.add("Footer", () => <Footer {...data} />);
