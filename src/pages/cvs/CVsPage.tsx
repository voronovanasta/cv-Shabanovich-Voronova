import { Fragment } from 'react/jsx-runtime';
import {
  Box,
  Typography,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useCVs from '../../features/cvc/model/getCvs';

const CVsPage = () => {
  const { data } = useCVs();
  return (
    <Box color='white'>
      <Typography variant='h6' mb={2}>
        CVs
      </Typography>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#2d2d2d',
            px: 2,
            borderRadius: '8px',
            height: 36,
            width: 300,
          }}
        >
          <SearchIcon sx={{ color: 'gray', mr: 1 }} />
          <InputBase placeholder='Search' sx={{ color: 'white', width: '100%' }} />
        </Box>

        <Button
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
            CREATE CV
          </Typography>
        </Button>
      </Box>
      <Paper sx={{ backgroundColor: 'transparent' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Education</TableCell>
              <TableCell>Employee</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.cvs.map((cv) => (
              <Fragment key={cv.id}>
                {/* TODO: Right CVs type with email etc */}
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none' }}>{cv.experience}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>{cv.education}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>{cv.userId}</TableCell>
                  <TableCell sx={{ textAlign: 'right', borderBottom: 'none', pt: 3 }}>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4} sx={{ pt: 0 }}>
                    <Typography variant='body2' sx={{ color: 'gray' }}>
                      {cv.summary}
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
