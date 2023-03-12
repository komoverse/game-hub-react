import { getNewsDetail } from '@/services/resources';
import React from 'react';
import { QueryKey } from '@/types/general';
import { useQuery } from 'react-query';
import Layout from '@/features/resources/Layout';
import { Box, CircularProgress, Grid, Stack } from '@mui/material';
import secureLocalStorage from '@/utils/secureLocalStorage';
import { useRouter } from 'next/router';
import DetailResources from '../Components/DetailResources';
import Image from 'next/image';
import { KomoverseTag } from '@/utils/globalVariable';
import useResponsive from '@/hooks/useResponsive';

const Detail = ({ url }: { url: string }) => {
  const router = useRouter();
  const params = secureLocalStorage.getItem('slug');
  const smDown = useResponsive('down', 'sm');

  const { data, isLoading } = useQuery({
    queryKey: QueryKey.NEWS_DETAILS,
    queryFn: () => getNewsDetail(router.locale as string, params),
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !!params,
  });

  React.useEffect(() => {
    getNewsDetail(router.locale as string, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.locale]);

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress size="2rem" color="success" />
      </Box>
    );
  }

  return (
    <Layout>
      <Grid container justifyContent="center" mt={3}>
        <Grid item xl={9} lg={9} md={10} sm={12} xs={12}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {!smDown && (
              <Image
                src="/backIcon.svg"
                height={25}
                width={25}
                alt={KomoverseTag}
                style={{ cursor: 'pointer' }}
                onClick={() => router.back()}
              />
            )}
            <DetailResources data={data} url={url} />
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Detail;
