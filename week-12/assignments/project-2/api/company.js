const companies = require("../data/companies");

const getAll = ({id, name, city, country, } = {}) =>
	new Promise((resolve) => {
		let result = Array.from(companies);
		if (id) {
			result = result.filter((obj) => obj.id === id);
		}
		if (name) {
			result = result.filter((obj) => obj.name.toLowerCase().includes(name));
		}
		if (city) {
			result = result.filter((obj) => obj.city === city);
		}
		if (country) {
			result = result.filter((obj) => obj.country === country);
		}
        if (email) {
			result = result.filter((obj) => obj.email.toLowerCase().includes(email));
        }
        
		resolve({ code: 200, data: result });
	});

const getById = (id) =>
	new Promise((resolve) => {
		const company = companies.find((company) => company.id === id);

		if (company) {
			resolve({ code: 200, data: company });
		} else {
			resolve({
				code: 404,
				data: { message: `No found for id ${id}` },
			});
		}
	});

module.exports = {
	getAll,
	getById,
};