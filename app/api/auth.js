import client from './client';

const AUTH_ROUTE = 'auth';

const login = (email, password) => client.post(AUTH_ROUTE, { email, password });

export default {
    login,
}