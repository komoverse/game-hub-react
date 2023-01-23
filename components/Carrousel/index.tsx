import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { contentType } from "./constant";
import Featured from "features/home/Featured";

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

const ImageStyled = styled("img")({
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
    "linear-gradient(0deg, rgba(0,0,0,1) 8%, rgba(255,255,255,0) 100%)",
});

const SliderActionWrapper = styled("div")(({ theme }) => ({
  alignItems: "start",
  position: "absolute",
  bottom: "64px",
  left: "124px",
  [theme.breakpoints.down("md")]: {
    bottom: "auto",
    left: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
  },
}));

type slideshowType = {
  id: number;
  text_1: string;
  text_2: string;
  text_3: string;
  cta_url: string;
  cta_text: string;
  slide_content_url: string;
  created_at: string;
};

interface Props {
  slideshow: slideshowType[];
}

const isContentImg = (url: string) => {
  const regexImg = /[\/.](gif|jpg|jpeg|tiff|png|webp)$/i;

  const result = url.match(regexImg);
  const isImg = result !== null;

  return isImg;
};

const Carrousel = ({ slideshow }: Props) => {
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
    return (
      <NavigatorStyled>
        {slideshow.map((_, idx) => (
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
    <Box sx={{ height: { xs: "40%", md: "50%", lg: "95%" } }}>
      <Box ref={sliderRef} className="keen-slider" sx={{ height: "100%" }}>
        {slideshow.map((slide, idx) => (
          <Box key={idx} className="keen-slider__slide">
            <Box sx={{ height: "100%" }}>
              {isContentImg(slide.slide_content_url) ? (
                <ImageStyled src={slide.slide_content_url} alt="game content" />
              ) : (
                <VideoStyled
                  src={slide.slide_content_url}
                  autoPlay
                  loop
                  playsInline
                  muted
                />
              )}
              <GradientOverlay />

              <SliderActionWrapper>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography variant="h5" color="limegreen" fontWeight={700}>
                    {slide.text_1}
                  </Typography>
                  <Typography variant="h2" fontWeight={700}>
                    {slide.text_2}
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {slide.text_3}
                  </Typography>
                  <Box sx={{ my: "16px" }}>
                    <Button
                      variant="contained"
                      href={slide.cta_url}
                      size="large"
                      sx={{
                        color: "#fff",
                        background:
                          "radial-gradient(293.74% 1431.43% at -18.64% -62.88%, #99EC13 0%, #088F2E 63.54%, #054D19 100%)",
                        borderRadius: 2,
                      }}
                    >
                      {slide.cta_text}
                    </Button>
                  </Box>
                </Box>
              </SliderActionWrapper>
            </Box>
          </Box>
        ))}
      </Box>
      {loaded && navigator()}
      <Featured />
    </Box>
  );
};

export default Carrousel;
