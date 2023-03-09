import React from 'react';
import {
  Box,
  Breadcrumbs,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { COLOR } from '@/utils/globalVariable';
import actionNft from '@/store/detailNft/action';
import actionPagination from '@/store/pagination/action';
import { NftDetails, BasicTable } from '@/components/index';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { MarketItemDto } from '@/types/detail';
import { ModalTProps } from '@/types/general';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Modal = ({ open, setOpen }: ModalTProps) => {
  const data = useSelector(
    (state: ReduxState) => state.detailNft as MarketItemDto
  );

  const handleClose = () => {
    setOpen(!open);
    actionNft.clearDetailNft();
    actionPagination.clearPagination();
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
    >
      <DialogTitle sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Typography sx={{ fontSize: 14, color: COLOR.baseWhite }}>
              Komoverse
            </Typography>
            <Typography sx={{ fontSize: 14, color: COLOR.baseWhite }}>
              Item
            </Typography>
            <Typography sx={{ fontSize: 14, color: COLOR.baseWhite }}>
              {data.nft?.name}
            </Typography>
          </Breadcrumbs>
          <IconButton onClick={handleClose}>
            <HighlightOffIcon sx={{ color: 'COLOR.baseLightTextGray' }} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        <NftDetails />
        <BasicTable />
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(Modal);
