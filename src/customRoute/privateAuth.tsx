import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import paths from 'paths';
import { RootReducerInterface } from 'redux/it';

const PrivateAuth = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { accessToken } = useSelector((state: RootReducerInterface) => state.user);
  const location = useLocation();

  if (!accessToken) return <Navigate to={paths.signIn} state={{ from: location }} />;
  return children;
};

export default PrivateAuth;
