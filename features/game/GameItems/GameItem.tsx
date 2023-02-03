import CardImage from "@/components/CardImage";
import Image from "next/image";
import { dateFromNow } from "@/helper/date";
import { COLOR, KomoverseTag } from "@/utils/globalVariable";
import { shortenTitleGame } from "@/utils/shorten";
import { CardContent, Typography } from "@mui/material";
import Solana from "public/solana.svg";
import { Button } from "@/features/home/event/style";

const GameItem = ({
  imageUrl,
  name,
  price,
  createdDate,
  currency,
}: {
  imageUrl: string;
  name: string;
  price: number;
  createdDate: string;
  currency: string;
}) => {
  return (
    <CardImage image_url={imageUrl}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 400 }}>
          {shortenTitleGame(name)}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 400, color: COLOR.baseGreen }}
        >
          {dateFromNow(createdDate)}
        </Typography>
      </CardContent>
      <Button>
        <Image src={Solana} width={15} height={15} alt={KomoverseTag} />
        <Typography variant="subtitle2" sx={{ fontWeight: 700, marginLeft: 1 }}>
          {`${currency} ${price}`}
        </Typography>
      </Button>
    </CardImage>
  );
};

export default GameItem;
