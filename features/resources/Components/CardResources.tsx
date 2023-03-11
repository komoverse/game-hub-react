import { formatDate } from '@/helper/date';
import useResponsive from '@/hooks/useResponsive';
import { AcademyDto } from '@/types/resources';
import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';
import { colorLevel } from './constant';

const CardResources = ({
  data,
  onClick,
}: {
  data: AcademyDto;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const smDown = useResponsive('down', 'sm');

  return (
    <Card
      sx={{
        backgroundColor: COLOR.backgroundPaperResource,
        border: `1px solid ${COLOR.baseColorBorderResource}`,
        borderRadius: 2,
        height: 450,
      }}
    >
      <CardContent>
        <Image
          src={data?.featured_image!}
          height={100}
          width={100}
          alt={KomoverseTag}
          decoding="async"
          style={{
            height: smDown ? 250 : 233,
            width: '100%',
            borderRadius: 8,
            objectFit: 'cover',
          }}
          sizes="100vw"
          loading="lazy"
        />
      </CardContent>
      <CardActions>
        <Stack spacing={1}>
          <Typography
            variant="body1"
            sx={{
              textTransform: 'capitalize',
              color: colorLevel(data?.level!),
            }}
          >
            {data?.level}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 500 }}
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {data?.title}
          </Typography>
          <Button
            onClick={onClick}
            sx={{
              backgroundColor: COLOR.baseColorRead,
              borderRadius: 50,
              color: '#DDDDDD',
              padding: '3px 6px',
              textTransform: 'uppercase',
            }}
            startIcon={
              <Image
                src="/book.svg"
                width={100}
                height={100}
                alt={KomoverseTag}
                style={{
                  backgroundColor: '#E6E6E6',
                  borderRadius: 100,
                  height: 'auto',
                  width: '100%',
                }}
              />
            }
          >
            {t('utils.seeMore')}
          </Button>
          <Typography color={COLOR.baseColorTextGrayResource} variant="body1">
            {data?.visibility === 1 ? t('utils.published') : null}{' '}
            {formatDate(data?.updated_at!, 'DD / MM / YYYY')}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default React.memo(CardResources);
