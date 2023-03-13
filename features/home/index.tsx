import { Container } from '@mui/system';
import Carrousel from '@/components/Carrousel';
import { useQuery } from 'react-query';
import { getSlideshow } from 'services/slideshow';
import Featured from './FeaturedContent';
import NewListings from './NewListing';
import Events from './Event';
import { QueryKey } from '@/types/general';
import { useRouter } from 'next/router';

const MainPage = () => {
  const { pathname } = useRouter();
  const { data: slideshowData, isSuccess } = useQuery({
    queryKey: QueryKey.SLIDESHOW,
    queryFn: () => getSlideshow(),
    staleTime: 3000,
    refetchOnMount: false,
    enabled: pathname === '/',
  });

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
