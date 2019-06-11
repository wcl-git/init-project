import shepAjax from 'utils/shepAjax';

// 登录
export const loginInfo = param => shepAjax('/login', param, { method: 'POST' }, true);
