import { Middleware } from 'redux';

// Logger Middleware
export const logger: Middleware = (store) => (next) => (action) => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

// Crash Reporter Middleware
export const crashReporter: Middleware = (store) => (next) => (action) => {
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception!', err);
        throw err; // rethrow to maintain standard Redux behavior and inform the user
    }
};