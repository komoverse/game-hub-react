import React from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { getListFeatured } from 'services/homepage';
import { ListFeaturedDto } from '@/types/home';
import ModalVideo from 'react-modal-video'
import Slider from "react-slick";
import { breakpointsFeatured } from '@/utils/breakpoints';
import NavigationHome from '@/components/NavigationHome';
import { useTranslation } from 'react-i18next';
import NextArrow from '@/components/NextArrow';
import PrevArrow from '@/components/PrevArrow';
import { BoxContent, BoxVideo, Card, Item, Root } from './style';

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
    draggable: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Root>
      <Card>
        <NavigationHome title={t('home.featured')} />
        <Box sx={{ position: 'relative', height: '158px' }}>
          <Slider {...settings} className="slider_container" variableWidth={true}>
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
                          {video.video_title}
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