$(function () {
    if(localStorage.getItem("students")== null)
        {
            localStorage.setItem("students",JSON.stringify([]));
        }
    
    showRegisteredStudents();
    
    dialog = $("#dialog").dialog({
        autoOpen:false,
        height : 500,
        width : 500,
        modal : true
    });
     
    $(".regstu").click(function(){
        dialog.dialog("open");
    });
    
    $("#dob").datepicker({
        changeYear: true,
        changeMonth: true,
        maxDate: "0d"
    });
    $(".submit").click(function () {

        var isValid = $("#regform").validate({
            rules: {
                usn: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,

                },
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                course: {
                    required: true
                },
                percentage: {
                    required: true,
                    min: 50,
                    max: 100

                },
                dob: {
                    required: true
                }


            },
            messages: {
                usn: {
                    required: "USN can't be empty",
                    minlength: "USN must have 10 characters",
                    maxlength: "USN must not exceed 10 characters"
                },
                name: {
                    required: "Name can't be empty",
                    minlength: "name must have atleast two characters"

                },
                email: {
                    required: "Email id can't be empty"
                },
                mobile: {
                    required: "Moblie no cant' be empty",
                    minlength: "Moblie no should contain atleast ten numbers",
                    maxlength: "Moblie no should not exceed ten numbers"
                },
                course: {
                    required: "Course field should not be empty "
                },
                percentage: {
                    required: "Percentage field should not be empty",
                    min: "not eligible",
                    max: "eligible"
                },
                dob: {
                    required: "Dob cannot be empty"
                }
            },

        }).form();



        if (isValid) {
            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var percentage = $("#percentage").val();
            var dob = $("#dob").val();
            var course = $("#course").val();
            $(".reset").click();


            student = {
                "usn": usn,
                "name": name,
                "email": email,
                "mobile": mobile,
                "percentage": percentage,
                "dob": dob,
                "course":course,
            }
            var students = getDataFromLocalStorage();
            students.push(student);
            updateLocalStorageData(students);
            showRegisteredStudents();
            dialog.dialog("close");
            return false;
        }
    });
    function showRegisteredStudents(){
        var students =getDataFromLocalStorage();
        var data ="";
        if(students.length == 0){
            data ="<h3>No students registred yet....";
        }
        else{
            data += "<table id ='regstudents'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>usn</th>";
             data += "<th>name</th>";
             data += "<th>email</th>";
             data  +="<th>mobile</th>";
             data  +="<th>course</th>";
             data  +="<th>percentage</th>";
             data  +="<th>dob</th>";
            data += "</tr></thead>";
             
            for(var i=0;i<students.length;i++)
                {
                    var j=i+1;
                    data += "<tr>";
                    data += "<td>"+j+"</td>";
                    data += "<td>"+students[i].usn+"</td>";
                    data += "<td>"+students[i].name+"</td>";
                    data += "<td>"+students[i].email+"</td>";
                    data += "<td>"+students[i].mobile+"</td>";
                    data += "<td>"+students[i].course+"</td>";
                    data += "<td>"+students[i].percentage+"</td>";
                    data += "<td>"+students[i].dob+"</td>";
                    data += "</tr>";
                    
                }
            data += "</table>";
        }
        $("#content").html(data);
        $("#regstudents").dataTable({
            "pageLength":2
        });
    }
         
        function getDataFromLocalStorage(){
            var students = JSON.parse(localStorage.getItem("students"));
            return students;
        }
        function updateLocalStorageData(updatedStudentsArr){
      localStorage.setItem("students",JSON.stringify(updatedStudentsArr));
        }
});
