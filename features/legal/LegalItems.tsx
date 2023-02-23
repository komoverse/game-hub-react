import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ReactNode } from 'react';

import { StyledBodyText, StyledSubheading } from './styles';

export const LegalSectionContainer = ({
  children,
  index,
  title,
}: {
  children: ReactNode;
  index: string;
  title: string;
}) => (
  <Grid container spacing={2} mt={2}>
    <Grid item md={4} sx={{ textAlign: 'left' }}>
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <StyledSubheading>{index}.</StyledSubheading>
        <StyledSubheading>{title}</StyledSubheading>
      </Box>
    </Grid>
    <Grid item md={8} sx={{ textAlign: 'justify' }}>
      {children}
    </Grid>
  </Grid>
);

export const LegalSectionContent = ({
  children,
  subIndex,
}: {
  children: ReactNode;
  subIndex: string;
}) => {
  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <StyledBodyText>{subIndex}</StyledBodyText>
      <Box>{children}</Box>
    </Box>
  );
};
