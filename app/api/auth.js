import client from './client';

const REGISTER_ROUTE = 'users';
const LOGIN_ROUTE = 'auth';

const register = (name, email, password) => client.post(REGISTER_ROUTE, { name, email, password });

const login = (email, password) => client.post(LOGIN_ROUTE, { email, password });

export default {
    register,
    login,
}