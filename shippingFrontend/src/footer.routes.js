import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import MKTypography from "components/MKTypography";
import PhoneIcon from "@mui/icons-material/Phone";

// Images
import logoCT from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "name",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    // {
    //   icon: <TwitterIcon />,
    //   link: "#",
    // },
    // {
    //   icon: <GitHubIcon />,
    //   link: "#",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "#",
    // },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/amanullah_logistics",
    },
    {
      icon: <FontAwesomeIcon icon={faTiktok} />,
      link: "https://www.tiktok.com/@amanullah_logistics?_t=8rAczl5rqkB&_r=1",
    },
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} />,
      link: "https://wa.me/+971522324064",
    },
    {
      icon: <PhoneIcon />,
      link: "tel:+97142255735",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "project", href: "/Project" },
        { name: "aboutUs", href: "/about" },
      ],
    },
    {
      name: "allServices",
      items: [
        {
          name: "airFreight",
          href: "/service/AirFreightService",
        },
        {
          name: "seaFreight",
          href: "/service/SeaFreightService",
        },
        {
          name: "projectLogistics",
          href: "/service/ProjectLogistics",
        },
        {
          name: "overlandTransport",
          href: "/service/OverlandTransportationService",
        },
        {
          name: "warehousingLogistics",
          href: "/service/WarehousingLogisticsService",
        },
        {
          name: "customsBrokerage",
          href: "/service/CustomsBrokerageService",
        },
      ],
    },
    {
      name: "moreServices",
      items: [
        {
          name: "shipAgency",
          href: "/service/ShipAgencyService",
        },
        {
          name: "lashingPacking",
          href: "/service/LashingPackingService",
        },
        {
          name: "iorEor",
          href: "/service/IOR-EOR-Logistics-Service",
        },
        {
          name: "valueAdded",
          href: "/service/Value-Added-Logistics-Services",
        },
        {
          name: "itSolutions",
          href: "/service/Integrated-IT-System-Solutions",
        },
        {
          name: "dangerousGoods",
          href: "/service/Dangerous-Goods-Storage-And-Transportation",
        },
      ],
    },
    {
      name: "helpSupport",
      items: [
        { name: "contactUs", href: "/contact-us" },
        { name: "getQuote", href: "/get-a-quote" },
      ],
    },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "" },
    //     { name: "privacy policy", href: "" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} by{" "}
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Amanullah Transport & Logistics.
      </MKTypography>
      .
    </MKTypography>
  ),
};
