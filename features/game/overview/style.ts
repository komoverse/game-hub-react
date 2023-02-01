import { styled } from '@mui/system';
import { COLOR } from '@/utils/globalVariable';

export const Root = styled('div')(() => ({
  backgroundColor: COLOR.backgroundRoot,
  paddingTop: '8px',
  paddingBottom: '8px',
  width: '100%',
  zIndex: 10,
}));

export const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 40px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 15px',
  },
}));
