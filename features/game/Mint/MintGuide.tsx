import { KomoverseTag } from '@/utils/globalVariable';
import { Dialog } from '@mui/material';
import Image from 'next/image';

const MintGuide = ({ open, setOpen, mintUrl }: any) => {
  const handleClose = () => setOpen(!open);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <Image
        src={mintUrl}
        width={100}
        height={100}
        alt={KomoverseTag}
        decoding="async"
        style={{
          height: 'auto',
          width: '100%',
          visibility: 'visible',
          borderRadius: 10,
        }}
        sizes="100vw"
        loading="lazy"
      />
    </Dialog>
  );
};

export default MintGuide;
