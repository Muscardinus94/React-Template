import { createStore, applyMiddleware, Middleware, Dispatch, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from 'redux/root-reducer';
import rootSaga from 'redux/root-saga';

type MiddleWareTypes =
  | SagaMiddleware<Record<string, unknown>>
  | Middleware<Record<string, never>, unknown, Dispatch<AnyAction>>;

const sagaMiddleware = createSagaMiddleware();
const middlewares: MiddleWareTypes[] = [sagaMiddleware];
const composeEnhancers = composeWithDevTools({ trace: true });

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
persistStore(store);
sagaMiddleware.run(rootSaga);
