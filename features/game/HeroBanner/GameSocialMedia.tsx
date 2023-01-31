import { Box, Link } from "@mui/material";
import { ImageStyled } from "./styles";
import Iconify from "@/components/Iconify";
import { socialMediaPlatform } from "./constants";

const GameSocialMedia = ({ gameDetails }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: { xs: "120px", md: "164px" },
        gap: "24px",
      }}
    >
      <ImageStyled
        src={gameDetails.logo_image_url}
        sx={{
          height: "100%",
          width: { xs: "120px", md: "164px" },
          borderRadius: "20px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          alignItems: "flex-end",
          alignContent: "flex-end",
          flexWrap: "wrap",
          maxWidth: "164px",
        }}
      >
        {Object.keys(gameDetails).map((keyItem: string, i) => {
          if (
            socialMediaPlatform[keyItem] !== undefined &&
            gameDetails[keyItem] !== null
          ) {
            console.log(
              "🚀",
              socialMediaPlatform[keyItem],
              gameDetails[keyItem]
            );
            return (
              <Link
                href={gameDetails[keyItem]}
                target="_blank"
                key={i}
                sx={{ cursor: "pointer", color: "#fff" }}
              >
                <Iconify
                  icon={socialMediaPlatform[keyItem].icon}
                  height={24}
                  width={24}
                />
              </Link>
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default GameSocialMedia;
