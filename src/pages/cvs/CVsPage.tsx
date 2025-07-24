import { Fragment } from 'react/jsx-runtime';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchBar from '../../shared/ui/searchbar/SearchBar';
import useGetCVsList from '../../features/cvs/model/useGetCVsByUserList';
import { useState } from 'react';
import CreateCvModal from '../../shared/ui/modal/CreateCVModal';
import useCreateCV from '../../features/cvs/model/useCreateCV';
import type ICreateCVFormData from '../../shared/ui/modal/types';
import CvMenu from '../../shared/ui/cvdropdown/CVDropdown';
import DeleteCvDialog from '../../shared/ui/modal/DeleteCVModal';
import useDeleteCV from '../../features/cvs/model/useDeleteCV';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../features/auth/model/store/useAuthStore';

const CVsPage = () => {
  const { data } = useGetCVsList();
  const [openCreateCV, setOpenCreateCV] = useState(false);
  const [openDeleteCV, setOpenDeleteCV] = useState(false);
  const [cvId, setCVId] = useState('');
  const [deleteCVTitle, setDeleteCVTitle] = useState('');
  const createCVMutation = useCreateCV();
  const deleteCVMutation = useDeleteCV();
  const userId = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleCreateCv = (data: ICreateCVFormData) => {
    console.log('CV submitted:', data);
    createCVMutation.mutate({
      cv: {
        name: data.name,
        education: data.education,
        description: data.summary,
        userId: userId?.id ?? undefined,
      },
    });
  };
  const onDelete = (id: string, title: string) => {
    setDeleteCVTitle(title);
    setCVId(id);
    setOpenDeleteCV(true);
  };
  const onDetails = () => {
    navigate(`/cvs/${cvId}`);
  };
  return (
    <Box color='white'>
      <Typography variant='h6' mb={2}>
        {t('cv.cvs')}
      </Typography>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
        <SearchBar />
        <CreateCvModal
          open={openCreateCV}
          onClose={() => setOpenCreateCV(false)}
          onSubmitCv={handleCreateCv}
        />
        <DeleteCvDialog
          open={openDeleteCV}
          onClose={() => setOpenDeleteCV(false)}
          onConfirm={() => {
            deleteCVMutation.mutate({
              cv: {
                cvId: cvId,
              },
            });
            console.log('CV Deleted');
            setOpenDeleteCV(false);
          }}
          cvTitle={deleteCVTitle}
        />
        <Button
          onClick={() => setOpenCreateCV(true)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            color: '#f44336',
          }}
        >
          <AddIcon fontSize='small' />
          <Typography
            variant='body2'
            sx={{
              color: '#f44336',
            }}
          >
            {t('create')} {t('cv.cv')}
          </Typography>
        </Button>
      </Box>
      <Paper sx={{ backgroundColor: 'transparent' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('cv.name')}</TableCell>
              <TableCell>{t('cv.education')}</TableCell>
              <TableCell>{t('cv.employee')}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.cvs.map((cv) => (
              <Fragment key={cv.id}>
                {/* TODO: Right CVs type with name, email etc */}
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none' }}>{cv.name}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>{cv.education}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>{cv.id}</TableCell>
                  <TableCell sx={{ textAlign: 'right', borderBottom: 'none', pt: 3 }}>
                    <CvMenu onDetails={onDetails} onDelete={() => onDelete(cv.id, cv.name)} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4} sx={{ pt: 0 }}>
                    <Typography variant='body2' sx={{ color: 'gray' }}>
                      {cv.description}
                    </Typography>
                  </TableCell>
                </TableRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default CVsPage;
