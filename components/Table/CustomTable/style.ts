import {
  TopPlayersCellClassnames,
  TopPlayersRowClassnames,
} from '@/types/general';
import { COLOR, RADIUS } from '@/utils/globalVariable';
import { styled } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

const RadiusLeft = {
  borderTopLeftRadius: RADIUS.medium,
  borderBottomLeftRadius: RADIUS.medium,
};

const RadiusRight = {
  borderTopRightRadius: RADIUS.medium,
  borderBottomRightRadius: RADIUS.medium,
};

export const CustomTable = styled(DataGrid)(() => ({
  border: 0,
  WebkitFontSmoothing: 'auto',
  '& .MuiDataGrid-columnHeaders': {
    borderBottom: 0,
    fontSize: 14,
  },
  '& .score': {
    minWidth: '220px !important',
  },
  '& .rank': {
    minWidth: '110px !important',
  },
  '& .MuiDataGrid-columnHeaderTitleContainerContent': {
    height: 25,
    borderRadius: '50px',
    background: COLOR.baseColumnBlack,
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 800,
    padding: '0 15px',
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
  '& .MuiDataGrid-row': {
    marginBottom: '10px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  [`& .${gridClasses.row}.${TopPlayersRowClassnames.FIRST}`]: {
    [`& .${gridClasses.cell}.${TopPlayersCellClassnames.KOMO_USERNAME}`]: {
      ...RadiusLeft,
      backgroundColor: '#1F1F1F',
    },
    [`& .${gridClasses.cell}.${TopPlayersCellClassnames.SCORE}`]: {
      ...RadiusRight,
      backgroundColor: '#1F1F1F',
    },
  },
  [`& .${gridClasses.row}.${TopPlayersRowClassnames.SECOND}`]: {
    [`& .${gridClasses.cell}.${TopPlayersCellClassnames.KOMO_USERNAME}`]: {
      ...RadiusLeft,
      backgroundColor: '#171717',
    },
    [`& .${gridClasses.cell}.${TopPlayersCellClassnames.SCORE}`]: {
      ...RadiusRight,
      backgroundColor: '#171717',
    },
  },
  [`& .${gridClasses.row}.${TopPlayersRowClassnames.THIRD}`]: {
    [`& .${gridClasses.cell}.${TopPlayersCellClassnames.KOMO_USERNAME}`]: {
      ...RadiusLeft,
      backgroundColor: '#141414',
    },
    [`& .${gridClasses.cell}.${TopPlayersCellClassnames.SCORE}`]: {
      ...RadiusRight,
      backgroundColor: '#141414',
    },
  },
  [`& .${gridClasses.row}.${TopPlayersRowClassnames.FOURTH}`]: {
    [`& .${gridClasses.cell}.${TopPlayersCellClassnames.KOMO_USERNAME}`]: {
      ...RadiusLeft,
      backgroundColor: '#131313',
    },
    [`& .${gridClasses.cell}.${TopPlayersCellClassnames.SCORE}`]: {
      ...RadiusRight,
      backgroundColor: '#131313',
    },
  },
  [`& .${gridClasses.row}.${TopPlayersRowClassnames.MORE_THAN_FOUR}`]: {
    [`& .${gridClasses.cell}.${TopPlayersCellClassnames.KOMO_USERNAME}`]: {
      ...RadiusLeft,
      backgroundColor: '#111111',
    },
    [`& .${gridClasses.cell}.${TopPlayersCellClassnames.SCORE}`]: {
      ...RadiusRight,
      backgroundColor: '#111111',
    },
  },
}));
