import React from 'react'
import { Box, CardContent, Typography } from '@mui/material'
import { shortenTitleGame } from '@/utils/shorten'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image'
import { RecentDto } from 'types'
import { BoxCard, BoxContent, BoxImage, CardActionArea } from './style'

dayjs.extend(relativeTime);

type CardImageProps = {
  data: RecentDto,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  children?: React.ReactNode
  fontWeight: number,
  color: string,
}

const CardImage = ({ data, onClick, fontWeight, color, children }: CardImageProps) => {
  const { image_url, name, created_at } = data
  const date = dayjs(created_at).fromNow()

  return (
    <Box sx={{ height: 341, position: "relative" }}>
      <BoxCard onClick={onClick}>
        <Box sx={{ width: 208.5 }}>
          <CardActionArea>
            <BoxContent>
              <BoxImage />
              <Image
                alt='Komoverse'
                src={image_url}
                decoding='async'
                style={{
                  position: "absolute",
                  inset: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                width={100}
                height={100}
              />
            </BoxContent>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 4,
                textAlign: "center",
              }}
            >
              <Typography variant='h6' sx={{ fontWeight: fontWeight }}>{shortenTitleGame(name)}</Typography>
              <Typography variant='subtitle2' sx={{ fontWeight: 400, color: color }}>{date}</Typography>
            </CardContent>
            {children}
          </CardActionArea>
        </Box>
      </BoxCard>
    </Box>
  );
};

export default React.memo(CardImage);
