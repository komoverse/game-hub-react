import { styled } from '@mui/system';
import { COLOR, FONTSIZE, RADIUS } from '@/utils/globalVariable';
import { Box, Button, CardContent } from '@mui/material';
import MuiGrid from '@mui/material/Grid';

export const Grid = styled(MuiGrid)(({ theme }: any) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export const OveralRatting = styled(CardContent)(({ theme }) => ({
  borderRadius: RADIUS.large,
  border: `2.5px solid ${COLOR.baseCardBlack}`,
  background: COLOR.backgroundCardBlack,
  textAlign: 'center',
  minHeight: '440px',
  widht: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    minHeight: '20rem',
  },
}));

export const ReviewCard = styled(CardContent)(() => ({
  backgroundColor: COLOR.backgroundCardBlack,
  borderRadius: RADIUS.large,
}));

export const BoxReview = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const ReviewRattingButton = styled(Button)(() => ({
  backgroundColor: COLOR.baseBackgroundButtonGray,
  borderRadius: RADIUS.small,
  padding: '1px 5px',
}));

export const ReviewButtonRattingStyle = {
  fontSize: FONTSIZE.small,
  color: COLOR.baseTextGray,
};

export const ReviewSubRattingStyle = {
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: 11,
};
