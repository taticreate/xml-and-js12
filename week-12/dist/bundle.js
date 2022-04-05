(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    
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

    
      let langdrop = document.getElementById('langdrop');
      langdrop.innerHTML=""
    
    
    
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
    
    },{}]},{},[1]);
