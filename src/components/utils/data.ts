export const DEPLOY_API_LINK = 'https://mock-server-api-production.up.railway.app/';
export const LOCAL_API_LINK = 'http://localhost:3000/';
export const API_CATALOG = 'catalog';
export const API_LINK = DEPLOY_API_LINK;
export const ALBUMS_PER_PAGE = 8;

export const defaultDeliveryDate = new Date().toISOString().slice(0, 10);
export const maxDate = new Date(
  new Date().getFullYear() + 1,
  new Date().getMonth(),
  new Date().getDate()
);
