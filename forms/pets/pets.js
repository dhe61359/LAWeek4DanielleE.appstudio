const petNames = ["Darcy", "Jack", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
 
function withSal(arr) {
  arr.push('Sal');
}
 
withSal(petNames);
 
console.log(`The third pet is named ${petNames[2]}`)

console.log(petNames.length)

petNames.pop()

console.log(petNames)