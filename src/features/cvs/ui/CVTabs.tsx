import React from 'react';
import { Tabs, Tab } from '@mui/material';

interface CVTabsProps {
  tabs: string[];
  activeIndex: number;
  onTabChange: (index: number) => void;
}

const CVTabs: React.FC<CVTabsProps> = ({ tabs, activeIndex, onTabChange }) => {
  return (
    <Tabs
      value={activeIndex}
      onChange={(e, index) => onTabChange(index)}
      textColor='inherit'
      //   TabIndicatorProps={{ style: { backgroundColor: '#ef4444' } }}
    >
      {tabs.map((label, index) => (
        <Tab
          key={index}
          label={label}
          sx={{
            mr: 2,
          }}
        />
      ))}
    </Tabs>
  );
};

export default CVTabs;
