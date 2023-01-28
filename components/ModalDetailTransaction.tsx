import React from 'react'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Unverified from '@/components/Unverified';
import { shortenWalletAddress } from '@/utils/shorten';
import { formatPercent } from '@/utils/percentage';
import { useQuery } from 'react-query';
import { ErrorResponseDto, MarketItemDto } from 'types';
import { getMarketItemById } from 'services/homepage';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CircularProgress from '@mui/material/CircularProgress';

type TProps = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  listingId: string
}

const ModalDetailTransaction = ({ open, setOpen, listingId }: TProps) => {
  const { t } = useTranslation()
  const handleClose = () => setOpen(!open)
  const [copy, setCopy] = React.useState('Copy')
  const { data, isLoading, error } = useQuery(['marketItemById', listingId], () => getMarketItemById(listingId), {
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !!listingId,
    onSuccess: (data: MarketItemDto) => data,
    onError: (error: ErrorResponseDto) => error,
  })

  const handleCopy = (address: string) => { 
    navigator.clipboard.writeText(address)
    setCopy('Copied')
    setTimeout(() => {
      setCopy('Copy')
    }, 1500)
  }

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          width: '100%',
          maxWidth: 1300,
          backgroundColor: 'rgb(0, 0, 0)',
          borderRadius: 5,
        },
      }}
      maxWidth="xl"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Typography sx={{ fontSize: 14, color: COLOR.baseWhite }}>Komoverse</Typography>
          <Typography sx={{ fontSize: 14, color: COLOR.baseWhite }}>Item</Typography>
          <Typography sx={{ fontSize: 14, color: COLOR.baseWhite }}>{data?.nft.name}</Typography>
        </Breadcrumbs>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        <Grid container spacing={4}>
          <Grid item md={5}>
            <Box sx={{ position: 'relative' }}>
              {/* <img
                ref={refImage}
                style={{ height: 'auto', width: '100%', visibility: 'visible', borderRadius: 10 }}
                src={data?.nft.image_uri}
                data-src={data?.nft.image_uri}
                decoding="async"
              /> */}
              <Image
                src={data?.nft.image_uri!}
                width={100}
                height={100}
                alt={KomoverseTag}
                decoding="async"
                style={{ height: 'auto', width: '100%', visibility: 'visible', borderRadius: 10 }}
                sizes="100vw"
                loading='lazy'
              />
              {/* <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                <Image
                  src={data?.nft.image_uri!}
                  width={100}
                  height={100}
                  alt={KomoverseTag}
                  decoding="async"
                  style={{
                    display: 'block', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: 8
                  }}
                  sizes="100vw"
                  loading='lazy'
                />
              </span> */}
            </Box>
          </Grid>
          <Grid md={7} item sx={{ paddingTop: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ backgroundColor: COLOR.backgroundSemiBlack, borderRadius: 4, padding: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h5'>{data?.nft.name}</Typography>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 8, paddingBottom: 8 }}>
                    {isLoading ? <CircularProgress size={15} /> : (
                      <Typography sx={{ display: 'flex', flexDirection: 'row', margin: 0, fontWeight: 500 }} variant="body1">
                        {data?.nft.collection.verified ? <VerifiedOutlinedIcon sx={{ color: COLOR.baseGray }} /> : <Unverified />}
                        <Typography variant='body2' sx={{ marginLeft: 0.5, color: COLOR.baseGray }}>
                          {data?.nft.collection.verified ? t('home.verified') : t('home.unVerified')}
                        </Typography>
                      </Typography>
                    )}
                  </div>
                </Box>
                <Box sx={{ marginTop: 2.5 }}>{data?.nft.description}</Box>
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
                    {data?.price} {data?.currency_symbol}
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
                  <Button sx={{ color: COLOR.baseWhite, textTransform: 'uppercase' }}>{t('button.buyNow')}</Button>
                </Box>
              </Box>
              <Box sx={{ backgroundColor: COLOR.backgroundSemiBlack, borderRadius: 4, padding: 3, marginTop: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h5'>{data?.nft.name}</Typography>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 8, paddingBottom: 8 }}>
                    {isLoading ? <CircularProgress size={15} /> : (
                      <Typography sx={{ display: 'flex', flexDirection: 'row', margin: 0, fontWeight: 500 }} variant="body1">
                        {data?.nft.collection.verified ? <VerifiedOutlinedIcon sx={{ color: COLOR.baseGray }} /> : <Unverified />}
                        <Typography variant='body2' sx={{ marginLeft: 0.5, color: COLOR.baseGray }}>
                          {data?.nft.collection.verified ? t('home.verified') : t('home.unVerified')}
                        </Typography>
                      </Typography>
                    )}
                  </div>
                </Box>
                <Grid container spacing={3} sx={{ marginTop: 0.1 }}>
                  {data?.nft.attributes_array.map((attr, idx: number) => (
                    <Grid item lg={4} md={6} sm={6} xs={6} key={idx}>
                      <Typography
                        sx={{ fontWeight: 500, color: COLOR.baseGray }}
                        variant='subtitle2'
                      >
                        {attr.trait_type}
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 500, color: COLOR.baseWhite }}
                        variant='body1'
                      >
                        {attr.value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box sx={{ backgroundColor: COLOR.backgroundSemiBlack, borderRadius: 4, padding: 3, marginTop: 2 }}>
                <Grid container spacing={3} sx={{ marginTop: 0.1 }}>
                  <Grid item lg={4} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseGray }}
                      variant='subtitle2'
                    >
                      Mint Address
                    </Typography>
                    {isLoading ? <CircularProgress size={15} /> : (

                      <Tooltip title={copy} placement="top" onClick={() => handleCopy(data?.nft.mint!)}>
                        <Typography
                          sx={{ fontWeight: 500, color: COLOR.baseWhite, cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
                          variant='body1'
                        >
                          {shortenWalletAddress(data?.nft.mint!)}
                        </Typography>
                      </Tooltip>
                    )}
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseGray }}
                      variant='subtitle2'
                    >
                      Owner
                    </Typography>
                    {isLoading ? <CircularProgress size={15} /> : (
                      <Tooltip title={copy} placement="top" onClick={() => handleCopy(data?.nft.owner!)}>
                        <Typography
                          sx={{ fontWeight: 500, color: COLOR.baseWhite, cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
                          variant='body1'
                        >
                          {shortenWalletAddress(data?.nft.owner!)}
                        </Typography>
                      </Tooltip>
                    )}
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{ fontWeight: 500, color: COLOR.baseGray }}
                      variant='subtitle2'
                    >
                      Royalties
                    </Typography>
                    {isLoading ? <CircularProgress size={15} /> : (
                      <Typography
                        sx={{ fontWeight: 500, color: COLOR.baseWhite }}
                        variant='body1'
                      >
                        {formatPercent(data?.nft.royalty!, 'en-US')}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default React.memo(ModalDetailTransaction)