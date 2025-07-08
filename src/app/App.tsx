//import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/config';
import { QueryProvider } from './providers/QueryProvider';

const App = () => (
  <QueryProvider>
    <RouterProvider router={router} />
    {/* // TODO <Suspense fallback={<div>Загрузка...</div>}></Suspense> */}
  </QueryProvider>
);

export default App;
