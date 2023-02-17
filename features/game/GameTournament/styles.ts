import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Image from 'next/image';

import { COLOR, RADIUS } from '@/utils/globalVariable';

export const VideoStyled = styled('video')({
  objectFit: 'cover',
  borderRadius: RADIUS.medium,
  width: '100%',
});

export const ImageStyled = styled(Image)({
  objectFit: 'cover',
  borderRadius: RADIUS.medium,
  width: '100%',
  height: '100%',
});

export const TournamentContentWrapper = styled(Box)({
  borderRadius: RADIUS.medium,
  background: '#0F0F0F',
});
