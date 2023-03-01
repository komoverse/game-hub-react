import CardImage from '@/components/CardImage';
import Image from 'next/image';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { dateFromNow } from '@/helper/date';
import { ButtonCard, COLOR, KomoverseTag } from '@/utils/globalVariable';
import { shortenTitleGame } from '@/utils/shorten';
import Solana from 'public/solana-logo.png';

const GameItem = ({
  imageUrl,
  name,
  price,
  createdDate,
  currency,
  onClickMarketItem,
  itemId,
}: {
  imageUrl: string;
  name: string;
  price: number;
  createdDate: string;
  currency: string;
  onClickMarketItem: (args: string) => void;
  itemId: string;
}) => {
  return (
    <CardImage
      width="100%"
      image_url={imageUrl}
      onClick={() => onClickMarketItem(itemId)}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 4,
          textAlign: 'center',
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
      <ButtonCard>
        <Image src={Solana} width={15} height={15} alt={KomoverseTag} />
        <Typography variant="subtitle2" sx={{ fontWeight: 700, marginLeft: 1 }}>
          {`${currency} ${price}`}
        </Typography>
      </ButtonCard>
    </CardImage>
  );
};

export default GameItem;
