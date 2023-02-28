import Grid from '@mui/material/Grid';

import { ImageStyled, TournamentContentWrapper, VideoStyled } from '../styles';
import { regexImageFileValidation } from '@/utils/regex';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const PlaceholderImage = () => {
  return (
    <ImageStyled
      src={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      alt="game tournament image"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      width={100}
      height={100}
    />
  );
};

const TournamnetImage = ({ bannerUrl }: { bannerUrl: string }) => {
  const isContentImage = (url: string) => {
    return regexImageFileValidation.test(url);
  };

  if (!bannerUrl) {
    return (
      <Grid item xs={12} md={4} sx={{}}>
        <TournamentContentWrapper>
          <PlaceholderImage />
        </TournamentContentWrapper>
      </Grid>
    );
  }

  return (
    <Grid item xs={12} md={4} sx={{}}>
      <TournamentContentWrapper>
        {isContentImage(bannerUrl) ? (
          <ImageStyled
            src={bannerUrl}
            alt="game tournament image"
            width={100}
            height={100}
          />
        ) : (
          <VideoStyled src={bannerUrl} autoPlay loop playsInline muted />
        )}
      </TournamentContentWrapper>
    </Grid>
  );
};

export default TournamnetImage;
