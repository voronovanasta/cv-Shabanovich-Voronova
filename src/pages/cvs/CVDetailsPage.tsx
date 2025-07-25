import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CVTabs from '../../features/cvs/ui/CVTabs';
import CVUpdateForm from '../../features/cvs/ui/CVUpdateForm';
import { useTranslation } from 'react-i18next';

const CVsDetailsPage = () => {
  const { t } = useTranslation();
  const tabLabels = [t('cv.details'), t('cv.skills'), t('cv.projects'), t('cv.preview')];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ minHeight: '100vh', p: 4, color: 'white' }}>
      <Typography variant='body2' color='gray' mb={2}>
        CVs &gt;{' '}
        <Typography component='span' color='white'>
          Software Engineer With 5+ Years Of Experience
        </Typography>
      </Typography>

      <CVTabs tabs={tabLabels} activeIndex={activeTab} onTabChange={setActiveTab} />

      <CVUpdateForm />
    </Box>
  );
};

export default CVsDetailsPage;
