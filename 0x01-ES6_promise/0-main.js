import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
//logs to console
console.log(response instanceof Promise);
