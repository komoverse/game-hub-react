import React from 'react';
import { LayoutResourceProps } from '@/types/general';
import { Footer, LayoutResource } from './style';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Iconify from '@/components/Iconify';
import { KomoverseTag } from '@/utils/globalVariable';

const Layout = ({ children }: LayoutResourceProps) => {
  const socmed = [
    {
      name: 'instagram',
      link: 'https://www.instagram.com/komoverse/',
      icon: 'mdi:instagram',
    },
    {
      name: 'facebook',
      link: 'https://www.facebook.com/komoverse/',
      icon: 'gg:facebook',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/company/komoverse/',
      icon: 'ri:linkedin-fill',
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/komoverse',
      icon: 'mdi:twitter',
    },
    {
      name: 'telegram',
      link: 'https://t.me/komoverse',
      icon: 'mdi:telegram',
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/channel/UCZ1Z2Z3Z4Z5Z6Z7Z8Z9Z10',
      icon: 'mdi:youtube',
    },
    {
      name: 'discord',
      link: 'https://discord.gg/2Z3Z4Z5Z6Z7Z8Z9Z10',
      icon: 'ic:baseline-discord',
    },
  ];

  return (
    <LayoutResource>
      {children}
      <Footer>
        <Stack spacing={2}>
          <Image
            src="/logo.svg"
            alt={KomoverseTag}
            height={50}
            width={100}
            priority={true}
            style={{ cursor: 'pointer', margin: 'auto', marginTop: '3rem' }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {socmed.map((item, idx: number) => (
              <Iconify
                key={idx}
                icon={item.icon}
                height={24}
                width={24}
                style={{ marginRight: 10, cursor: 'pointer' }}
                onClick={() => window.open(item.link, '_blank')}
              />
            ))}
          </Box>
          <Typography variant="body2">©{new Date().getFullYear()}</Typography>
        </Stack>
      </Footer>
    </LayoutResource>
  );
};

export default Layout;
