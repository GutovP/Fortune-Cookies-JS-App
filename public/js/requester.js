function request(url, type, options, headers) {
  const promise = new Promise((resolve, reject) =>
    $.ajax({
      url,
      type,
      headers,
      options,
      success: resolve,
      error: reject,
    })
  );

  return promise;
}

function get(url) {
  return request(url, 'GET', {}, headers);
}
function post(url) {
  return request(url, 'POST', {}, headers);
}
function put(url) {
  return request(url, 'PUT', {}, headers);
}

const requester = {
  get,
  post,
  put,
};

export { requester };
