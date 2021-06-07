//GLOBALS - no window !!!!

// will always have access on these variables from anywhere in the proegram

//__dirname  - path to current directory
//__filename - file name
// require   - func to use modules
// module    - info about current module
// process   - info about env where program is being executed

console.log(__dirname);

console.log(__filename);

setInterval(() => {
  console.log('hello world');
}, 1000);
