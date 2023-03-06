import { COLOR, GRADIENT, KomoverseTag } from '@/utils/globalVariable';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import { useMutation } from 'react-query';
import { loginSocmed } from '@/services/auth';
import Router from 'next/router';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Iconify } from '@/components/index';
import { MutationKey, Provider } from '@/types/general';

export const Solana = ({ wallet }: any) => {
  const { mutate } = useMutation({
    mutationKey: MutationKey.LOGIN_SOCMED,
    mutationFn: (provider: string) => loginSocmed(provider),
    onSuccess: (url: string) => Router.replace(url),
  });

  const onFinsih = (provider: string) => mutate(provider);

  const styleButton = {
    fontWeight: 500,
    textTransform: 'uppercase',
    margin: '8px 0px 0px',
    background: GRADIENT.primary,
    color: COLOR.baseWhite,
  };

  return (
    <Accordion
      sx={{ width: '100%', justifyContent: 'space-between', boxShadow: 'none' }}
    >
      <AccordionSummary
        sx={{ backgroundColor: COLOR.baseSemiBlack }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ListItemIcon>
            <Image
              src={wallet.image}
              alt={KomoverseTag}
              width={25}
              height={25}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="subtitle2"
              sx={{ color: COLOR.baseWhite, fontWeight: 500 }}
            >
              {wallet.name}
            </Typography>
          </ListItemText>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>
              {t('auth.signInWith')}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/komoverse-logo-full.png"
                alt="komoverse-logo"
                height={40}
                width={80}
                priority={true}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '300px',
              my: 2,
            }}
          >
            <Button
              onClick={() => onFinsih(Provider.GOOGLE)}
              size="large"
              sx={styleButton}
              endIcon={<GoogleIcon />}
            >
              {t('auth.signInGoogle')}
            </Button>
            <Button
              onClick={() => onFinsih(Provider.TWITTER)}
              size="large"
              sx={styleButton}
              endIcon={<TwitterIcon />}
            >
              {t('auth.signInTwitter')}
            </Button>
            <Button
              onClick={() => onFinsih(Provider.DISCORD)}
              size="large"
              sx={styleButton}
              endIcon={
                <Iconify icon="ic:baseline-discord" height={24} width={24} />
              }
            >
              {t('auth.signInDiscord')}
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div>{t('auth.earnReward')}</div>
            <div>{t('auth.noChromeExtension')}</div>
            <div>{t('auth.buyNftYourPhone')}</div>
          </Box>
        </Box>
      </AccordionDetails>
      {/* <Box sx={{ display: 'flex' }}>
        <ListItemIcon>
          <Image
            src={wallet.image}
            alt={KomoverseTag}
            width={25}
            height={25}
          />
        </ListItemIcon>
        <ListItemText>
          <Typography variant='subtitle2' sx={{ color: COLOR.baseWhite, fontWeight: 500 }}>
            {wallet.name}
          </Typography>
        </ListItemText>
      </Box>
      {wallet.id === 1 ? (
        <ListItemSecondaryAction
          onClick={chooseLoginSocmed}
          sx={{ color: COLOR.baseGray, fontWeight: 500 }}
        >
          {t('auth.recommended')}
        </ListItemSecondaryAction>
      ) : wallet.id === 2 ? (
        <ArrowForwardOutlinedIcon sx={{ color: COLOR.baseGray }} />
      ) : null} */}
    </Accordion>
  );
};

// export const Ethereum = () => {
//   const [openToast, setOpenToast] = React.useState<boolean>(false)
//   const [isMessage, setIsMessage] = React.useState<string>('')

//   const { connectAsync, connectors } = useConnect({
//     onSuccess: (data) => {
//       actionModalAuth.setModalAuth({ visible: false });
//       actionWallets.setWallets(data)
//     },
//     onError: (error) => console.error(error),
//     onSettled(data, error) {
//       if (error) {
//         setOpenToast(true)
//         setIsMessage(error.message)
//       }
//     },
//   })

//   const { mutate } = useMutation((data: WalletsDto) => loginWallet(data))

//   const handleLoginWallet = async (data: any) => {
//     await connectAsync(data)
//       .then((res: any) => mutate(res))
//       .catch((err) => console.log(err.response))
//   };

//   return (
//     <>
//       {connectors?.map((connector) => (
//         <Button
//           key={connector?.id}
//           disabled={!connector.ready}
//           sx={{ width: '100%', justifyContent: 'space-between' }}
//           onClick={() => handleLoginWallet({ connector })}
//         >
//           <Box sx={{ display: 'flex' }}>
//             <ListItemIcon>
//               <Image
//                 src={connector?.options.appLogoUrl}
//                 alt={KomoverseTag}
//                 width={25}
//                 height={25}
//               />
//             </ListItemIcon>
//             <ListItemText>
//               <Typography variant='subtitle2' sx={{ color: COLOR.baseWhite, fontWeight: 500 }}>
//                 {connector?.name}
//               </Typography>
//             </ListItemText>
//           </Box>
//           {connector.name === "Komoverse Wallet" && (
//             <ListItemSecondaryAction
//               sx={{ color: COLOR.baseGray, fontWeight: 500 }}
//             >
//               {t('auth.recommended')}
//             </ListItemSecondaryAction>
//           )}
//         </Button>
//       ))
//       }
//       <Toast
//         open={openToast}
//         setOpen={setOpenToast}
//         message={isMessage}
//         position={{ vertical: 'top', horizontal: 'center' }}
//         type="error"
//       />
//     </>
//   )
// }
