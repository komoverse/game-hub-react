import { Container } from '@mui/system';
import Carrousel from '@/components/Carrousel';
import { useQuery } from 'react-query';
import { getSlideshow } from 'services/slideshow';
import Featured from './FeaturedContent';
import NewListings from './NewListing';
import Events from './Event';

const MainPage = () => {
  const { data: slideshowData, isSuccess } = useQuery(['getSlideshow'], () =>
    getSlideshow()
  );

  return (
    <Container sx={{ height: '100%' }} disableGutters maxWidth={false}>
      {isSuccess && <Carrousel slideshow={slideshowData} />}
      <Featured />
      <Events />
      <NewListings />
    </Container>
  );
};

export default MainPage;
