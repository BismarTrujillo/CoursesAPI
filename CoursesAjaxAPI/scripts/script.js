"use strict";


window.onload = init;
function init() {    
courses();
}

function courses(){
    fetch('http://localhost:8081/api/courses')
        .then(response => response.json())
        .then(courses => {
            for (let j in courses){
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