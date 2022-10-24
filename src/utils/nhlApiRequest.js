import axios from 'axios';

import { NHL_API_URL } from '@/constants';

const nhlApiRequest = axios.create({
  baseURL: NHL_API_URL.base,
  timeout: 1000,
});

export default nhlApiRequest;
