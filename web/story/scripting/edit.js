$(document).ready(function () {

	clearForm();

    loadStoryDetails();

});

function loadStoryDetails() {

	console.debug("enter > loadStoryDetails");	

    var storyID = editStoryID();

	console.debug("    storyID / " + storyID);

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/story/" + storyID,

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (story, status, jqXHR) {

            toastr.info(

                'Edit User Story',

                'You are editing story "'+ story.intention + '"',

                {timeOut: 8000});

        	console.debug("    story / " + story);

            $("#id").val(story.id);

            $("#intention").val(story.intention);

            $("#description").val(story.description);

            $("#selectProject").val(story.project).change();

            $("#status").val(story.status).change();

		},

		error: function (exception, status) {


			console.log("error / " + exception);

		}

	});

}

function loadForm(story){

    $("#name").val("");

    $("#description").val("");

    $("#intention").val("");

    loadStatusSelection();

    loadAvailableProjects();

}

function processEditForm() {

	console.debug("enter > processEditForm");	

    userStoryName = $("#intention").val();

	projectPayload = JSON.stringify({

        id: $("#id").val(), 

        project: $("#selectProject").val(), 

		intention:  $("#intention").val(),

		description: $("#description").val(),

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
