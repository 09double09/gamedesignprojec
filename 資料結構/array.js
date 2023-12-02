/** @format */

/** @format */
let data;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((results) => {
    data = results;
    console.log(data);
  });
