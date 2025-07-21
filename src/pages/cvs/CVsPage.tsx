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

const cvs = [
  {
    title: 'Software Engineer with 5+ years of experience',
    education: 'Computer Systems Design',
    email: 'thorn_pear@icloud.com',
    description:
      'Highly motivated and experienced Software Engineer with 5+ years of proven success in leading and developing robust and scalable applications. Adept at leveraging React, Node.js, Three.js, and WebGL to create innovative and visually appealing user interfaces. Possesses strong leadership and mentoring skills, effectively guiding junior developers and fostering a collaborative team environment. Adept at architecting complex systems, ensuring efficient performance, and adhering to best practices. Passionate about delivering high-quality solutions and contributing to the success of dynamic projects.',
  },
  {
    title: 'Software Engineer with 5+ years of experience',
    education: 'Computer Systems Design',
    email: 'thorn_pear@icloud.com',
    description:
      'Highly motivated and experienced Software Engineer with 5+ years of proven success in designing and developing complex software solutions. Adept at utilizing cutting-edge technologies such as React and Node.js to create user-friendly and scalable applications. Possesses a strong understanding of Computer Systems Design principles and methodologies. A results-oriented individual with a passion for delivering high-quality work and exceeding expectations. A strong team leader and mentor with a proven ability to guide and motivate others to achieve shared goals. Seeking a challenging and rewarding Software Engineer position where I can leverage my skills and experience to contribute to the success of a dynamic and innovative organization.',
  },
];

const CVsPage = () => {
  return (
    <Box p={3} color='white'>
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
            {cvs.map((cv) => (
              <Fragment>
                {/* TODO: key={cv.id} */}
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none' }}>{cv.title}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>{cv.education}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>{cv.email}</TableCell>
                  <TableCell sx={{ textAlign: 'right', borderBottom: 'none', pt: 3 }}>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
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
