const BASE_URL = 'http://tinyurl.com/';

const state = {
  urlToHash: {},
  hashToUrl: {},
};

const createRandomHash = (length = 6) => {
  let hash = '';
  for (let i = 0; i < length; i++) {
    // random (0, 25)
    const r = Math.floor(26 * Math.random());
    hash += String.fromCharCode(97 + r);
  }
  return hash;
};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  if (!state.urlToHash[longUrl]) {
    const hash = createRandomHash();
    state.urlToHash[longUrl] = hash;
    state.hashToUrl[hash] = longUrl;
  }
  return BASE_URL + state.urlToHash[longUrl];
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const hash = shortUrl.substring(BASE_URL.length);
  if (!state.hashToUrl[hash]) {
    return '';
  }
  return state.hashToUrl[hash];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
