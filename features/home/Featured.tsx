import React from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import dynamic from 'next/dynamic';
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'react-modal-video/css/modal-video.min.css';
import { useQuery } from 'react-query';
import { getListFeatured } from 'services/featured';
import { ListFeaturedDto } from 'types';
import ModalVideo from 'react-modal-video'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useResponsive from 'hooks/useResponsive';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Root = styled('div')(({ theme }) => ({
  backgroundColor: '#000000dd',
  paddingTop: '8px',
  paddingBottom: '8px',
  position: 'relative',
  width: '100%',
  zIndex: 10,
}));

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 64
}))

const BoxVideo = styled('div')(({ theme }) => ({
  transition: 'transform .2s',
  '&:hover': {
    transform: 'scale(1.5)',
  },
  zIndex: 100,
}))

const PopupVidio = ({ videoId, isOpen, setOpen }: any) => {
  return (
    <ModalVideo
      channel='youtube'
      isOpen={isOpen}
      videoId={videoId}
      onClose={() => setOpen(false)}
    />
  )
}

const Featured = () => {
  const [activeVideo, setActiveVideo] = React.useState<string | null>(null);
  const [isOpen, setOpen] = React.useState(false)
  const [vidioId, setVidioId] = React.useState<string>('')
  const isSmall = useResponsive('sm');

  const { data, isLoading, isError, isFetching } = useQuery(['listFeatured'], () => getListFeatured(), {
    staleTime: 3000,
    refetchInterval: 3000
  })

  return (
    <Root>
      <Card>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <Typography sx={{ marginLeft: '8px' }} variant='h4'>Featured</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ color: '#989898 ', fontWeight: 500 }}>View All</Typography>
            <ArrowForwardIcon sx={{ color: '#989898', fontSize: 16, marginLeft: 2 }} />
          </Box>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Swiper
            slidesPerView={4.2}
            spaceBetween={10}
            preloadImages={false}
            navigation={true}
            modules={[Navigation]}
            lazy={true}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
              },
              360: {
                slidesPerView: 1.2,
              },
              411: {
                slidesPerView: 1.2,
              },
              420: {
                slidesPerView: 1.2,
              },
              540: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2.5,
              },
              768: {
                slidesPerView: 2.8,
              },
              884: {
                slidesPerView: 2.9,
              },
              1024: {
                slidesPerView: 1.9,
              },
              1087: {
                slidesPerView: 4.2,
              },
            }}
            className="swiper_container"
          >
            <Box sx={{ width: 280, height: 158, position: 'relative', cursor: 'pointer' }}>
              {data?.map((video: ListFeaturedDto) => {
                const idYT = video.youtube_url.split('=')[1]
                
                return (
                  <SwiperSlide key={video.id}>
                    <Grid container>
                      <Grid item>
                        <div
                          onMouseEnter={() => {
                            setActiveVideo(video.youtube_url)
                            setVidioId(idYT)
                            setOpen(true)
                          }}
                          onMouseLeave={() => setActiveVideo(null)}
                        >
                          <ReactPlayer
                            id="featureyt"
                            muted={true}
                            playing={activeVideo === video.youtube_url}
                            width="100%"
                            height="100%"
                            style={{ backgroundSize: 'cover' }}
                            url={video.youtube_url}
                            controls={true}
                            onPlay={() => !isSmall && setOpen(true)}
                            config={{
                              youtube: {
                                playerVars: {
                                  showinfo: 1,
                                  controls: 1,
                                  modestbranding: 1,
                                  rel: 0
                                }
                              },
                              file: {
                                attributes: { controlsList: 'nodownload' }
                              }
                            }}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </SwiperSlide>
                )
              })}
            </Box>
          </Swiper>
        </Box>
      </Card>

      <PopupVidio
        videoId={vidioId}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </Root>
  )
}

export default Featured
