import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

export default function AuthTabLayout() {
  const [tab, setTab] = useState(0);
  return (
    <Tabs
      value={tab}
      onChange={(_, newValue) => setTab(newValue)}
      textColor='secondary'
      indicatorColor='secondary'
      centered
      sx={{
        color: '#fff',
        mb: 3,
        '& .MuiTabs-indicator': { backgroundColor: '#d32f2f' },
        '& .Mui-selected': { color: '#d32f2f' },
      }}
    >
      <Tab label='LOG IN' />
      <Tab label='SIGN UP' />
    </Tabs>
  );
}
