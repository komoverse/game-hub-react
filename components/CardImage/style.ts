import { COLOR } from '@/utils/globalVariable';
import { styled } from '@mui/material';

export const BoxCard = styled('div')(() => ({
  height: 340.5,
  position: 'absolute',
  pointerEvents: 'auto',
  transform: 'none',
  zIndex: 'auto',
  cursor: 'pointer',
  width: "100%"
}));

export const CardActionArea = styled('div')(() => ({
  border: `1.3px solid ${COLOR.borderSemiBlack}`,
  padding: '12px',
  background: COLOR.backgroundCardSemiBlack,
  borderRadius: '8px',
}));

export const BoxContent = styled('div')(() => ({
  borderRadius: 5,
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
}));

export const BoxImage = styled('div')(() => ({
  boxSizing: 'border-box',
  display: 'block',
  width: 'initial',
  height: 'initial',
  background: 'none',
  opacity: 1,
  border: 0,
  margin: 0,
  padding: '100% 0px 0px',
}));
