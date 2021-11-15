import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootReducerInterface } from '../redux/it';
import paths from 'paths';

const GuestAuth = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { accessToken } = useSelector((state: RootReducerInterface) => state.user);

  if (accessToken) return <Navigate to={paths.marketplace} />;
  return children;
};

export default GuestAuth;
