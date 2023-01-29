import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  NavigatorItemStyled,
  NavigatorStyled,
  ImageStyled,
  VideoStyled,
  GradientOverlay,
  SliderActionWrapper,
} from "./styles";
import { regexUrlValidation } from "@/utils/regex";

type slideshowType = {
  id: number;
  text_1: string;
  text_2: string;
  text_3: string;
  cta_url: string;
  cta_text: string;
  slide_content_url: string;
  created_at: string;
  content_type: string;
};

interface Props {
  slideshow: slideshowType[];
}

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
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            sx={{
              backgroundColor: currentSlide === idx ? "white" : "transparent",
            }}
          />
        ))}
      </NavigatorStyled>
    );
  };

  const router = useRouter();

  const onClickAction = (url: string) => {
    const isExternal = url.match(regexUrlValidation);
    const locale = router.locale;

    if (isExternal !== null) {
      window.open(url, "_blank");
      return;
    }

    router.push(url, url, { locale });
  };

  return (
    <Box sx={{ height: { xs: "40%", md: "50%", lg: "95%" } }}>
      <Box ref={sliderRef} className="keen-slider" sx={{ height: "100%" }}>
        {slideshow.map((slide, idx) => (
          <Box key={idx} className="keen-slider__slide">
            <Box sx={{ height: "100%" }}>
              {slide.content_type === "image" ? (
                <ImageStyled src={slide.slide_content_url} alt={slide.text_1} />
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
                <Box
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    px: "8px",
                  }}
                >
                  <Typography variant="h5" color="limegreen" fontWeight={700}>
                    {slide.text_1}
                  </Typography>
                  <Typography
                    variant="h2"
                    fontWeight={700}
                    sx={{
                      maxWidth: "700px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {slide.text_2}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    sx={{
                      maxWidth: "700px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {slide.text_3}
                  </Typography>
                  <Box sx={{ my: "16px" }}>
                    <Button
                      variant="contained"
                      onClick={() => onClickAction(slide.cta_url)}
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
    </Box>
  );
};

export default Carrousel;
