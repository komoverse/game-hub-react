import { Box, Grid } from '@mui/material';

import { StyledBodyText, StyledSubheading } from './styles';

const LegalItem = ({ section }: { section: string }) => {
  return (
    <Grid container spacing={2} mt={2} sx={{ textAlign: 'justify' }}>
      <Grid item md={4}>
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <StyledSubheading>1.</StyledSubheading>
          <StyledSubheading>{section}</StyledSubheading>
        </Box>
      </Grid>
      <Grid item md={8}>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <StyledBodyText>1.1</StyledBodyText>
          <Box>
            <StyledBodyText>
              In this Privacy Policy:“We”, “we”, “our”, “us”, “Us” means
              Komoverse (Komodo Metaverse) and its related corporations.
            </StyledBodyText>
            <StyledBodyText>
              “You”, “you”, “Your”, “your” means the persons to whom this
              Privacy Policy applies.
            </StyledBodyText>
            <StyledBodyText>
              “Personal Data” means any data which can be used to identify a
              natural person.
            </StyledBodyText>
            <StyledBodyText>
              “Service Providers” means our third-party publishers, advertisers,
              vendors, business partners and contractors whether former,
              current, or prospective.
            </StyledBodyText>
            <StyledBodyText>
              “Services” means our products, services, content, features,
              technologies or functions offered on websites, applications and
              services operated by us or our Service Providers.
            </StyledBodyText>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LegalItem;
