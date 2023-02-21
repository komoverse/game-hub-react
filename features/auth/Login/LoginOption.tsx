import React from 'react';
import { List, Tab, Tabs } from '@mui/material';
import { TabPanelProps } from '@/types/general';
import KomoWallets from './KomoWallets';

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
      {value === index && <List>{children}</List>}
    </div>
  );
};

const MemoizedTabPanel = React.memo(TabPanel);

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const LoginOption = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab sx={{ fontWeight: 500 }} label="SOLANA" {...a11yProps(0)} />
        {/* <Tab sx={{ fontWeight: 500 }} label="ETHEREUM" {...a11yProps(1)} /> */}
      </Tabs>
      <MemoizedTabPanel value={value} index={0}>
        <KomoWallets />
      </MemoizedTabPanel>
      {/* <MemoizedTabPanel value={value} index={1}>
          <Ethereum />
        </MemoizedTabPanel> */}
    </>
  );
};

export default LoginOption;
