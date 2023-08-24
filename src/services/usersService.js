// Вынес функции которые в теории могут использовать много где,
// по хорошему тут они используются только в 1 месте и можно было оставить там

/**
 * Поиск ID пользователя по имени
 * @param {Array} users - Массив пользователей
 * @param {string} name - Имя пользователя
 * @returns {number|string} - ID пользователя или пустая строка
 */
export const findUserByName = (users, name) => {
  const user = users.find(user => user.name.includes(name));
  return user ? user.id : '';
};

/**
 * Поиск имени пользователя по ID
 * @param {Array} users - Массив пользователей
 * @param {number} userId - ID пользователя
 * @returns {string} - Имя пользователя или пустая строка
 */
export const findUserNameById = (users, userId) => {
  const user = users.find(user => user.id === userId);
  return user ? user.name : '';
};
