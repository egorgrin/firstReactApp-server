const generateRandomString = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

const generateUniqueId = () => {
  const timestamp = Date.now().toString(36);
  const randomString = generateRandomString(8);
  return timestamp + randomString;
};

export default generateUniqueId;

