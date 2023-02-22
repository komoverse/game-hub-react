import { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import { Box, Container, Grid } from '@mui/material';

import { COLOR } from '@/utils/globalVariable';
import { StyledHeading, StyledSubheading } from './styles';

const LegalContainer = ({
  title,
  updatedDate,
  children,
}: {
  title: string;
  updatedDate: string;
  children: ReactNode;
}) => {
  return (
    <Container maxWidth={false} sx={{ padding: '50px' }}>
      <Paper
        sx={{
          padding: '63px 72px',
          backgroundColor: COLOR.backgroundCardSemiBlack,
          backgroundImage: 'none',
        }}
      >
        <StyledSubheading>Komodo Metaverse</StyledSubheading>
        <StyledHeading>{title}</StyledHeading>
        <StyledSubheading>Last Updated: {updatedDate}</StyledSubheading>
        {children}
      </Paper>
    </Container>
  );
};

export default LegalContainer;
