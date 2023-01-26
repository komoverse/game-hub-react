import React from 'react'
import {
  Box,
  Breadcrumbs,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  styled,
  Typography
} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import { shortenWalletAddress } from '@/utils/shorten';
import { formatPercent } from '@/utils/percentage';

type TProps = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ListName = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography variant='h5'>Companion #1553</Typography>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 8, paddingBottom: 8 }}>
      <Typography sx={{ display: 'flex', flexDirection: 'row', margin: 0, fontWeight: 500 }} variant="body1">
        <VerifiedOutlinedIcon />
        <Typography variant='body2' sx={{ marginLeft: 0.5 }}>Verified</Typography>
      </Typography>
      <Typography sx={{ marginLeft: 2, display: 'flex', flexDirection: 'row' }}>
        <FingerprintOutlinedIcon />
        <Typography variant='body2' sx={{ marginLeft: 0.5 }}>Doxxed</Typography>
      </Typography>
    </div>
  </Box>
)

const Item = styled(Paper)(() => ({
  borderRadius: 4,
  margin: '16px 0'
}))

const ModalDetailTransaction = ({ open, setOpen }: TProps) => {
  const handleClose = () => setOpen(!open)
  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          width: '100%',
          maxWidth: 2000,
          backgroundColor: 'rgb(0, 0, 0)',
          borderRadius: 5,
        },
      }}
      maxWidth="xl"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Typography sx={{ fontSize: 12, color: COLOR.baseWhite }}>Komoverse</Typography>
          <Typography sx={{ fontSize: 12, color: COLOR.baseWhite }}>Item</Typography>
          <Typography sx={{ fontSize: 12, color: COLOR.baseWhite }}>Komoverse 12</Typography>
        </Breadcrumbs>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          <Grid item md={5}>
            <Box sx={{ position: 'relative' }}>
              <video style={{ height: 'auto', width: '100%', visibility: 'visible', borderRadius: 10 }} autoPlay loop muted poster='https://fractal-nft.imgix.net/solana/image/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?w=800&fm=webp&auto=format,compress&frame=1'>
                <source src='https://fractal-nft.imgix.net/solana/video/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?fm=webm&w=800&auto=compress' type='video/webm'></source>
                <source src='https://fractal-nft.imgix.net/solana/video/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?fm=mp4&w=800&auto=compress' type='video/mp4'></source>
              </video>
              <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                <img
                  src="https://fractal-nft.imgix.net/solana/image/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?w=3840&fit=crop&fm=webp&auto=format,compress&frame=1"
                  alt={KomoverseTag}
                  aria-hidden={true}
                  decoding="async"
                  style={{
                    display: 'block', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: 8
                  }}
                  sizes="100vw"
                  srcSet='https://fractal-nft.imgix.net/solana/image/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?w=640&fit=crop&fm=webp&auto=format,compress&frame=1 640w, https://fractal-nft.imgix.net/solana/image/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?w=750&fit=crop&fm=webp&auto=format,compress&frame=1 750w, https://fractal-nft.imgix.net/solana/image/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?w=828&fit=crop&fm=webp&auto=format,compress&frame=1 828w, https://fractal-nft.imgix.net/solana/image/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?w=1080&fit=crop&fm=webp&auto=format,compress&frame=1 1080w, https://fractal-nft.imgix.net/solana/image/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?w=1200&fit=crop&fm=webp&auto=format,compress&frame=1 1200w, https://fractal-nft.imgix.net/solana/image/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?w=1920&fit=crop&fm=webp&auto=format,compress&frame=1 1920w, https://fractal-nft.imgix.net/solana/image/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?w=2048&fit=crop&fm=webp&auto=format,compress&frame=1 2048w, https://fractal-nft.imgix.net/solana/image/DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe?w=3840&fit=crop&fm=webp&auto=format,compress&frame=1 3840w'
                />
              </span>
            </Box>
          </Grid>
          <Grid md={7} item sx={{ paddingTop: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ backgroundColor: '#191919', borderRadius: 4, padding: 3 }}>
                <ListName />
                <Box sx={{ marginTop: 2.5 }}>
                  2500 Mantodeas were hatched after a scientist dared to create a Pem/Human hybrid. While many humans regard Mantodea as an abomination, she is the most loyal companion a commander could find. She is incredibly proficient in combat due to her heightened senses and intellect. She is also good at reminding her master of imporant matters that need attention. Shame there are so few around.
                </Box>
                <Box sx={{ marginTop: 2.5 }}>
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 500, color: COLOR.baseGray }}
                  >
                    Current Price
                  </Typography>
                  <Typography
                    variant='h4'
                    sx={{ fontWeight: 500 }}
                  >
                    0.5 SOL
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderRadius: 1,
                    marginTop: 2.5,
                    textAlign: 'center',
                    background: 'radial-gradient(292.31% 1418.72% at -18.64% -62.88%, #99EC13 0%, #088F2E 63.54%, #054D19 100%)'
                  }}
                >
                  <Button sx={{ color: COLOR.baseWhite, textTransform: 'uppercase' }}>Buy Now</Button>
                </Box>
              </Box>
              <Box sx={{ backgroundColor: '#191919', borderRadius: 4, padding: 3, marginTop: 2 }}>
                <ListName />
                <Grid container spacing={3} sx={{ marginTop: 0.1 }}>
                  <Grid item lg={4} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseGray }}
                      variant='subtitle2'
                    >
                      Back Left
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseWhite }}
                      variant='body1'
                    >
                      Artiface of The 3
                    </Typography>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseGray }}
                      variant='subtitle2'
                    >
                      Back Left</Typography>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseWhite }}
                      variant='body1'
                    >
                      Artiface of The 3
                    </Typography>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseGray }}
                      variant='subtitle2'
                    >
                      Back Left</Typography>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseWhite }}
                      variant='body1'
                    >
                      Artiface of The 3
                    </Typography>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseGray }}
                      variant='subtitle2'
                    >
                      Back Left</Typography>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseWhite }}
                      variant='body1'
                    >
                      Artiface of The 3
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ backgroundColor: '#191919', borderRadius: 4, padding: 3, marginTop: 2 }}>
                <Grid container spacing={3} sx={{ marginTop: 0.1 }}>
                  <Grid item lg={4} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseGray }}
                      variant='subtitle2'
                    >
                      Mint Address</Typography>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseWhite }}
                      variant='body1'
                    >
                      {shortenWalletAddress('DSxjscgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6gSXe')}</
                    Typography>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseGray }}
                      variant='subtitle2'
                    >
                      Owner</Typography>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseWhite }}
                      variant='body1'
                    >
                      {shortenWalletAddress('ByoErcgi9HqYtt1bjNRgKw49TXMYWBrQe4UBbEe6g51B')}</
                    Typography>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseGray }}
                      variant='subtitle2'
                    >
                      Royalties</Typography>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseWhite }}
                      variant='body1'
                    >
                      {formatPercent(20, 'en-US')}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* <Box sx={{ marginTop: 4 }}>
          <Box sx={{ overflowX: 'auto' }}>
            <Item>a</Item>
          </Box>
        </Box> */}
      </DialogContent>
    </Dialog>
  )
}

export default ModalDetailTransaction