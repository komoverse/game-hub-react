import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Unverified from '@/components/UnverifiedIcon';
import { shortenWalletAddress } from '@/utils/shorten';
import { formatPercent } from '@/utils/percentage';
import { MarketItemDto } from '@/types/detail';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'
import { ReduxState } from '@/types/redux'

const NftDetails = () => {
  const data = useSelector((state: ReduxState) => state.detailNft as MarketItemDto)
  const { t } = useTranslation()
  const [copy, setCopy] = React.useState('Copy')

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address)
    setCopy('Copied')
    setTimeout(() => {
      setCopy('Copy')
    }, 1500)
  }

  return (
    <Grid container spacing={4}>
      <Grid item md={5}>
        <Box sx={{ position: 'relative' }}>
          <Image
            src={data?.nft?.image_uri!}
            width={100}
            height={100}
            alt={KomoverseTag}
            decoding="async"
            style={{ height: 'auto', width: '100%', visibility: 'visible', borderRadius: 10 }}
            sizes="100vw"
            loading='lazy'
          />
        </Box>
      </Grid>
      <Grid md={7} item sx={{ paddingTop: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ backgroundColor: COLOR.backgroundSemiBlack, borderRadius: 4, padding: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h5'>{data?.nft?.name}</Typography>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 8, paddingBottom: 8 }}>
                <Typography sx={{ display: 'flex', flexDirection: 'row', margin: 0, fontWeight: 500 }} variant="body1">
                  {data?.nft?.collection.verified ? <VerifiedOutlinedIcon sx={{ color: COLOR.baseGray }} /> : <Unverified />}
                </Typography>
                <Typography variant='body2' sx={{ marginLeft: 0.5, color: COLOR.baseGray }}>
                  {data?.nft?.collection.verified ? t('home.verified') : t('home.unVerified')}
                </Typography>
              </div>
            </Box>
            <Box sx={{ marginTop: 2.5 }}>{data?.nft?.description}</Box>
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
              <Typography variant='h5'>{data?.nft?.name}</Typography>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 8, paddingBottom: 8 }}>
                <Typography sx={{ display: 'flex', flexDirection: 'row', margin: 0, fontWeight: 500 }} variant="body1">
                  {data?.nft?.collection.verified ? <VerifiedOutlinedIcon sx={{ color: COLOR.baseGray }} /> : <Unverified />}
                </Typography>
                <Typography variant='body2' sx={{ marginLeft: 0.5, color: COLOR.baseGray }}>
                  {data?.nft?.collection.verified ? t('home.verified') : t('home.unVerified')}
                </Typography>
              </div>
            </Box>
            <Grid container spacing={3} sx={{ marginTop: 0.1 }}>
              {data?.nft?.attributes_array.map((attr, idx: number) => (
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

                <Tooltip title={copy} placement="top" onClick={() => handleCopy(data?.nft?.mint!)}>
                  <Typography
                    sx={{ fontWeight: 500, color: COLOR.baseWhite, cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
                    variant='body1'
                  >
                    {shortenWalletAddress(data?.nft?.mint!)}
                  </Typography>
                </Tooltip>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={6}>
                <Typography
                  sx={{ fontWeight: 500, color: COLOR.baseGray }}
                  variant='subtitle2'
                >
                  Owner
                </Typography>
                <Tooltip title={copy} placement="top" onClick={() => handleCopy(data?.nft?.owner!)}>
                  <Typography
                    sx={{ fontWeight: 500, color: COLOR.baseWhite, cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
                    variant='body1'
                  >
                    {shortenWalletAddress(data?.nft?.owner!)}
                  </Typography>
                </Tooltip>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={6}>
                <Typography
                  sx={{ fontWeight: 500, color: COLOR.baseGray }}
                  variant='subtitle2'
                >
                  Royalties
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, color: COLOR.baseWhite }}
                  variant='body1'
                >
                  {formatPercent(data?.nft?.royalty!, 'en-US')}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default React.memo(NftDetails)
