import { GRADIENT } from '@/utils/globalVariable';
import { Box, CardContent, styled } from '@mui/material';

export const LayoutResource = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  mt: 10,
}));

export const Footer = styled(CardContent)(() => ({
  background: GRADIENT.tertiary,
  textAlign: 'center',
}));
