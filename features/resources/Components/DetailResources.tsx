import Iconify from '@/components/Iconify';
import { formatDate } from '@/helper/date';
import useResponsive from '@/hooks/useResponsive';
import { NewsDto } from '@/types/resources';
import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import { CardContent, Divider, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from 'react-share';
import { colorLevel } from './constant';

const DetailResources = ({ data, url }: { data: NewsDto; url: string }) => {
  const smDown = useResponsive('down', 'sm');
  const iconStyles = { marginRight: 10, cursor: 'pointer' };

  const socmed: { icon: JSX.Element }[] = [
    {
      icon: (
        <FacebookShareButton url={url} quote={data?.title}>
          <Iconify
            icon="gg:facebook"
            height={24}
            width={24}
            style={iconStyles}
          />
        </FacebookShareButton>
      ),
    },
    {
      icon: (
        <TwitterShareButton url={url} title={data?.title} via="komoverse">
          <Iconify
            icon="mdi:twitter"
            height={24}
            width={24}
            style={iconStyles}
          />
        </TwitterShareButton>
      ),
    },
    {
      icon: (
        <RedditShareButton url={url} title={data?.title}>
          <Iconify
            icon="basil:reddit-solid"
            height={24}
            width={24}
            style={iconStyles}
          />
        </RedditShareButton>
      ),
    },
    {
      icon: (
        <LinkedinShareButton url={url} title={data?.title}>
          <Iconify
            icon="ri:linkedin-fill"
            height={24}
            width={24}
            style={iconStyles}
          />
        </LinkedinShareButton>
      ),
    },
    {
      icon: (
        <WhatsappShareButton url={url} title={data?.title}>
          <Iconify
            icon="ic:baseline-whatsapp"
            height={24}
            width={24}
            style={iconStyles}
          />
        </WhatsappShareButton>
      ),
    },
  ];

  return (
    <CardContent
      sx={{
        backgroundColor: COLOR.backgroundPaperResource,
        border: `1px solid ${COLOR.baseColorBorderResource}`,
        borderRadius: 2,
      }}
    >
      <Stack spacing={2}>
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
            objectFit: 'cover',
          }}
          priority={true}
          sizes="100vw"
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
        <Typography color={COLOR.baseColorTextGrayResource} variant="body1">
          {data?.visibility === 1
            ? t('utils.published')
            : t('utlis.notPublished')}{' '}
          {data?.updated_at !== null &&
            formatDate(data?.updated_at!, 'DD / MM / YYYY')}
        </Typography>
        <p
          dangerouslySetInnerHTML={{
            __html: data?.news_content as string,
          }}
        />
        <Divider />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Typography variant="subtitle1" fontWeight={500}>
            {t('resources.shareVia')}
          </Typography>
          <Stack direction="row" spacing={0}>
            {socmed.map((item, idx: number) => (
              <div key={idx}>{item.icon}</div>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </CardContent>
  );
};

export default React.memo(DetailResources);
