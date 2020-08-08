/* eslint-disable max-len */
const cryptoJS = require('crypto-js');

/**
 * Encrypts an object using the AES algorithm.
 *
 * @param {Object} input a JavaScript object
 * @param {String} KEY the encryption key
 */
export const encryptObject = (input, KEY) =>
  cryptoJS.AES.encrypt(JSON.stringify(input), KEY).toString();

/**
 * Decrypts an object using the AES algorithm.
 *
 * @param {String} cipherText the cipherText to be decrypted
 * @param {String} KEY the decryption key
 */
export const decryptObject = (cipherText, KEY) => {
  const decryptedData = cryptoJS.AES.decrypt(cipherText, KEY).toString(
    cryptoJS.enc.Utf8,
  );
  return JSON.parse(decryptedData);
};
