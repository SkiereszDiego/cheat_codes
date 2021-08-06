const str = "O gato late";

//Instead this...
// const newStr = str.replace(/gato/g, "cachorro");

//Do this...
const newStr = str.replaceAll("gato", "cachorro");

console.log(str, newStr)