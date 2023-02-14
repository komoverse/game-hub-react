import { styled } from '@mui/material/styles';

export const ImageStyled = styled('img')({
  objectFit: 'cover',
});

export const VideoStyled = styled('video')({
  objectFit: 'cover',
  height: '100%',
  width: '100%',
  position: 'absolute',
});

export const GradientOverlay = styled('div')({
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: '0',
  background:
    'linear-gradient(0deg, rgba(0,0,0,1) 8%, rgba(255,255,255,0) 100%)',
});

export const SliderActionWrapper = styled('div')(({ theme }) => ({
  alignItems: 'start',
  position: 'absolute',
  bottom: '16px',
  left: '32px',
  [theme.breakpoints.down('md')]: {
    left: '8px',
  },
}));
