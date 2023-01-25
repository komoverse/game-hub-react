import React from 'react'
import styled from '@emotion/styled'
import { Box, CardContent, Typography } from '@mui/material'
import { COLOR } from '@/utils/globalVariable'
import { shortenTitleGame } from '@/utils/shorten'

const BoxCard = styled('div')(() => ({
  height: 340.5,
  position: 'absolute',
  pointerEvents: 'auto',
  transform: 'none',
  zIndex: 'auto',
  cursor: 'pointer'
}))

const CardActionArea = styled('div')(() => ({
  border: `1.3px solid ${COLOR.borderSemiBlack}`,
  padding: '12px',
  background: COLOR.backgroundCardSemiBlack,
  borderRadius: '8px'
}))

const BoxContent = styled('div')(() => ({
  borderRadius: 5,
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  width: '100%'
}))

const BoxImage = styled('div')(() => ({
  boxSizing: 'border-box',
  display: 'block',
  width: 'initial',
  height: 'initial',
  background: 'none',
  opacity: 1,
  border: 0,
  margin: 0,
  padding: '100% 0px 0px'
}))

const Button = styled('div')(() => ({
  border: '1.3px solid #232323',
  background: '#181818',
  marginTop: '12px',
  padding: '6px 8px',
  fontWeight: 700,
  color: COLOR.baseGreen,
  fontSize: '0.875rem',
  borderRadius: '7px'
}))

const CardImage = ({ data, onClick, ...other }: {
  data: any,
  onClick: React.MouseEventHandler<HTMLDivElement>,
}) => {
  const { image, title, subtitle, action } = data

  return (
    <Box sx={{ height: 341, position: 'relative' }}>
      <BoxCard onClick={onClick}>
        <Box sx={{ width: 208.5 }}>
          <CardActionArea>
            <BoxContent>
              <BoxImage />
              <img
                alt='Komoverse'
                src={image}
                decoding='async'
                style={{
                  position: 'absolute',
                  inset: 0,
                  boxSizing: 'border-box',
                  padding: 0,
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: 0,
                  height: 0,
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </BoxContent>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', borderRadius: 4, textAlign: 'center' }}>
              <div>
                <Typography variant='h6' sx={{ fontWeight: 400 }}>{shortenTitleGame(title)}</Typography>
                <Typography variant='subtitle2' sx={{ ...other }}>{subtitle}</Typography>
              </div>
              <Button>{action}</Button>
            </CardContent>
          </CardActionArea>
        </Box>
      </BoxCard>
    </Box>
  )
}

export default React.memo(CardImage)