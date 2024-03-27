import { createRouter, useBase } from 'h3';

const router = createRouter();

export default useBase('/api', router.handler);