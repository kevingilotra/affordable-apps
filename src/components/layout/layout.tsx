import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header, MenuItem } from "./header";
import { Footer } from "./footer";
import icon from "../../../static/logo.png";

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

const logo = <img className="w-auto h-15" src={icon} alt="Workflow" />;
const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Me",
    href: "/about/",
  },
  {
    label: "Services",
    dropdownItems: [
      getServiceDropdownItem(
        "15-Min FREE Consultation",
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
    label: "Blog",
    href: "/blog/",
  },
  {
    label: "Book a Call",
    href: "/contact/",
    classes: "bg-blue-400 px-3 py-1 rounded-full",
  },
];

const footer: Footer = {
  copyrightOwner: "Kevin Gilotra",
  facebook: "https://www.facebook.com/kevin.gilotra.39/",
  instagram: "https://www.instagram.com/kevin.gilotra/",
  // twitter: "https://geek.sg/",
  // github: "https://geek.sg/",
  // dribble: "https://geek.sg/",
  linkedin: "https://www.linkedin.com/in/kevingilotra/",
  createdBy: {
    name: "Kevin Johar",
    link: "https://kevinjohar.com",
  },
};

export const Layout: FunctionComponent = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ffffff"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <Header menuItems={menuItems} logo={logo} />
      <div className="min-h-screen">{children}</div>
      <Footer {...footer} />
    </>
  );
};

export default Layout;
