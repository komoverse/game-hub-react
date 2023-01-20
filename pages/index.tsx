import { Container } from "@mui/system";

import Layout from "@/layouts/Layout";
import Carrousel from "@/components/Carrousel";

const mainCarouselItems = [
  {
    contentType: "UPCOMING_TOURNAMENT",
    game: "Telyu Racer",
    description:
      "Christmas is coming. Race in our new snowy circuit to celebrate and earn 100 SOL prize pool.",
    target: "url",
  },
  {
    contentType: "LIVE_MINTING",
    game: "Telyu Racer",
    description:
      "Christmas is coming. Race in our new snowy circuit to celebrate and earn 100 SOL prize pool.",
    target: "url",
  },
  {
    contentType: "NEW_ANNOUNCEMENT",
    game: "Telyu Racer",
    description:
      "Christmas is coming. Race in our new snowy circuit to celebrate and earn 100 SOL prize pool.",
    target: "url",
  },
];

const Home = () => {
  return (
    <Layout>
      <Container sx={{ height: "100%" }} disableGutters maxWidth={false}>
        <Carrousel items={mainCarouselItems} />
      </Container>
    </Layout>
  );
};

export default Home;
