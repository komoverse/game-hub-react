import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Carrousel from "@/components/Carrousel";
import { Box, Container, Paper } from "@mui/material";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};
export default function MainFeaturedPost() {
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
    // <Paper
    //   sx={{
    //     position: "relative",
    //     backgroundColor: "grey.800",
    //     color: "#fff",
    //     mb: 4,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //     backgroundImage: `url(${mainFeaturedPost.image})`,
    //     height: "100%",
    //   }}
    // >
    //   {/* Increase the priority of the hero background image */}
    //   {
    //     <img
    //       style={{ display: "none" }}
    //       src={mainFeaturedPost.image}
    //       alt={mainFeaturedPost.imageText}
    //     />
    //   }
    //   <Box
    //     sx={{
    //       position: "absolute",
    //       top: 0,
    //       bottom: 0,
    //       right: 0,
    //       left: 0,
    //       backgroundColor: "rgba(0,0,0,.3)",
    //     }}
    //   />
    //   <Grid container>
    //     <Grid item md={6}>
    //       <Box
    //         sx={{
    //           position: "relative",
    //           p: { xs: 3, md: 6 },
    //           pr: { md: 0 },
    //         }}
    //       >
    //         <Typography
    //           component="h1"
    //           variant="h3"
    //           color="inherit"
    //           gutterBottom
    //         >
    //           {mainFeaturedPost.title}
    //         </Typography>
    //         <Typography variant="h5" color="inherit" paragraph>
    //           {mainFeaturedPost.description}
    //         </Typography>
    //         <Link variant="subtitle1" href="#">
    //           {mainFeaturedPost.linkText}
    //         </Link>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Paper>
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100%",
      }}
    >
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
        ></Paper>
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
        ></Paper>
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
        ></Paper>
      </Box>
    </Container>
  );
}
