import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Box, Paper } from "@mui/material";

const Carrousel = ({ contents }) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <Box
      component="div"
      ref={sliderRef}
      className="keen-slider"
      sx={{ height: { xs: "50%", md: "100%" } }}
    >
      <Paper
        className="keen-slider__slide"
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(https://source.unsplash.com/random)",
          height: { xs: "50%", md: "100%" },
        }}
      />
    </Box>
  );
};

export default Carrousel;
