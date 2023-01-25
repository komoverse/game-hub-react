import { COLOR } from '@/utils/globalVariable';
import { ButtonBase, styled } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BoxButton = styled('div')(() => ({
  alignItems: 'center !important',
  display: 'flex !important',
  height: '100% !important',
  justifyContent: 'center !important',
  position: 'absolute',
  right: '0px !important',
  top: '85px !important',
  width: '64px !important',
  background: 'linear-gradient(to right, transparent, rgb(0, 0, 0)) !important'
}))

const Button = styled(ButtonBase)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxZizing: 'border-box',
  backgroundColor: 'transparent',
  outline: '0px',
  border: '0px',
  margin: '0px',
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  textDecoration: 'none',
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: '1.5rem',
  padding: '8px',
  overflow: 'visible',
  color: COLOR.baseWhite,
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  borderRadius: '0px',
  height: '100%',
  width: '64px',
}))

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <BoxButton
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Button>
        <NavigateNextIcon />
      </Button>
    </BoxButton>
  );
}

export default NextArrow