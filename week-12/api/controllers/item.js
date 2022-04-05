const items = require("../data/items");

const getAll = ({ id, first_name, last_name, email, gender, ip_address, city, language, username, department }) =>
  new Promise((resolve) => {
    let result = Array.from(items);

    if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (first_name) {
      result = result.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
      result = result.filter((item) => item.last_name === last_name);
    }

    if (email) {
      result = result.filter((item) => item.email === email);
    }

    if (gender) {
        result = result.filter((item) => item.gender === gender);
      }

    if (ip_address) {
    result = result.filter((item) => item.ip_address === Number(ip_address));
    }

    if (city) {
    result = result.filter((item) => item.city === city);
    }

    if (language) {
    result = result.filter((item) => item.language === language);
    }

    if (username) {
    result = result.filter((item) => item.username === username);
    }

    if (department) {
        result = result.filter((item) => item.department === department);
    }
    resolve({ code: 200, data: JSON.stringify(result) });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const item = items.find((item) => item.id === id);

    if (item) {
      resolve({ code: 200, data: JSON.stringify(item) });
    } else {
      resolve({
        code: 404,
        data: { message: `No item found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};