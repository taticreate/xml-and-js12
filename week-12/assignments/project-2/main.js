const { getAll } = require("./api/company.js");

const renderTable = (data, nameTerm) => {
	const tableBody = document.getElementById("data-table");

	if (!tableBody) {
		throw new Error("No table element found");
	}

	let source = data;

	if (nameTerm) {
		source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
	}

	const rows = source.reduce(
		(acc, { id, name, city, country, email }) =>
			acc +
			`<tr id="table-row-${id}">
            <td>${id}</td>
            <td>${name}</td>
            <td>${city}</td>
            <td>${country}</td>
            <td>${email}</td>
            </tr>`,
		``
	);

	tableBody.innerHTML = rows;
};


getAll().then(({ data }) =>  {
  renderTable(data)
});

window.onSubmit = (event) => {
	event.preventDefault();

	const id = event.target.id.value;
	const name = event.target.name.value;
	const city = event.target.city.value;
	const country= event.target.country.value;
    const email= event.target.email.value;

	getAll({ id, name, city, country, email }).then(({ data }) =>
		renderTable(data)
	);
};

window.onReset = () => {
	getAll().then(({ data }) => renderTable(data));
};