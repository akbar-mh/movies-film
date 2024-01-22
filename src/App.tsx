import { FC, ReactNode } from 'react';
import { mainRoutes, adminRoutes } from './routes/routes';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './routes/theme';
import './i18n';
import Layout from './layout/Layout';

interface LayoutProps {
  children: ReactNode;
}

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            {mainRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            ))}
            {adminRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            ))}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
