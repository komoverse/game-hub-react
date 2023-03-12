import React from 'react';
import useResponsive from '@/hooks/useResponsive';
import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import { Button, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { AcademyDto } from '@/types/resources';
import { t } from 'i18next';
import { formatDate } from '@/helper/date';
import { colorLevel } from './constant';

const MainCard = ({
  data,
  onClick,
}: {
  data: AcademyDto;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const smDown = useResponsive('down', 'sm');

  return (
    <CardContent
      sx={{
        backgroundColor: COLOR.backgroundPaperResource,
        border: `1px solid ${COLOR.baseColorBorderResource}`,
        borderRadius: 2,
      }}
    >
      <Image
        src={data?.featured_image!}
        height={100}
        width={100}
        alt={KomoverseTag}
        decoding="async"
        style={{
          height: smDown ? 300 : 500,
          width: '100%',
          borderRadius: 8,
          marginBottom: '1.5rem',
          objectFit: 'cover',
        }}
        sizes="100vw"
        priority={true}
      />
      <Typography
        variant="body1"
        sx={{
          textTransform: 'capitalize',
          color: colorLevel(data?.level!),
        }}
      >
        {data?.level}
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 500 }}>
        {data?.title}
      </Typography>
      <p
        dangerouslySetInnerHTML={{
          __html: data?.news_content as string,
        }}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      />
      {smDown ? (
        <>
          <Button
            onClick={onClick}
            sx={{
              backgroundColor: COLOR.baseColorRead,
              borderRadius: 50,
              color: '#DDDDDD',
              padding: '3px 6px',
              textTransform: 'uppercase',
              my: 1,
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
            {data.updated_at !== null &&
              formatDate(data?.updated_at!, 'DD / MM / YYYY')}
          </Typography>
        </>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <Button
            onClick={onClick}
            sx={{
              backgroundColor: COLOR.baseColorRead,
              borderRadius: 50,
              color: '#DDDDDD',
              padding: '3px 6px',
              textTransform: 'uppercase',
              mb: 2,
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
            {data?.visibility === 1
              ? t('utils.published')
              : t('utlis.notPublished')}{' '}
            {data.updated_at !== null &&
              formatDate(data?.updated_at!, 'DD / MM / YYYY')}
          </Typography>
        </Box>
      )}
    </CardContent>
  );
};

export default React.memo(MainCard);
