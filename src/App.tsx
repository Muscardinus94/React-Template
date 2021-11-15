import React, { useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation, Location } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Row, Container } from 'react-bootstrap';

import PrivateAuth from 'customRoute/privateAuth';
import GuestAuth from 'customRoute/guestAuth';
import paths from 'paths';
import SignIn from 'pages/SignIn';
import Portfolio from 'pages/Portfolio';
import PortfolioDetail from 'pages/PortfolioDetail';
import Marketplace from 'pages/Marketplace';
import NotFound from 'pages/NotFound';

import { checkPreviousPath } from 'customRoute/utils';
import { setAccessToken } from 'redux/user/user.actions';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = useCallback((loc: Location) => checkPreviousPath(loc), []);

  return (
    <Container>
      <Row xs={2} xl={4}>
        <Button
          onClick={() => {
            dispatch(setAccessToken('TOKEN'));
            navigate(from(location));
          }}
        >
          Set Access Token
        </Button>
        <Button onClick={() => dispatch(setAccessToken(''))}>Delete Access Token</Button>
        <Button onClick={() => navigate(paths.portfolio)}>to Portfolio</Button>
        <Button onClick={() => navigate(paths.portfolio + '/123')}>to PortfolioDetail</Button>
      </Row>
      <Routes>
        <Route
          path={paths.signIn}
          element={
            <GuestAuth>
              <SignIn />
            </GuestAuth>
          }
        />
        <Route path={paths.marketplace} element={<Marketplace />} />
        <Route
          path={paths.portfolio}
          element={
            <PrivateAuth>
              <Portfolio />
            </PrivateAuth>
          }
        />
        <Route
          path={paths.portfolioDetail}
          element={
            <PrivateAuth>
              <PortfolioDetail />
            </PrivateAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
