import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from '../store/reducers';

// import { createStore, applyMiddleware} from 'redux';
import { logger, crashReporter} from '../store/middleware';

// const middlewareEnhancer = applyMiddleware(logger, crashReporter)

// const store = createStore(rootReducer, middlewareEnhancer)

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, crashReporter),
});

export default store;