const BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const BASE64URL_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

module.exports = function(opts) {
  const {
    prefix = '',
    length = 8,
    character_set = 'base64'
  } = opts || {};

  let charset = pickCharset(character_set);

  let id = prefix;
  for(let i = 0; i < length; i++) {
    id = id + randomCharacter(charset)
  }

  return id
}

function pickCharset(character_set) {
  switch (character_set) {
    case 'base64':
      return BASE64_CHARS;
      break;
    case 'base64url':
      return BASE64URL_CHARS;
      break;
    default:
  }
}

function randomCharacter(charset) {
  return charset[Math.floor(Math.random() * charset.length)]
}
