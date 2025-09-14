import { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultCounterCard({ color, count, suffix, title, description, ...rest }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  return (
    <MKBox ref={ref} p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h1" color={color} textGradient>
        {inView && !hasAnimated ? (
          <CountUp
            end={count}
            duration={1.5}
            onEnd={() => setHasAnimated(true)} // Prevent reanimation
            {...rest}
          />
        ) : (
          count
        )}
        {suffix}
      </MKTypography>
      {title && (
        <MKTypography variant="h5" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
  suffix: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  suffix: PropTypes.string,
};

export default DefaultCounterCard;
