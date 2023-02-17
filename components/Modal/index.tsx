import React from 'react';
import {
  Breadcrumbs,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { COLOR } from '@/utils/globalVariable';
import actionNft from '@/store/detailNft/action'
// import actionTransaction from '@/store/historyTransaction/action'
import { NftDetails, BasicTable } from '@/components/index';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { MarketItemDto } from '@/types/detail';
import { ModalTProps } from '@/types/general';

const Modal = ({ open, setOpen }: ModalTProps) => {
  const data = useSelector((state: ReduxState) => state.detailNft as MarketItemDto)

  const handleClose = () => {
    setOpen(!open)
    actionNft.clearDetailNft()
    // actionTransaction.clearHistoryTransaction()
  };

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          width: '100%',
          maxWidth: 1300,
          backgroundColor: 'rgb(0, 0, 0)',
          borderRadius: 5,
        },
      }}
      maxWidth="xl"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Typography sx={{ fontSize: 14, color: COLOR.baseWhite }}>Komoverse</Typography>
          <Typography sx={{ fontSize: 14, color: COLOR.baseWhite }}>Item</Typography>
          <Typography sx={{ fontSize: 14, color: COLOR.baseWhite }}>{data.nft?.name}</Typography>
        </Breadcrumbs>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        <NftDetails />
        <BasicTable />
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(Modal);
