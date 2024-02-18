
$(document).ready(function () {

	clearForm();

});

function loadAvailableProjects() {

	console.debug("enter > loadAvailableProjects");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/project/",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (responseData, status, jqXHR) {

            var trHTML = '';

            for (var i = 0; i < responseData.length; i++) {

                trHTML += '<option>' + responseData[i].name + '</option>';

            }

            $('#selectProject').html(trHTML);   

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

}

function clearForm(){

    $("#name").val("");

    $("#description").val("");

    $("#client").val("");

    $("#intention").val("");

    loadAvailableProjects();

}

function processForm() {

	console.debug("enter > processForm");	

    userStoryName = $("#name").val();

	projectPayload = JSON.stringify({

        project: $("#selectProject").val(), 

		name: $("#name").val(),

		description: $("#description").val(),

		client:  $("#client").val(),

		intention:  $("#intention").val(),

	});

	console.debug("//projectPayload / ", projectPayload);

	$.ajax({

		type: "PUT",

		url: apiURLBase + "/story/",

		data: projectPayload,

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

			clearForm();

            notifySuccess(userStoryName);

		},

		error: function (jqXHR, status) {

			console.log("error during request /",jqXHR);

            notifyFailure(userStoryName);

		}

	});

}

function notifySuccess(userStoryName) {

    // alert("project created!");

    console.log("userStoryName / " + userStoryName);

    toastr.success(

        'User Story Created',

        'The user story "'+ userStoryName +'" was created.',

        {timeOut: 5000});

}

function notifyFailure(projectPayload) {

    // alert("error creating project.");

    console.log("userStoryName / " + userStoryName);

    toastr.error(

        'User Story Creation Failure',

        'The user story "'+ userStoryName +'" WAS NOT created.',

        {timeOut: 5000}

    );   

}
