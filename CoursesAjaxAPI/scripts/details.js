"use strict"

window.onload = init;
function init() {
    const urlParams = new URLSearchParams(location.search);
    let id = -1;
    if (urlParams.has("courseid") === true) {
        id = urlParams.get("courseid")

        fetch('http://localhost:8081/api/courses/' + id)
            .then(response => response.json())
            .then(course => {
                let tbody = document.getElementById("tbody");
            
                let tr = document.createElement("tr");
                tbody.appendChild(tr);

                let tdDept = document.createElement("td");
                tdDept.innerHTML = course.dept
                let tdNum = document.createElement("td");
                tdNum.innerHTML = course.courseNum
                let tdName = document.createElement("td");
                tdName.innerHTML = course.courseName 
                let tdInstructor = document.createElement("td");
                tdInstructor.innerHTML = course.instructor
                let tdDate = document.createElement("td");
                tdDate.innerHTML = course.startDate
                let tdDays = document.createElement("td");
                tdDays.innerHTML = course.numDays
                
                tr.appendChild(tdDept);
                tr.appendChild(tdNum);
                tr.appendChild(tdName);
                tr.appendChild(tdInstructor);
                tr.appendChild(tdDate);
                tr.appendChild(tdDays);
                

            })
    }



}


