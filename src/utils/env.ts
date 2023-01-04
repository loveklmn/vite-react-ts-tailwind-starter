export const isPRD = import.meta.env.env === 'PRD';
export const env = isPRD ? 'prd' : 'dev';
export const BASE_PREFIX = isPRD
  ? import.meta.env.VITE_API_PRD_BASEURL
  : import.meta.env.VITE_API_DEV_BASEURL;
