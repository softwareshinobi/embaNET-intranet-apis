
$(document).ready(function () {

    fetchCurrentProjects();

	setInterval(fetchCurrentProjects,1000 * 8);
	
});

function fetchCurrentProjects() {

	console.debug("enter > fetchCurrentProjects");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/project/",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {

			console.log("good");

            exportCurrentProjects(data);

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

}

function exportCurrentProjects(responseData) {

	console.debug("enter > exportCurrentProjects");	

	console.debug("responseData / " + responseData);

    var trHTML = '';

    for (var i = 0; i < responseData.length; i++) {

        console.debug("responseData / " + responseData[i]);

        trHTML += '<tr>';

//        trHTML += '<td>' + responseData[i].id + '</td>';

        trHTML += '<td class="col-1">' + '<img alt="Software Shinobi" class="table-avatar" src="../dist/img/avatar.png">' + '</td>';

        trHTML += '<td>' + responseData[i].name + '</td>';

        trHTML += '<td>' + responseData[i].description + '</td>';

        trHTML += '<td>' + responseData[i].intention + '</td>';

trHTML += ' <td class="project_progress">';

trHTML += ' <div class="progress progress-sm">';

trHTML += ' <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">';
trHTML += '    </div>';
trHTML += '    </div>';
trHTML += '    <small>';
trHTML += '    60% Complete';
trHTML += '    </small>';
trHTML += '    </td>';

trHTML += '    <td class="project-actions text-left">';
trHTML += '    <a onclick="setProject(' + responseData[i].id  + ')" class="btn btn-primary btn-sm" href="kanban.html">';
trHTML += '    <i class="fas fa-folder">';
trHTML += '    </i>';
trHTML += '    View';
trHTML += '    </a>';
trHTML += '    </td>	';
		      
    }

    console.log("trHTML / " + trHTML);

    $('#projectList > tbody').html(trHTML);   

}
