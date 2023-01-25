import { Container } from "@mui/system";
import Carrousel from "@/components/Carrousel";
import { useQuery } from "react-query";
import { getSlideshow } from "services/slideshow";

const MainPage = () => {
  const { data: slideshowData, isSuccess } = useQuery(["getSlideshow"], () =>
    getSlideshow()
  );

  return (
    <Container sx={{ height: "100%" }} disableGutters maxWidth={false}>
      {isSuccess && <Carrousel slideshow={slideshowData} />}
    </Container>
  );
};

export default MainPage;
