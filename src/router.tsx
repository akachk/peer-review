import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import App from './App';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route element={<PrivateRoute />}></Route>

        <Route path="*" element={<div>404 | Page is not found !</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
