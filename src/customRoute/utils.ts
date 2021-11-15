import { Location } from 'react-router-dom';

import paths from 'paths';

export const checkPreviousPath = (location: Location) => {
  const path = location.state?.from?.pathname;
  if (path) return path;
  return paths.marketplace;
};
