import { COLOR, RADIUS } from '@/utils/globalVariable';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

const EmptyData = ({
  title,
  message,
}: {
  title: string;
  message?: string | any;
}) => {
  return (
    <Box
      sx={{
        borderRadius: RADIUS.large,
        backgroundColor: COLOR.baseEmptyBackground,
        marginBottom: '300px',
        marginTop: '64px',
        padding: '32px 16px',
        textAlign: 'center',
        border: `1px solid ${COLOR.baseEmptyBackground}`,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            margin: '16px 0px 0px',
            fontWeight: 500,
            color: COLOR.baseWhite,
          }}
        >
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(EmptyData);
