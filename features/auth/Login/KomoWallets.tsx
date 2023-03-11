import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { t } from 'i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import Logo from 'public/komoverse-logo-compact.png';
import FormLogin from './FormLogin';
import LoginSocmed from './LoginSocmed';

const KomoWallets = () => (
  <Accordion
    sx={{ width: '100%', justifyContent: 'space-between', boxShadow: 'none' }}
  >
    <AccordionSummary
      sx={{ backgroundColor: COLOR.baseSemiBlack }}
      expandIcon={<ExpandMoreIcon />}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ListItemIcon>
          <Image src={Logo} alt={KomoverseTag} width={25} height={25} />
        </ListItemIcon>
        <ListItemText>
          <Typography
            variant="subtitle2"
            sx={{ color: COLOR.baseWhite, fontWeight: 500 }}
          >
            {t('auth.komoverseWallet')}
          </Typography>
        </ListItemText>
      </Box>
    </AccordionSummary>
    <AccordionDetails sx={{ backgroundColor: COLOR.baseBackgroundLogin }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Image
          src="/logo.svg"
          alt="komoverse-logo"
          height={60}
          width={100}
          priority={true}
          style={{ cursor: 'pointer' }}
        />

        <FormLogin />

        <Divider sx={{ my: 2 }} className="dividerlogin">
          <Typography
            variant="body1"
            sx={{ color: COLOR.baseWhite, fontWeight: 600 }}
          >
            {t('utils.or')}
          </Typography>
        </Divider>

        <LoginSocmed />
      </Box>
    </AccordionDetails>
  </Accordion>
);

export default React.memo(KomoWallets);
