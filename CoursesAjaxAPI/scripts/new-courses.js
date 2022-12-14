"use strict";
const dept = document.getElementById("dept");
const courseNum = document.getElementById("courseNum");
const courseName = document.getElementById("courseName");
const instructor = document.getElementById("instructor");
const startDate = document.getElementById("startDate");
const numDays = document.getElementById("numDays");
const addBtn = document.getElementById("addBtn");

window.onload = init;

function init() {

    addBtn.onclick = addBtnOnClick;
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
        method: "POST",
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
        window.location.href = 'index.html'
}