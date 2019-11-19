export const env = process.env.NODE_ENV;
export const isBrowser = process.browser;
export const isServer = !isBrowser;
export const isProd = process.env.NODE_ENV === 'production';
export const isDev = process.env.NODE_ENV === 'development';
export const isTest = process.env.NODE_ENV === 'test';

