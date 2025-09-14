import { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import DefaultCounterCard from "../../../examples/Cards/CounterCards/DefaultCounterCard";
import MKBox from "../../../components/MKBox";
import { useTranslation } from "react-i18next";

function Counters() {
  const { t } = useTranslation();
  const countersRef = useRef([]);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [animationCompleted, setAnimationCompleted] = useState(false); // Track if animation completed
  const targetCounts = [30, 97, 30]; // Target counts for each counter

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !animationCompleted) {
            startCounting(index, targetCounts[index]);
            entry.target.classList.add("visible");
          } else {
            // Just set the final numbers if already completed
            if (entry.isIntersecting && animationCompleted) {
              setCounts(targetCounts); // Directly show final numbers when revisiting
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, [animationCompleted]);

  const startCounting = (index, target) => {
    let currentCount = 0;
    const interval = setInterval(() => {
      // Adjust increment based on distance to target
      const increment = Math.ceil((target - currentCount) / 10);
      currentCount += increment;

      // Ensure we don't overshoot the target
      if (currentCount >= target) {
        currentCount = target;
        clearInterval(interval);
        setAnimationCompleted(true); // Mark animation as completed
      }

      // Update the count for the specific counter
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[index] = currentCount;
        return newCounts;
      });
    }, 30); // Adjust interval for a smoother animation
  };

  const fadeInStyle = {
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
  };

  const visibleStyle = {
    opacity: 1,
    transform: "translateY(0)",
  };

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid
            item
            xs={12}
            md={4}
            ref={(el) => (countersRef.current[0] = el)}
            sx={{
              ...fadeInStyle,
              "&.visible": visibleStyle,
            }}
          >
            <DefaultCounterCard
              count={30}
              suffix="+"
              title={t(`Counters.counter1.title`)}
              description={t(`Counters.counter1.description`)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            ref={(el) => (countersRef.current[1] = el)}
            sx={{
              ...fadeInStyle,
              "&.visible": visibleStyle,
            }}
          >
            <DefaultCounterCard
              count={97}
              suffix="%"
              title={t(`Counters.counter2.title`)}
              description={t(`Counters.counter2.description`)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            ref={(el) => (countersRef.current[2] = el)}
            sx={{
              ...fadeInStyle,
              "&.visible": visibleStyle,
            }}
          >
            <DefaultCounterCard
              count={30}
              suffix="%"
              title={t(`Counters.counter3.title`)}
              description={t(`Counters.counter3.description`)}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
