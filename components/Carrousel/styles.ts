import { styled } from '@mui/material/styles';

export const NavigatorStyled = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '8px',
  gap: '8px',
  backgroundColor: '#000000',
  position: 'relative',
  zIndex: '12',
});

export const NavigatorItemStyled = styled('button')({
  backgroundColor: 'transparent',
  border: '1px solid rgb(158, 158, 158)',
  borderRadius: '50%',
  height: '12px',
  padding: '6px',
  width: '12px',
  cursor: 'pointer',
});

export const VideoStyled = styled('video')({
  objectFit: 'cover',
  height: '100%',
  width: '100%',
  position: 'absolute',
});

export const ImageStyled = styled('img')({
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
  bottom: '64px',
  left: '124px',
  [theme.breakpoints.down('md')]: {
    bottom: 'auto',
    left: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
}));
