import React from 'react';
import { Box, CardContent, Paper, styled, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { getListFeatured } from 'services/homepage';
import { ListFeaturedDto } from 'types';
import ModalVideo from 'react-modal-video'
import Slider from "react-slick";
import { breakpointsFeatured } from '@/utils/breakpoints';
import NavigationHome from '@/components/NavigationHome';
import { useTranslation } from 'react-i18next';
import NextArrow from '@/components/NextArrow';
import PrevArrow from '@/components/PrevArrow';

const Root = styled('div')(() => ({
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
  padding: '0 64px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 15px',
  },
}))

const Item = styled(Paper)(() => ({
  backgroundColor: 'rgb(17, 17, 17)',
  color: 'rgb(255, 255, 255)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  borderRadius: '4px',
  boxShadow: 'rgb(0 0 0 / 20 %) 0px 2px 1px - 1px, rgb(0 0 0 / 14 %) 0px 1px 1px 0px, rgb(0 0 0 / 12 %) 0px 1px 3px 0px',
  backgroundImage: 'linearGradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
  overflow: 'hidden',
  flexShrink: 0,
  position: 'relative',
  width: '280px',
}))

const BoxContent = styled('div')(() => ({
  position: 'relative',
  pointerEvents: 'auto',
  transition: 'transform .3s ease'
}))

const BoxVideo = styled('div')(() => ({
  width: 'auto',
  height: 158,
  cursor: 'pointer',
  position: 'relative',
}))

const PopupVidio = ({ videoId, isOpen, setOpen }: {
  videoId: string,
  isOpen: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => (
  <ModalVideo
    channel='youtube'
    isOpen={isOpen}
    videoId={videoId}
    onClose={() => setOpen(false)}
  />
)

const MemoizedPopup = React.memo(PopupVidio)

const Featured = () => {
  const { t } = useTranslation()
  const [activeVideo, setActiveVideo] = React.useState<string | null>(null);
  const [isOpen, setOpen] = React.useState(false)
  const [vidioId, setVidioId] = React.useState<string>('')

  const { data } = useQuery(['listFeatured'], () => getListFeatured(), {
    staleTime: 3000,
    refetchOnMount: false
  })

  const onMouseLeave = () => setActiveVideo(null)
  const handleOpen = () => setOpen(!isOpen)
  const onMouseEnter = ({ url, id }: { url: string, id: string }) => {
    setActiveVideo(url)
    setVidioId(id)
  }

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: data?.length,
    slidesToScroll: 4,
    initialSlide: 0,
    infinite: true,
    responsive: breakpointsFeatured,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Root>
      <Card>
        <NavigationHome title={t('home.featured')} />
        <Box sx={{ position: 'relative', height: '158px' }}>
          <Slider {...settings} className="slider_container">
            {data?.map((video: ListFeaturedDto) => {
              const idYT = video.youtube_url.split('=')[1]
              const autoPlay = activeVideo === video.youtube_url ? 1 : 0
              const src = `https://www.youtube.co/embed/${idYT}?autoplay=${autoPlay}&amp;mute=1&amp;controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp`

              return (
                <BoxContent
                  key={video.id}
                  className='box_content'
                >
                  <Item
                    onMouseEnter={() => onMouseEnter({ url: video.youtube_url, id: idYT })}
                    onMouseLeave={onMouseLeave}
                    onClick={handleOpen}
                  >
                    <BoxVideo>
                      <Box style={{ pointerEvents: 'none', width: '100%', height: '100%' }}>
                        <Box style={{ width: '100%', height: '100%' }}>
                          <iframe
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title="Bladerite - First Look at an INCREDIBLE Melee Based Battle Royale"
                            width="100%"
                            height="100%"
                            src={src}
                          />
                        </Box>
                      </Box>
                    </BoxVideo>
                    <Box sx={{ maxHeight: 0, opacity: 1 }} className="box_title">
                      <CardContent>
                        <Typography
                          sx={{ fontWeight: 500 }}
                          variant='body2'
                        >
                          Bladerite - First Look at an INCREDIBLE Melee Based Battle Royale
                        </Typography>
                      </CardContent>
                    </Box>
                  </Item>
                </BoxContent>
              )
            })}
          </Slider>
        </Box>
      </Card>

      <MemoizedPopup
        videoId={vidioId}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </Root >
  )
}

export default React.memo(Featured)