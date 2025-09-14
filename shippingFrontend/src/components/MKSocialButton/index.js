/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { forwardRef } from "react";
import PropTypes from "prop-types"; // For typechecking props
import MKSocialButtonRoot from "components/MKSocialButton/MKSocialButtonRoot";

// Define the MKSocialButton component
const MKSocialButton = forwardRef(({ color, size, iconOnly, circular, children, ...rest }, ref) => (
  <MKSocialButtonRoot
    {...rest}
    ref={ref}
    variant="contained"
    color="primary"
    size={size}
    ownerState={{ color, size, iconOnly, circular }}
  >
    {children}
  </MKSocialButtonRoot>
));

// Default prop values
MKSocialButton.defaultProps = {
  size: "medium",
  color: "facebook", // Default to Facebook color
  iconOnly: false,
  circular: false,
};

// Typechecking props for the MKSocialButton
MKSocialButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "pinterest",
    "youtube",
    "github",
    "vimeo",
    "slack",
    "dribbble",
    "reddit",
    "tumblr",
    "tiktok", // Added TikTok as an option
  ]),
  iconOnly: PropTypes.bool,
  circular: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MKSocialButton;
