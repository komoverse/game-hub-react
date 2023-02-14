import Grid from "@mui/material/Grid";

import { ImageStyled, TournamentContentWrapper, VideoStyled } from "../styles";
import { regexImageFileValidation } from "@/utils/regex";

const TournamnetImage = ({ bannerUrl }: { bannerUrl: string }) => {
  const isContentImage = (url: string) => {
    return regexImageFileValidation.test(url);
  };
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
          <VideoStyled
            src={bannerUrl}
            autoPlay
            loop
            playsInline
            muted
          />
        )}
      </TournamentContentWrapper>
    </Grid>
  );
};

export default TournamnetImage;
