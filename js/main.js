let student = [{
    rollno: 101,
    name: 'Rahul',
    stream: 'CSE',
    marks: 26,
}, {
    rollno: 102,
    name: 'Rohit',
    stream: 'CSE',
    marks: 35,
}, {
    rollno: 103,
    name: 'Manav',
    stream: 'CSE',
    marks: 76,
}, {
    rollno: 104,
    name: 'Mridul',
    stream: 'CSE',
    marks: 96,
}, {
    rollno: 105,
    name: 'Maanik',
    stream: 'CSE',
    marks: 56,
}, {
    rollno: 106,
    name: 'Mannat',
    stream: 'ECE',
    marks: 98,
}, {
    rollno: 107,
    name: 'Mandy',
    stream: 'ECE',
    marks: 28,
}, {
    rollno: 108,
    name: 'Kashish',
    stream: 'MECH',
    marks: 76,
}, {
    rollno: 109,
    name: 'Kannu',
    stream: 'MECH',
    marks: 45,
}, {
    rollno: 110,
    name: 'Himant',
    stream: 'ECE',
    marks: 75,
}, {
    rollno: 111,
    name: 'Simran',
    stream: 'CSE',
    marks: 98,
}];

let list = "";
let list1 = "";
let list2 = "";
let list3 = "";
$(document).ready(function() {

    list = "";
    list1 = "";
    list2 = "";
    list3 = "";
    $(".edit-part").hide();
    $(".add-part").hide();
    for (var i of student) {
        list = "<tr class=" + i.rollno + " ><td><input id=" + i.rollno + " type=\"checkbox\"></td><td class=" + i.rollno + " >" + i.rollno + "</td><hr>";
        list1 = "<td class=" + i.rollno + ">" + i.name + "</td><hr>";
        list2 = "<td class=" + i.rollno + " >" + i.stream + "</td><hr>";
        list3 = "<td class=" + i.rollno + " >" + i.marks + "</td><hr></tr>";
        $("#disptable").append(list + list1 + list2 + list3);
    }
});

let id;
let adddata = () => {
    
    $(".edit-part").hide();
    id = prompt("Enter rollno of student to be added");
    id = parseInt(id);
    if (document.getElementsByClassName(id)[0]) {
        alert("Roll no already exists");
    } else {
        $(".add-part").show();
    }
}

function adds() {
    $(".edit-part").hide();
    adddata();
};
let p1 = /[a-z A-Z]$/;
let p2 = /^[0-9]{2}$/;
let p3 = /^[a-z A-Z]{3}$/;


function addsdata() {
    let name1 = document.getElementsByClassName("add-part")[0].childNodes[4].childNodes[1].value;
    let stream1 = document.getElementsByClassName("add-part")[0].childNodes[6].childNodes[1].value;
    let marks1 = document.getElementsByClassName("add-part")[0].childNodes[8].childNodes[1].value;
    if (name1 == '' || stream1 == '' || marks1 == '')
        alert("Fill all the fields");
    else if (!p1.test(name1)) {
        alert("Give a valid name");
    } else if ((!p3.test(stream1))) {
        alert("Give a valid stream");
    } else if (!p2.test(marks1)) {
        alert("Give a valid number");
    } else {
        let a = student.length;
        console.log(name1);
        student.push({
            rollno: id,
            name: name1,
            stream: stream1,
            marks: marks1
        });
        const list11 = "<tr class=" + student[a].rollno + "><td><input id=" + student[a].rollno + " type=\"checkbox\"></td><td class=" + student[a].rollno + ">" + student[a].rollno + "</td>";
        const list12 = "<td class=" + student[a].rollno + ">" + student[a].name + "</td>";
        const list13 = "<td class=" + student[a].rollno + ">" + student[a].stream + "</td>";
        const list14 = "<td class=" + student[a].rollno + ">" + student[a].marks + "</td></tr>";
        $("#disptable").append(list11 + list12 + list13 + list14);
        $(".add-part").hide();
    }
}
let id1;
let editdetails = () => {
    $(".add-part").hide();
    for (var i of student) {
        if (document.getElementById(i.rollno).checked == 1) {
            document.getElementById("editroll").innerHTML = i.rollno;
            id1 = i.rollno;
            $(".edit-part").show();
            break;
        }
    }
}

function edits() {
    $(".add-part").hide();
    editdetails();
}

function editsdata() {
    id1 = parseInt(id1);
    let name1 = document.getElementsByClassName("edit-part")[0].childNodes[4].childNodes[1].value;
    let stream1 = document.getElementsByClassName("edit-part")[0].childNodes[6].childNodes[1].value;
    let marks1 = document.getElementsByClassName("edit-part")[0].childNodes[8].childNodes[1].value;
    if (name1 == '' || stream1 == '' || marks1 == '')
        alert("Fill all the fields");
    else if (!p1.test(name1)) {
        alert("Give a valid name");
    } else if (!p3.test(stream1)) {
        alert("Give a valid stream");
    } else if (!p2.test(marks1)) {
        alert("Give a valid number");
    } else {
        document.getElementsByClassName(id1)[2].innerHTML = name1;
        document.getElementsByClassName(id1)[3].innerHTML = stream1;
        document.getElementsByClassName(id1)[4].innerHTML = marks1;
        $(".edit-part").hide();
    }
}
let delete1 = () => {

    for (var i of student) {
        if (document.getElementById(i.rollno).checked == 1) {
            $("." + i.rollno).hide();
            document.getElementById(i.rollno).checked = 0;
        }
    }
}

function deletemultiple() {
    
    $(".add-part").hide();
    $(".edit-part").hide();
    delete1();
}
