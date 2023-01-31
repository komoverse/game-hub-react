import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Iconify from "@/components/Iconify";
import { getGameDetails } from "@/services/games";
import { COLOR } from "@/utils/globalVariable";
import { Box, Button, Typography } from "@mui/material";
import { regexImageFileValidation } from "@/utils/regex";
import GameTabs from "./GameTabs";
import {
  GradientOverlay,
  ImageStyled,
  SliderActionWrapper,
  VideoStyled,
} from "./styles";
import ModalVideo from "react-modal-video";
import GameSocialMedia from "./GameSocialMedia";

export const PopupVidio = ({
  videoId,
  isOpen,
  setOpen,
}: {
  videoId: string;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <ModalVideo
    channel="youtube"
    isOpen={isOpen}
    videoId={videoId}
    onClose={() => setOpen(false)}
  />
);

const MemoizedPopup = React.memo(PopupVidio);

const HeroBanner = () => {
  const router = useRouter();
  const { game } = router.query;
  const {
    data: gameDetails,
    isError,
    isLoading,
  } = useQuery(["getGameDetails", game], () => getGameDetails(game as string));

  const [isOpenTrailer, setIsOpenTrailer] = useState(false);
  const watchTrailer = () => setIsOpenTrailer(!isOpenTrailer);

  if (isLoading) {
    return <Box sx={{ height: "65%", position: "relative" }}>...loading</Box>;
  }

  if (isError) {
    return (
      <Box sx={{ height: "65%", position: "relative" }}>
        something went wrong
      </Box>
    );
  }
  const isContentImage = (url: string) => {
    return regexImageFileValidation.test(url);
  };

  const renderBanner = () => {
    return isContentImage(gameDetails.hero_banner_url) ? (
      <ImageStyled
        src={gameDetails.hero_banner_url}
        alt=""
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      />
    ) : (
      <VideoStyled
        src={gameDetails.hero_banner_url}
        autoPlay
        loop
        playsInline
        muted
      />
    );
  };

  const idYT = gameDetails?.trailer_url?.split("=")[1];

  return (
    <>
      <Box sx={{ height: "65%", position: "relative" }}>
        {renderBanner()}
        <GradientOverlay />
        <SliderActionWrapper>
          <Box
            sx={{
              px: "8px",
            }}
          >
            <GameSocialMedia gameDetails={gameDetails} />
            <Typography
              variant="h2"
              fontWeight={700}
              sx={{
                maxWidth: "400px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
              }}
            >
              {gameDetails.game_name}
            </Typography>
            <Box sx={{ my: "16px", display: "flex", gap: "18px" }}>
              {gameDetails?.trailer_url && (
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={
                    <Iconify
                      icon="material-symbols:play-arrow-rounded"
                      height={30}
                      width={30}
                    />
                  }
                  onClick={watchTrailer}
                  sx={{
                    color: COLOR.baseGreen,
                    fontWeight: "500",
                    borderRadius: 2,
                    borderColor: COLOR.baseGreen,
                  }}
                >
                  WATCH TRAILER
                </Button>
              )}
              {gameDetails.tabsEnabled.includes("play-now") && (
                <Button
                  variant="contained"
                  size="small"
                  startIcon={
                    <Iconify
                      icon="ic:outline-sports-esports"
                      height={30}
                      width={30}
                    />
                  }
                  sx={{
                    color: "#fff",
                    fontWeight: "500",
                    borderRadius: 2,
                    background:
                      "radial-gradient(292.31% 1418.72% at -18.64% -62.88%, #99EC13 0%, #088F2E 63.54%, #054D19 100%)",
                  }}
                >
                  PLAY NOW
                </Button>
              )}
            </Box>
            <Typography
              variant="body1"
              fontWeight={300}
              sx={{
                maxWidth: "700px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
              }}
            >
              by <b>{gameDetails.developer_name}</b>
            </Typography>
            <Typography
              variant="body1"
              fontWeight={300}
              sx={{
                maxWidth: "400px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                mt: 2,
              }}
            >
              {gameDetails.description}
              gameplay.
            </Typography>
          </Box>
        </SliderActionWrapper>
      </Box>
      <GameTabs tabs={gameDetails.tabsEnabled} />
      <MemoizedPopup
        videoId={idYT}
        isOpen={isOpenTrailer}
        setOpen={setIsOpenTrailer}
      />
    </>
  );
};

export default HeroBanner;
