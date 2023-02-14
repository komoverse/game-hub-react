import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { COLOR } from '@/utils/globalVariable';
import { TournamentContentWrapper } from '../styles';
import { formatDate } from '@/helper/date';

const TournamentKeyInfo = ({
  prize,
  startTime,
  endTime,
  description,
}: {
  prize: string;
  startTime: string;
  endTime: string;
  description: string;
}) => {
  return (
    <Grid container spacing={2} mt={1}>
      <Grid item xs={12} md={3} sx={{}}>
        <TournamentContentWrapper
          sx={{
            background: COLOR.backgroundTableStriped1,
            padding: '16px',
            height: '100%',
          }}
        >
          <Typography variant="body2" color="primary" fontWeight={500}>
            Prize
          </Typography>
          <Typography variant="body2" fontWeight={300}>
            {prize}
          </Typography>
        </TournamentContentWrapper>
      </Grid>
      <Grid item xs={12} md={3} sx={{}}>
        <TournamentContentWrapper
          sx={{
            background: COLOR.backgroundTableStriped1,
            padding: '16px',
            height: '100%',
          }}
        >
          <Typography variant="body2" color="primary" fontWeight={500}>
            Tournament Dates
          </Typography>
          <Typography variant="body2" fontWeight={300}>
            {`${formatDate(startTime, 'MMMM D [at] HH:mm A')} — ${formatDate(
              endTime,
              'MMMM D [at] HH:mm A'
            )}`}
          </Typography>
        </TournamentContentWrapper>
      </Grid>
      <Grid item xs={12} md={6} sx={{}}>
        <TournamentContentWrapper
          sx={{
            background: COLOR.backgroundTableStriped1,
            padding: '16px',
            height: '100%',
          }}
        >
          <Typography variant="body2" color="primary" fontWeight={500}>
            Description
          </Typography>
          <Typography variant="body2" fontWeight={300}>
            {description}
          </Typography>
        </TournamentContentWrapper>
      </Grid>
    </Grid>
  );
};

export default TournamentKeyInfo;
