import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type SectionTitleProps = {
  title: string;
  navigation?: string;
};

const Navigation = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
}));

const SectionTitle = ({ title, navigation }: SectionTitleProps) => (
  <Navigation>
    <Typography sx={{ marginLeft: '8px' }} variant="h5">
      {title}
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        variant="subtitle2"
        sx={{ color: '#989898 ', fontWeight: 500 }}
      >
        {navigation}
      </Typography>
      {navigation !== undefined && (
        <ArrowForwardIcon
          sx={{ color: '#989898', fontSize: 16, marginLeft: 2 }}
        />
      )}
    </Box>
  </Navigation>
);

export default React.memo(SectionTitle);
