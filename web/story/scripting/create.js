
$(document).ready(function () {

	clearForm();

});

function clearForm(){

    $("#name").val("");

    $("#description").val("");

    $("#intention").val("");

    loadStatusSelection();

    loadAvailableProjects();

}

function loadStatusSelection() {

	console.debug("enter > loadStatusSelection");	

    var trHTML = '';

    trHTML += '<option value="backlog">Backlog</option><option value="todo">To Do</option><option value="inprogress">In Progress</option><option value="done">Done</option>';

    $('#status').html(trHTML);   

}

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

function processForm() {

	console.debug("enter > processForm");	

    userStoryName = $("#name").val();

	projectPayload = JSON.stringify({

        project: $("#selectProject").val(), 

		name: $("#name").val(),

		description: $("#description").val(),

		intention:  $("#intention").val(),

		status:  $("#status").val(),

	});

	console.debug("projectPayload / ", projectPayload);

	$.ajax({

		type: "PUT",

		url: apiURLBase + "/story/",

		data: projectPayload,

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

			clearForm();

            notifySaveSuccess(userStoryName);

		},

		error: function (jqXHR, status) {

			console.log("error during request /",jqXHR);

            notifySaveFailure(userStoryName);

		}

	});

}

function notifySaveSuccess(userStoryName) {

    toastr.success(

        'User Story Created',

        'The user story "'+ userStoryName +'" was created.',

        {timeOut: 5000});

}

function notifySaveFailure(projectPayload) {

    toastr.error(

        'User Story Creation Failure',

        'The user story "'+ userStoryName +'" WAS NOT created.',

        {timeOut: 5000}

    );   

}
