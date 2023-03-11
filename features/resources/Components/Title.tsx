import React from 'react';
import { Typography } from '@mui/material';

const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ textTransform: 'uppercase', textAlign: 'center' }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={500}
        sx={{ textAlign: 'center' }}
      >
        {description}
      </Typography>
    </>
  );
};

export default React.memo(Title);
