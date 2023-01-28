import { COLOR } from '@/utils/globalVariable';
import { styled } from '@mui/system';

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
  padding: '0 64px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 15px',
  },
}));

export const Button = styled('div')(() => ({
  border: '1.3px solid #181818',
  background: '#181818',
  marginBottom: '5px',
  padding: '6px 8px',
  fontWeight: 700,
  fontSize: '0.875rem',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
