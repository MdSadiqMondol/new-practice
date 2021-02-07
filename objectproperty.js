// const student = [
//     {id: 21, name: 'rrg'},
//     {id: 22, name: 'hrg'},
//     {id: 25, name: 'srg'},
//     {id: 23, name: 'jrg'}
// ];
// // const studentsName = [];

// // for (let i = 0; i < student.length; i++) {
// //     const element = student[i].name;
// //     studentsName.push(element)
// // }
// // const sname = student.map(s => s.name)

// const ssid = student.map(s => s.id)
// const big = student.find(s => s.id>20)
// // console.log(studentsName)
// // console.log(sname)
// console.log(ssid)
// console.log(big)



const richList = [
    {taka: 100, name: 'moddlo'},
    {taka: 150, name: 'boddlo'},
    {taka: 200, name: 'coddlo'}

]

const takaList = richList.map(x => x.taka);
const bigger = richList.filter( x => x.taka>120);

console.log(takaList)
console.log(bigger)
