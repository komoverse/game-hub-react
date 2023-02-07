import React from "react";
import { Box } from "@mui/material";
import { BoxCard, BoxContent, BoxImage, CardActionArea } from "./style";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), { ssr: false });

type CardImageProps = {
  image_url: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
  width?: string | number;
};

const CardImage = ({ image_url, onClick, children, width = 208.5 }: CardImageProps) => {
  return (
    <Box sx={{ height: 341, position: "relative" }}>
      <BoxCard onClick={onClick}>
        <Box sx={{ width: width }}>
          <CardActionArea>
            <BoxContent>
              <BoxImage />
              <Image
                alt="Komoverse"
                src={image_url}
                decoding="async"
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
                priority={true}
              />
            </BoxContent>
            {children}
          </CardActionArea>
        </Box>
      </BoxCard>
    </Box>
  );
};

export default React.memo(CardImage);
