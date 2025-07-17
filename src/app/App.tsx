//import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/config';
import { QueryProvider } from './providers/QueryProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import '../shared/styles/variables.css';

const App = () => (
  <QueryProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    {/* // TODO <Suspense fallback={<div>Загрузка...</div>}></Suspense> */}
  </QueryProvider>
);

export default App;
