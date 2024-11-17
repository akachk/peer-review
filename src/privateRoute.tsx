import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  redirectPath?: string;
};

function PrivateRoute({ redirectPath = './auth' }: Props) {
  if (!sessionStorage.getItem('token')) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;
