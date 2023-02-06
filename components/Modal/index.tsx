import React from 'react'
import { Breadcrumbs, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { COLOR } from '@/utils/globalVariable';
import actionNtt from '@/store/detailNft/action'
// import actionTransaction from '@/store/historyTransaction/action'
import { NftDetails, BasicTable } from '@/components/index';

type ModalTProps = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ open, setOpen }: ModalTProps) => {
  const handleClose = () => {
    setOpen(!open)
    actionNtt.clearDetailNft()
    // actionTransaction.clearHistoryTransaction()
  }

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
          <Typography sx={{ fontSize: 14, color: COLOR.baseWhite }}>heheh</Typography>
        </Breadcrumbs>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        <NftDetails />
        <BasicTable />
      </DialogContent>
    </Dialog>
  )
}

export default React.memo(Modal)