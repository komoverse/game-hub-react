import { Paper, styled } from '@mui/material';

export const Root = styled('div')(() => ({
  backgroundColor: '#000000dd',
  paddingTop: '48px',
  paddingBottom: '8px',
  position: 'relative',
  width: '100%',
  zIndex: 10,
}));

export const Item = styled(Paper)(() => ({
  backgroundColor: 'rgb(17, 17, 17)',
  color: 'rgb(255, 255, 255)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  borderRadius: '4px',
  boxShadow:
    'rgb(0 0 0 / 20 %) 0px 2px 1px - 1px, rgb(0 0 0 / 14 %) 0px 1px 1px 0px, rgb(0 0 0 / 12 %) 0px 1px 3px 0px',
  backgroundImage:
    'linearGradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
  overflow: 'hidden',
  flexShrink: 0,
  position: 'relative',
  width: '280px',
}));

export const BoxContent = styled('div')(() => ({
  position: 'relative',
  pointerEvents: 'auto',
  transition: 'transform .3s ease',
}));

export const BoxVideo = styled('div')(() => ({
  width: 'auto',
  height: 158,
  cursor: 'pointer',
  position: 'relative',
}));
