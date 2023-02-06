import { COLOR } from '@/utils/globalVariable';
import { alpha, styled } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

const ODD_OPACITY = 0.2;

export const BasicTable = styled(DataGrid)(({ theme }) => ({
  border: 0,
  WebkitFontSmoothing: 'auto',
  '& .MuiDataGrid-columnHeaders': {
    borderBottom: 0,
    fontSize: 10,
  },
  '& .MuiDataGrid-footerContainer': {
    borderTop: 0,
  },
  '& .MuiDataGrid-cell': {
    borderBottom: 'none',
    fontWeight: 500,
    fontSize: '1rem',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: COLOR.backgroundTableStriped1,
    '&:hover, &.Mui-hovered': {
      backgroundColor: COLOR.backgroundTableHover,
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: 'red',
      '&:hover, &.Mui-hovered': {
        backgroundColor: 'red',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: COLOR.backgroundTableStriped2,
    '&:hover, &.Mui-hovered': {
      backgroundColor: COLOR.backgroundTableHover,
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: 'red',
      '&:hover, &.Mui-hovered': {
        backgroundColor: 'red',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));
