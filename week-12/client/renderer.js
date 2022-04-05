const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, userTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  if (userTerm) {
    source = source.filter(({ username }) => username.toLowerCase().includes(userTerm));
  }

  const rows = source.reduce(
    (acc, { id, first_name, last_name, email, gender, ip_address, city, language, username, department }) =>
      acc +
      `<tr id="table-row-${id}">
      <td>${id}</td>
      <td>${first_name}</td>
      <td>${last_name}</td>
      <td>${email}</td>
      <td>${gender}</td>
      <td>${ip_address}</td>
      <td>${city}</td>
      <td>${language}</td>
      <td>${username}</td>
      <td>${department}</td>
      </tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

loadData(`./MOCK_DATA.json`).then((data) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.username.value;

  loadData(`./MOCK_DATA.json`).then((data) => renderTable(data, term));
};

const onReset = () => {
  loadData(`./MOCK_DATA.json`).then((data) => renderTable(data));
};