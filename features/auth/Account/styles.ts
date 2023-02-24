import { styled } from '@mui/material/styles';

import { COLOR, GRADIENT } from '@/utils/globalVariable';

export const styleButton = {
  fontWeight: 500,
  textTransform: 'uppercase',
  background: GRADIENT.primary,
  color: COLOR.baseWhite,
};

export const StyledDivider = styled('div')({
  display: 'flex',
  width: '100%',
  margin: '8px 0',
  alignItems: 'center',
  '--text-divider-gap': '1rem',

  '&:before': {
    content: "''",
    height: '1px',
    marginRight: '10px',
    backgroundColor: '#575757',
    flexGrow: 1,
  },

  '&:after': {
    content: "''",
    height: '1px',
    marginLeft: '10px',
    backgroundColor: '#575757',
    flexGrow: 1,
  },
});

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '16px',
});
