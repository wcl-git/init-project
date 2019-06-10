export const getEnv = () => {
  const env = process.env.NODE_ENV;
  return env;
};

export const getCookie = (key) => {
  const getCookies = document.cookie.replace(/[ ]/g, '');
  const arrCookie = getCookies.split(';');
  let cookie;
  for (const o of arrCookie) {
    const arr = o.split('=');
    if (key === arr[0]) {
      cookie = arr[1];
      break;
    }
  }
  return cookie;
};
