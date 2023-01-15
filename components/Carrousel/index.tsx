import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";

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

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState<boolean>();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      // loop: true,
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
    <Box sx={{ position: "relative" }}>
      <Box component="div" ref={sliderRef} className="keen-slider">
        {[1, 2, 3, 4].map((item) => (
          <Box key={item} className="keen-slider__slide">
            <Box
              sx={{
                width: "100%",
                height: "100%",
                paddingBottom: { md: "43%" },
                position: "relative",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  overflow: "hidden",
                  width: "100%",
                  position: "absolute",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    paddingBottom: { xs: "49%", md: "45%" },
                    position: "absolute",
                    width: "100%",
                    zIndex: "0",
                  }}
                >
                  <VideoStyled
                    src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                  />
                  <GradientOverlay />
                </Box>
              </Box>
              <SliderActionWrapper>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography variant="h5" color="limegreen" fontWeight={700}>
                    New Tournament
                  </Typography>
                  <Typography variant="h2" fontWeight={700}>
                    Komo Chess
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    Fractal Cup II is here, come earn SOL for every kill
                  </Typography>
                  <Box sx={{ my: "16px" }}>
                    <Button variant="contained" size="large">
                      Play now
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

function CarrouselItemImage({ item }: { item: any }) {
  return (
    <Paper
      className="keen-slider__slide"
      sx={{
        position: "relative",
        borderRadius: "0",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage:
          "linear-gradient(0deg, #000000 35%, rgba(252,252,252,0) 100%), url(https://source.unsplash.com/random)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Typography variant="h3">komoverse {item}</Typography>
        <Button variant="contained">Play now</Button>
      </Container>
    </Paper>
  );
}

export default Carrousel;
