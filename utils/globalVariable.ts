import { styled } from '@mui/system';

export const KomoverseTag = 'Komoverse';
export const COLOR = {
  baseGreen: '#0FD236',
  baseWhite: '#FFFFFF',
  baseSemiBlack: '#141414',
  baseGray: '#B5B5B5',
  backgroundCardSemiBlack: '#111111',
  backgroundRoot: '#000000',
  borderSemiBlack: '#1E1E1E',
  backgroundSemiBlack: '#191919',
  baseSemiGray: '#ABABAB',
  backgroundTableStriped1: '#181818',
  backgroundTableStriped2: '#0E0E0E',
  backgroundTableHover: '#2F2F2F',
  baseSky: '#0FD2BE',
  baseCardBlack: '#101010',
  backgroundCardBlack: '#0D0D0D',
  baseTextGray: '#B5B5B5',
  baseBackgroundButtonGray: '#323232',
  baseColumnBlack: '#161616',
  baseButtonBlack: '#121212',
  baseError: '#F4636F',
  baseSemiTextGray: '#868686',
  baseLightTextGray: '#A5A5A5',
  baseEmptyBackground: '#202020',
  baseBackgroundReview: '#171717',
  baseBackgroundLogin: '#0B0B0B',
  baseColorDivider: '#4E4E4E',
  baseGrayPieChart: '#333333',
  baseColorDanger: '#EB5757',
  backgroundPaperResource: '#131313',
  baseColorBorderResource: '#2C2C2C',
  baseColorTextGrayResource: '#626262',
  baseColorRead: '#272727',
  baseColorOrange: '#FF7D04',
  baseBorderGray: '#2E2E2E',
  baseColorDownload: '#CFCFCF',
};

export const GRADIENT = {
  primary:
    'radial-gradient(292.31% 1418.72% at -18.64% -62.88%, #99EC13 0%, #088F2E 63.54%, #054D19 100%)',
  secondary:
    'linearGradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
  tertiary:
    'radial-gradient(126.27% 115.1% at 0% 100%, rgba(15, 210, 54, 0.54) 0%, rgba(0, 0, 0, 0.28) 100%)',
};

export const RADIUS = {
  large: '14px',
  medium: '8px',
  small: '4px',
};

export const FONTWEIGHT = {
  bold: 700,
  medium: 500,
  regular: 400,
};

export const FONTSIZE = {
  large: '16px',
  medium: '14px',
  small: '12px',
};

export const SectionWrapper = styled('div')(() => ({
  backgroundColor: COLOR.backgroundRoot,
  paddingTop: '8px',
  paddingBottom: '8px',
  width: '100%',
  zIndex: 10,
}));

export const SectionWrapperCard = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 64px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 15px',
  },
}));

export const ButtonCard = styled('div')(() => ({
  border: `1.3px solid #181818 ${COLOR.backgroundTableStriped1}`,
  background: COLOR.backgroundTableStriped1,
  marginBottom: '5px',
  padding: '6px 8px',
  fontWeight: 700,
  fontSize: '0.875rem',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
