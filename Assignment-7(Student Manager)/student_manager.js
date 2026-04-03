// Array of student objects
let students = [
    {
        name: "Harshitha",
        marks: [85, 90, 78]
    },
    {
        name: "Priya",
        marks: [92, 88, 95]
    },
    {
        name: "Rakshith",
        marks: [70, 75, 80]
    }
];

students.forEach(student => {
    let total = 0;
    for (let i = 0; i < student.marks.length; i++) {
        total += student.marks[i];
    }

    //average
    let average = total / student.marks.length;
    console.log("Student:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average Marks:", average);
    console.log("----------------------");

});