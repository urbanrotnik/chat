function encryptAES(msg, key){
  var encrypted = CryptoJS.AES.encrypt(msg, key);
  return encrypted.toString();
}

function decryptAES(msg, key){
  var decrypt = CryptoJS.AES.decrypt(msg, key);
  return decrypt.toString(CryptoJS.enc.Utf8);
}
