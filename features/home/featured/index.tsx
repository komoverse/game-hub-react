import React from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { getListFeatured } from 'services/homepage';
import { ListFeaturedDto } from '@/types/home';
import ModalVideo from 'react-modal-video'
import { SectionTitle } from '@/components/index';
import { useTranslation } from 'react-i18next';
import { BoxContent, BoxVideo, Item, Root } from './style';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import { SectionWrapperCard } from '@/utils/globalVariable';
import useResponsive from '@/hooks/useResponsive';

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
  const smDown = useResponsive('down', 'sm');
  const mdUp = useResponsive('up', 'md');

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

  return (
    <Root>
      <SectionWrapperCard>
        <SectionTitle title={t('home.featured')} />
        <Box sx={{ position: 'relative', height: '158px' }}>
          <Swiper
            slidesPerView="auto"
            loopedSlides={4}
            spaceBetween={10}
            preloadImages={false}
            lazy={true}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            navigation={true}
            allowTouchMove={false}
            modules={[Navigation]}
            className={smDown || mdUp ? 'featured-swipperSmDown' : "featured-swipper"}
          >
            {data?.map((video: ListFeaturedDto) => {
              const idYT = video.youtube_url.split('=')[1]
              const autoPlay = activeVideo === video.youtube_url ? 1 : 0
              const src = `https://www.youtube.co/embed/${idYT}?autoplay=${autoPlay}&amp;mute=1&amp;controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp`

              return (
                <SwiperSlide key={video.id}>
                  <BoxContent className='box_content'>
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
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Box>
      </SectionWrapperCard>

      <MemoizedPopup
        videoId={vidioId}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </Root >
  )
}

export default React.memo(Featured)
