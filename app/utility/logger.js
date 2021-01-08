import Bugsnag from '@bugsnag/expo';

const log = (error) => Bugsnag.notify(error);

const start = () => Bugsnag.start();

const exists = () => Bugsnag._client ? true : false;

export default { 
    log, 
    start,
    exists
 };