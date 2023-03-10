import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { ModalTProps } from 'types/general';
import { t } from 'i18next';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { COLOR } from '@/utils/globalVariable';

const Rules = ({ open, setOpen }: ModalTProps) => {
  const rules = [
    {
      id: 1,
      text: t('game.rules1'),
    },
    {
      id: 2,
      text: t('game.rules2'),
    },
    {
      id: 3,
      text: t('game.rules3'),
    },
    {
      id: 4,
      text: t('game.rules4'),
    },
    {
      id: 5,
      text: t('game.rules5'),
    },
    {
      id: 6,
      text: t('game.rules6'),
    },
    {
      id: 7,
      text: t('game.rules7'),
    },
  ];
  const handleClose = () => setOpen(!open);
  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          width: '600px',
          backgroundColor: 'rgb(0, 0, 0)',
          borderRadius: 2.7,
        },
      }}
      maxWidth="xl"
      open={open}
    >
      <DialogActions onClick={handleClose} sx={{ cursor: 'pointer' }}>
        <HighlightOffIcon sx={{ color: 'COLOR.baseLightTextGray' }} />
      </DialogActions>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 500 }}>
        {t('game.gameReviewRules')}
      </DialogTitle>
      <DialogContent sx={{ fontWeight: 400 }}>
        {t('game.rulesReviewDescription')}
        <br />
        <br />
        {rules.map((rule, idx) => (
          <DialogContentText key={idx} sx={{ color: COLOR.baseWhite }}>
            {rule.id}. {rule.text}
          </DialogContentText>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default Rules;
