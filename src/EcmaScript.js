function EcmaScript(){
//1)
const students=["safa","yassine","ons"]
const find = (students) => {
  let newSt = students.map(
    (element) => {
      return{
        mot: element,
        taille: element.length,
      };
    });
return newSt.reduce((acc, cur) => {
  return acc.taille > cur.taille ? acc : cur;
});  
}
console.log(find(students));
//2)
const input = [
    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g"],
];

//  const tab = ["a", "a", "b", "b", "b", ["c", "b"]]; 
//  const tablFlat = tab.flat(); 
//  console.log(tablFlat); 
//  const counts = {}; 
//  for (const num of tablFlat) { 
//  counts[num] = counts[num] ? counts[num] + 1 : 1; 
//  } 
//  console.log(counts); 
//  console.log(counts["a"], counts["b"], counts["c"]);

const countArraysElements = (arraysInput) =>
    arraysInput.flat().reduce((accumulator, currentValue) => {
      if(accumulator[currentValue]){
        accumulator[currentValue] +=1;
      }else{
        accumulator[currentValue] =1;
      }
      return accumulator;
    }, {});
  console.log(countArraysElements(input));

//3)
let students1 = [
 {name: 'John', id:123, marks:98},
 {name: 'Baba', id:101, marks:23},
 {name: 'John', id:200, marks:45},
 {name: 'Wick', id:115, marks:75},
];
const sMap = students1.map((student) =>{
  if(student.marks <50){
    student.marks +=15
  }
  return student;
}
)
console.log(sMap);
const sFilter = sMap.filter(sMap1 => sMap1.marks>50)
console.log(sFilter);
const sReduce = sFilter.reduce((acc,student)=>
acc + student.marks , 0
)
console.log(sReduce);
}
export default EcmaScript;