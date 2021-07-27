import React from "react";
import { storiesOf } from "@storybook/react";
import { Header, MenuItem } from "./header";
import icon from "../../../../static/logo.png";

const getServiceDropdownItem = (
  label: string,
  description: string,
  href: string
) => ({
  label,
  description,
  href,
  icon: (
    <svg
      className="flex-shrink-0 h-6 w-6 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
    </svg>
  ),
});

const story = storiesOf("Components|Layout", module);

const data: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog/",
  },
  {
    label: "Services",
    dropdownItems: [
      getServiceDropdownItem(
        "FREE Consultation",
        "Get a free 15-minute consultation with me",
        "/services/consultation"
      ),
      getServiceDropdownItem(
        "AMCAS Activities Section",
        "$30",
        "/services/amcas-activities"
      ),
      getServiceDropdownItem(
        "AMCAS Personal Statement",
        "$30",
        "/services/amcas-personal-statement"
      ),
      getServiceDropdownItem(
        "UofT/UWO Essay Editing",
        "$25/school",
        "/services/uoft-uwo-essay"
      ),
      getServiceDropdownItem(
        "Secondary Applications",
        "$25/school",
        "/services/sec-apps"
      ),
      getServiceDropdownItem(
        "OMSAS ABS",
        "Autobiographical Sketch - $25",
        "/services/omsas-abs"
      ),
      getServiceDropdownItem(
        "Other",
        "Please email me if your service isn't listed",
        "/contact"
      ),
    ],
  },
  {
    label: "About Me",
    href: "/about/",
  },
  {
    label: "Contact",
    href: "/contact/",
  },
];

const logo = <img className="w-auto h-15" src={icon} alt="Workflow" />;

story.add("Header", () => <Header menuItems={data} logo={logo} />);
