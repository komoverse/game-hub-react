import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const RegistrationCustomInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: '8px',
    position: 'relative',
    fontSize: 16,
    padding: '10px 12px',
    backgroundColor: '#1F1F1F',
    border: '0.3px solid #646464',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
