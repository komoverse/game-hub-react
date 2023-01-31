import React from 'react';
import { Box, CardContent, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'
import CardImage from '@/components/CardImage';
import { breakpointsEvents } from '@/utils/breakpoints';
import { COLOR } from '@/utils/globalVariable';
import { useTranslation } from 'react-i18next';
import { Button, Card, Root } from './style';
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { shortenTitleGame } from '@/utils/shorten';
import { getDiff, isBefore, isBetween } from '@/helper/date';
import { EventTypes, MintScheduleDto, ScheduleEvents, TournamentScheduleDto } from '@/types/home';
import { ReduxState } from '@/types/redux';

const Events = () => {
  const { t } = useTranslation()
  const router = useRouter();
  const data: any = useSelector((state: ReduxState) => state.sidebar?.value)
  const currDate = new Date().toISOString();

  const transformMintSchedule = (item: MintScheduleDto) => ({
    ...item,
    type: EventTypes.MINTS,
    image_url: item.logo_image_url,
    mint_start_date: item.mint_start_date,
    mint_end_date: item.mint_end_date,
  });

  const transformTournament = (item: TournamentScheduleDto) => ({
    ...item,
    type: EventTypes.TOURNAMENTS,
    image_url: item.logo_image_url,
    start_time: item.start_time,
    end_time: item.end_time,
  });

  const transformedData: (MintScheduleDto)[] = [
    ...(Array.isArray(data?.mint_schedule) ? data.mint_schedule.map(transformMintSchedule) : []),
    ...(Array.isArray(data?.tournament) ? data.tournament.map(transformTournament) : []),
  ];

  const filteredDataByTime = transformedData.sort((a, b) => {
    const dateA = a.type === EventTypes.MINTS ? a.mint_start_date : a.start_time;
    const dateB = b.type === EventTypes.MINTS ? b.mint_start_date : b.start_time;
    return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
  })

  const handleRedirect = (data: ScheduleEvents, event?: React.MouseEventHandler<HTMLDivElement>) => {
    const { type, game_id } = data
    if (type === EventTypes.MINTS) {
      router.push(`/${game_id}/mint`)
    }
    if (type === EventTypes.TOURNAMENTS) {
      router.push(`/${game_id}/tournament`)
    }
  }

  return (
    <Root>
      <Card>
        <Typography sx={{ marginLeft: '8px', marginBottom: '16px' }} variant='h4'>{t('home.event')}</Typography>
        <Box sx={{ position: 'relative' }}>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={10}
            preloadImages={false}
            lazy={true}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={breakpointsEvents}
          >
            {filteredDataByTime?.map((event, idx: number) => {
              const startTime = event.mint_start_date || event.start_time
              const endTime = event.mint_end_date || event.end_time
              const eventName = event.phase_name || event.tournament_name

              const time = isBefore(currDate, startTime)
                ? `${Math.abs(getDiff(currDate, startTime))} ${t('time.days')}`
                : isBetween(currDate, startTime, endTime)
                  ? t('button.live')
                  : "-"

              return (
                <SwiperSlide key={idx}>
                  <Grid container>
                    <Grid item>
                      <CardImage
                        image_url={event.logo_image_url}
                        onClick={() => handleRedirect(event)}
                      >
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: 4,
                            textAlign: "center",
                          }}
                        >
                          <Typography variant='h6' sx={{ fontWeight: 700 }}>
                            {shortenTitleGame(event.game_name)}
                          </Typography>
                          <Typography variant='subtitle2' sx={{ fontWeight: 400, color: COLOR.baseSemiGray }}>
                            {shortenTitleGame(eventName)}
                          </Typography>
                        </CardContent>
                        <Button>
                          <Typography variant='subtitle2' sx={{ fontWeight: 700, marginLeft: 1, color: COLOR.baseGreen }}>
                            {time}
                          </Typography>
                        </Button>
                      </CardImage>
                    </Grid>
                  </Grid>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Box>
      </Card>
    </Root>
  )
}

export default React.memo(Events)
