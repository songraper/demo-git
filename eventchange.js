$(document).ready(() => {

let students = [  //create data
    { name: 'Aaron', age: 19 },
    { name: 'Adam', age: 18 },
    { name: 'Anbert', age: 19 },
    { name: 'Thomas', age: 30 },
    { name: 'Max', age: 20 },
    { name: 'Demon', age: 35 },
    { name: 'Lucas', age: 100 },
    { name: 'Emma', age: 20 },
    { name: 'Elsa', age: 35 }
];

let table = document.getElementById('table-age'); 

let ageFilter = document.getElementById('age-filter');

ageFilter.addEventListener('change', () => {  // add event change. when ageFilter change then call function filterAge
    filterAge();
    
})



let filterAge = () => {
    
    let select = document.getElementById('age-filter'); 
    
    let valueSelect = parseInt(select.value); // get the value selected
    
    console.log(valueSelect);
        
    let studentsFilter = students.filter((student) => { // return an array 
        return student.age === valueSelect;
    })
    
    
    
    console.log(studentsFilter);
    
    render(studentsFilter); // render the new array
}


let render = (students) => {
    
    let content = students.map((student) => { //convert form array to html tag
        return '<tr><td>' + student.name + '</td><td>' + student.age + '</td></tr>'
    });
    
    table.innerHTML = content.join(''); // change the content in html element
    
    // console.log(content);
};

render(students);






})