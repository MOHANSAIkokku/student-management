const API_URL = "http://localhost:5000/api/students";


// Get students
async function getStudents() {

    try {

        const response = await fetch(API_URL);

        const students = await response.json();

        displayStudents(students);

    } catch (error) {

        console.error(error);

    }

}


// Add student
async function addStudent() {

    const name =
        document.getElementById("name").value.trim();

    const course =
        document.getElementById("course").value.trim();


    if (!name || !course) {

        alert("Please enter all details");

        return;

    }


    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                name: name,

                course: course

            })

        });


        const data = await response.json();


        alert(data.message);


        document.getElementById("name").value = "";

        document.getElementById("course").value = "";


        getStudents();

    } catch (error) {

        console.error(error);

        alert("Backend connection failed");

    }

}


// Display students
function displayStudents(students) {

    const studentList =
        document.getElementById("studentList");


    studentList.innerHTML = "";


    students.forEach(student => {

        const div =
            document.createElement("div");


        div.className = "student";


        div.innerHTML = `

            <strong>${student.name}</strong>

            <br>

            Course: ${student.course}

        `;


        studentList.appendChild(div);

    });

}


// Load students
getStudents();