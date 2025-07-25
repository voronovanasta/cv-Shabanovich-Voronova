import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import useUpdateCV from '../model/useUpdateCV';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type CVFormValues = {
  name: string;
  education: string;
  description: string;
};

const CVForm: React.FC = () => {
  let params = useParams();
  const updateMutation = useUpdateCV();
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CVFormValues>({
    defaultValues: {
      name: '',
      education: '',
      description: '',
    },
  });

  const onSubmit = (data: CVFormValues) => {
    updateMutation.mutate({
      cv: {
        cvId: params.cvId!,
        name: data.name,
        education: data.education,
        description: data.description,
      },
    });
    console.log('Submitted:', data);
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}
    >
      <Controller
        name='name'
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label={t('cv.name')}
            variant='outlined'
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{ mb: 2 }}
          />
        )}
      />

      <Controller
        name='education'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label={t('cv.education')}
            variant='outlined'
            sx={{ mb: 2 }}
          />
        )}
      />

      <Controller
        name='description'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            multiline
            rows={5}
            label={t('cv.description')}
            variant='outlined'
            sx={{ mb: 3 }}
          />
        )}
      />

      <Button
        type='submit'
        variant='contained'
        sx={{
          width: '50%',
          mx: 'auto',
          display: 'block',
          borderRadius: 10,
          py: 1.2,
          mb: 2,
        }}
      >
        {t('cv.update')}
      </Button>
    </Box>
  );
};

export default CVForm;
