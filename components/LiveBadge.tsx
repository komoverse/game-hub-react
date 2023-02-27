import { COLOR, GRADIENT } from '@/utils/globalVariable';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LiveBadge = () => {
  return (
    <Box sx={{ display: 'flex', height: '24px', width: '50px' }}>
      <Box
        component="span"
        sx={{
          position: 'absolute',
          borderRadius: '20px',
          background: GRADIENT.primary,
          width: '50px',
          height: '24px',

          animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',

          '@keyframes ping': {
            '75%, 100%': {
              transform: 'scale(1.5)',
              opacity: '0',
            },
          },
        }}
      ></Box>
      <Box
        component="span"
        sx={{
          position: 'relative',
          color: COLOR.baseWhite,
          borderRadius: '20px',
          background: GRADIENT.primary,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="overline" fontSize={12} fontWeight={500}>
          Live
        </Typography>
      </Box>
    </Box>
  );
};

export default LiveBadge;
