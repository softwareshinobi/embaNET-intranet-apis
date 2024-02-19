
$(document).ready(function () {

	setInterval(visualizeProjectList,1000);
	
});

function visualizeProjectList() {

	console.debug("enter > visualizeProjectList");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/story/",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {

            injectProjectListData(data);           

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

}

function injectProjectListData(responseData) {

    var trHTML = '';

    for (var i = 0; i < responseData.length; i++) {

        trHTML += '<tr>';

//        trHTML += '<td>' + responseData[i].id + '</td>';

        trHTML += '<td class="col-1">' + '<img alt="Software Shinobi" class="table-avatar" src="../dist/img/avatar.png">' + '</td>';

        trHTML += '<td>' + responseData[i].name + '</td>';

        trHTML += '<td>' + responseData[i].description + '</td>';

        trHTML += '<td>' + responseData[i].intention + '</td>';

        trHTML += '<td>' + responseData[i].status + '</td>';

trHTML += '    <td class="project-actions text-left">';
trHTML += '    <a onclick="setProject(' + responseData[i].id  + ')" class="btn btn-primary btn-sm" href="kanban.html">';
trHTML += '    <i class="fas fa-folder">';
trHTML += '    </i>';
trHTML += '    View';
trHTML += '    </a>';
trHTML += '    </td>	';
		      
    }

    $('#project-list  > tbody').html(trHTML);   

}
