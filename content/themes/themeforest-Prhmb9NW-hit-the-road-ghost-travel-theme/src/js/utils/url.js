// eslint-disable-next-line import/prefer-default-export
export function getQueryStringParam(field, url) {
  const href = url || window.location.href;
  const reg = new RegExp(`[?&]${field}=([^&#]*)`, 'i');
  const string = reg.exec(href);
  return string ? decodeURIComponent(string[1].replace(/\+/g, ' ')) : null;
}
