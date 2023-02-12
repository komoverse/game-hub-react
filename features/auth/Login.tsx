import React from 'react'
import {
  Dialog,
  DialogContent,
  List,
  Tab,
  Tabs,
} from '@mui/material'
import { COLOR } from '@/utils/globalVariable'
import { TabPanelProps } from '@/types/general'
import { solana } from 'static';
import { Ethereum, Solana } from './ListWallets';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import actionModalAuth from '@/store/modalAuth/action'

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <List>
          {children}
        </List>
      )}
    </div>
  );
}

const MemoizedTabPanel = React.memo(TabPanel)

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Login = () => {
  const [value, setValue] = React.useState(0);
  const defaultVisible = useSelector((state: ReduxState) => state.modalAuth)

  const handleClose = () => actionModalAuth.setModalAuth({ visible: false });
  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  return (
    <Dialog
      sx={{
        '& .MuiDialog-container': {
          height: 'auto'
        },
        '& .MuiDialog-paper': {
          width: '443px',
          backgroundColor: 'rgb(0, 0, 0)',
          borderRadius: 3,
          border: '1px solid rgb(30, 30, 30)'
        },
      }}
      open={defaultVisible.visible}
      onClose={handleClose}
    >
      <DialogContent sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab sx={{ fontWeight: 500 }} label="SOLANA" {...a11yProps(0)} />
          <Tab sx={{ fontWeight: 500 }} label="ETHEREUM" {...a11yProps(1)} />
        </Tabs>
        <MemoizedTabPanel value={value} index={0}>
          {solana.map((wallet) => (
            <Solana wallet={wallet} key={wallet.id} />
          ))}
        </MemoizedTabPanel>
        <MemoizedTabPanel value={value} index={1}>
          <Ethereum />
        </MemoizedTabPanel>
      </DialogContent>
    </Dialog>
  )
}

export default Login
