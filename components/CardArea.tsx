import styled from '@emotion/styled'
import React from 'react'

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

const CardArea = ({ image }: { image: string }) => (
  <BoxContent>
    <BoxImage>
    </BoxImage>
    <img
      alt='Komoverse'
      src={image}
      decoding='async'
      style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'contain' }}
    />
  </BoxContent>
)

export default React.memo(CardArea)