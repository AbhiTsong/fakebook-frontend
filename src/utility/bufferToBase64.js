/**
 function creadit goes to 
 https://coolaj86.com/articles/typedarray-buffer-to-base64-in-javascript/
 *
 */

function bufferToBase64(buf) {
  var binstr = Array.prototype.map
    .call(buf, function (ch) {
      return String.fromCharCode(ch);
    })
    .join("");
  return btoa(binstr);
}

export { bufferToBase64 };
