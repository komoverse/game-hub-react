import { COLOR, RADIUS } from '@/utils/globalVariable';
import {
  CardContent,
  LinearProgress,
  linearProgressClasses,
  styled,
} from '@mui/material';

export const OveralRatting = styled(CardContent)(({ theme }) => ({
  borderRadius: RADIUS.large,
  border: `2.5px solid ${COLOR.baseCardBlack}`,
  background: COLOR.backgroundCardBlack,
  textAlign: 'center',
  height: 'auto',
  widht: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    minHeight: '37rem',
  },
}));

export const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, value }: any) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        value === 20
          ? '#EE5B2D'
          : value === 40
          ? '#EE7E2D'
          : value === 60
          ? '#EEC32D'
          : value === 80
          ? '#B0EE2D'
          : value === 100
          ? '#0FD236'
          : '',
    },
  })
);
