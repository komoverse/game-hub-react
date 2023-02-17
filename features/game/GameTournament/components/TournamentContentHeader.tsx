import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { formatDate, isAfter, isBefore, isBetween } from '@/helper/date';
import { COLOR, GRADIENT } from '@/utils/globalVariable';

const Countdown = ({ startTime }: { startTime: string }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(startTime), 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const dayOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][new Date(startTime).getDay()];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '8px',
        }}
      >
        <Typography variant="h3" fontWeight={500}>
          Starting in
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <Typography
              variant="h3"
              fontWeight={500}
              sx={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {days < 10 ? '0' + days : days}
            </Typography>
            <Typography
              variant="body2"
              fontSize={24}
              fontWeight={500}
              className="text"
            >
              days
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <Typography
              variant="h3"
              fontWeight={500}
              sx={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {hours < 10 ? '0' + hours : hours}
            </Typography>
            <Typography
              variant="body2"
              fontSize={24}
              fontWeight={500}
              className="text"
            >
              hours
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <Typography
              variant="h3"
              fontWeight={500}
              sx={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {minutes < 10 ? '0' + minutes : minutes}
            </Typography>
            <Typography
              variant="body2"
              fontSize={24}
              fontWeight={500}
              className="text"
            >
              min
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <Typography
              variant="h3"
              fontWeight={500}
              sx={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {seconds < 10 ? '0' + seconds : seconds}
            </Typography>
            <Typography
              variant="body2"
              fontSize={24}
              fontWeight={500}
              className="text"
            >
              sec
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography variant="subtitle2" fontWeight={500} color={COLOR.baseGray}>
        {`${dayOfWeek}, ${formatDate(startTime, 'MMMM, DD, YYYY HH:mm A')}`}
      </Typography>
    </Box>
  );
};

const LiveBadge = () => {
  return (
    <Box sx={{ display: 'flex', height: '24px', width: '50px' }}>
      <Box
        component="span"
        sx={{
          position: 'absolute',
          borderRadius: '20px',
          background: GRADIENT.primary,
          width: '50px',
          height: '24px',

          animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',

          '@keyframes ping': {
            '75%, 100%': {
              transform: 'scale(1.5)',
              opacity: '0',
            },
          },
        }}
      ></Box>
      <Box
        component="span"
        sx={{
          position: 'relative',
          color: COLOR.baseWhite,
          borderRadius: '20px',
          background: GRADIENT.primary,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="overline" fontSize={12} fontWeight={500}>
          Live
        </Typography>
      </Box>
    </Box>
  );
};

const TournamentContentHeader = ({
  title,
  startTime,
  endTime,
}: {
  title: string;
  startTime: string;
  endTime: string;
}) => {
  const currDate = new Date().toISOString();
  const isShowCountdown = isBefore(currDate, startTime);
  const isLive = isBetween(currDate, startTime, endTime);
  const isEnded = isAfter(currDate, endTime);

  return (
    <>
      <Typography variant="h3">{title}</Typography>
      {isShowCountdown && <Countdown startTime={startTime} />}
      {isLive && <LiveBadge />}
      {isEnded && (
        <Typography variant="body1" fontWeight={500}>
          Ended
        </Typography>
      )}
    </>
  );
};

export default TournamentContentHeader;
