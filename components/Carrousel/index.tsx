import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { contentType } from "./constant";

const NavigatorStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "8px",
  gap: "8px",
  backgroundColor: "#000000",
}));

const NavigatorItemStyled = styled("button")({
  backgroundColor: "transparent",
  border: "1px solid rgb(158, 158, 158)",
  borderRadius: "50%",
  height: "12px",
  padding: "6px",
  width: "12px",
  cursor: "pointer",
});

const VideoStyled = styled("video")({
  objectFit: "cover",
  height: "100%",
  width: "100%",
  position: "absolute",
});

const GradientOverlay = styled("div")({
  height: "100%",
  width: "100%",
  position: "absolute",
  top: "0",
  background:
    "linear-gradient(0deg, rgba(0,0,0,1) 30%, rgba(255,255,255,0) 100%)",
});

const SliderActionWrapper = styled("div")(({ theme }) => ({
  alignItems: "start",
  position: "absolute",
  bottom: "64px",
  left: "124px",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    bottom: "auto",
    left: "auto",
    position: "relative",
  },
}));

type itemsType = {
  contentType: string;
  game: string;
  description: string;
  target: string;
};

interface Props {
  items: itemsType[];
}

const Carrousel = ({ items }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState<boolean>();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const navigator = () => {
    const len = new Array(
      instanceRef?.current?.track.details.slides.length
    ).keys();
    return (
      <NavigatorStyled>
        {[...len].map((idx) => (
          <NavigatorItemStyled
            key={idx}
            onClick={() => {
              console.log(idx, currentSlide);
              instanceRef.current?.moveToIdx(idx);
            }}
            sx={{
              backgroundColor: currentSlide === idx ? "white" : "transparent",
            }}
          />
        ))}
      </NavigatorStyled>
    );
  };

  return (
    <Box sx={{ height: { xs: "30%", md: "50%", lg: "95%" } }}>
      <Box ref={sliderRef} className="keen-slider" sx={{ height: "100%" }}>
        {items.map((item, idx) => (
          <Box key={idx} className="keen-slider__slide">
            <Box>
              <VideoStyled
                src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4"
                autoPlay
                loop
                playsInline
                muted
              />
              <GradientOverlay />

              <SliderActionWrapper>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography variant="h5" color="limegreen" fontWeight={700}>
                    {contentType[item.contentType].title}
                  </Typography>
                  <Typography variant="h2" fontWeight={700}>
                    {item.game}
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {item.description}
                  </Typography>
                  <Box sx={{ my: "16px" }}>
                    <Button variant="contained" size="large">
                      {contentType[item.contentType].action}
                    </Button>
                  </Box>
                </Box>
              </SliderActionWrapper>
            </Box>
          </Box>
        ))}
      </Box>
      {loaded && navigator()}
    </Box>
  );
};

export default Carrousel;
