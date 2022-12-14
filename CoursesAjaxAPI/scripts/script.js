"use strict";
const dept = document.getElementById("dept");
const courseNum = document.getElementById("courseNum");
const courseName = document.getElementById("courseName");
const instructor = document.getElementById("instructor");
const startDate = document.getElementById("startDate");
const numDays = document.getElementById("numDays");
const addCourseBtn = document.getElementById("addCourseBtn");



window.onload = init;
function init() {
    courses();
    addCourseBtn.onclick = addCourseBtnOnClick;

}

function courses() {

    fetch('http://localhost:8081/api/courses')
        .then(response => response.json())
        .then(courses => {
            for (let j in courses) {
                let tbody = document.getElementById("tbody");


                let tr = document.createElement("tr");
                tbody.appendChild(tr);

                let tdDept = document.createElement("td");
                tdDept.innerHTML = courses[j].dept
                let tdNum = document.createElement("td");
                tdNum.innerHTML = courses[j].courseNum
                let tdName = document.createElement("td");
                tdName.innerHTML = courses[j].courseName
                let anchor = document.createElement("a");
                anchor.href = `http://127.0.0.1:5500/CoursesAjaxAPI/details.html?courseid=${courses[j].id}`;
                anchor.text = "See details";

                tr.appendChild(tdDept);
                tr.appendChild(tdNum);
                tr.appendChild(tdName);
                tr.appendChild(anchor);



            }
        })
}
function addCourseBtnOnClick() {
    window.location.href = 'new-courses.html'
}
function addBtnOnClick() {
    let bodyData = {

        dept: dept.value,
        courseName: courseName.value,
        courseNum: courseNum.value,
        instructor: instructor.value,
        startDate: startDate.value,
        numDays: numDays.value

    }
    fetch("http://localhost:8081/api/courses", {
        method: "PUT",
        body: JSON.stringify(bodyData),
        headers: {
            "Content-type":
                "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            messageBody.innerHTML = "Student updated";
        })
        .catch(err => {
            messageBody.innerHTML = "Unexpected error";
        })
}