import { pxToRem, responsiveFontSizes } from '@/helper/typography';
import { styled } from '@mui/material/styles';

export const StyledHeading = styled('h2')(({ theme }) => ({
  fontSize: pxToRem(72),
  fontWeight: 700,
  lineHeight: 1.16,
  overflowWrap: 'break-word',
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(48),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: pxToRem(32),
  },
}));

export const StyledSubheading = styled('h4')(({ theme }) => ({
  fontSize: pxToRem(28),
  fontWeight: 400,
  lineHeight: 1.16,
  overflowWrap: 'break-word',

  [theme.breakpoints.down('md')]: {
    fontWeight: 500,
    fontSize: pxToRem(22),
  },
  [theme.breakpoints.down('sm')]: {
    fontWeight: 500,
    fontSize: pxToRem(18),
  },
}));

export const StyledBodyText = styled('p')(({ theme }) => ({
  fontSize: pxToRem(21),
  fontWeight: 400,
  lineHeight: 1.4,
  marginBottom: '1.25em',
  overflowWrap: 'break-word',

  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(16),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: pxToRem(12),
  },
}));

export const StyledUnorderedList = styled('ul')(({ theme }) => ({
  marginLeft: 20,
  fontSize: pxToRem(21),
  fontWeight: 400,
  lineHeight: 1.4,
  marginBottom: '1.25em',
  overflowWrap: 'break-word',

  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(16),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: pxToRem(12),
  },
}));
