function initUI() {
	$workEntryForm = $("[rel*=js-work-entry-form");
	$workEntrySelectProject = $workEntryForm.find("[rel*=js-select-project]");
	$workEntryDescription = $workEntryForm.find("[rel*=js-work-description]");
	$workEntryTime = $workEntryForm.find("[rel*=js-work-time]");
	$workEntrySubmit = $workEntryForm.find("[rel*=js-submit-work-entry]");
	$totalTime = $("[rel*=js-total-work-time]");
	$projectList = $("[rel*=js-project-list]");

	{ let handleClick;
		handleClick = function submitNewWorkEntry(){
			var projectId = $workEntrySelectProject.val();
			var description = $workEntryDescription.val();
			var minutes = $workEntryTime.val();

			if (!validateWorkEntry(description,minutes)) {
				alert("Oops, bad entry. Try again.");
				$workEntryDescription[0].focus();
				return;
			}

			$workEntryDescription.val("");
			$workEntryTime.val("");
			addWorkToProject(Number(projectId),description,Number(minutes));
			$workEntryDescription[0].focus();
		};

		$workEntrySubmit.on("click",handleClick);
	}
}

function validateWorkEntry(description,minutes) {
	if (description.length < minWorkDescriptionLength) return false;
	if (
		/^\s*$/.test(minutes) ||
		Number.isNaN(Number(minutes)) ||
		minutes < 0 ||
		minutes > maxWorkTime
	) {
		return false;
	}

	return true;
}

function addProject(description) {
	var projectEntryData;

	{ let projectId;
		projectId = Math.round(Math.random()*1E4);
		projectEntryData = { id: projectId, description: description, work: [], time: 0 };
	}
	projects.push(projectEntryData);

	addProjectToList(projectEntryData);
	addProjectSelection(projectEntryData);
}

function addProjectToList(projectEntryData) {
	var $project = $(projectTemplate);
	$project.attr("data-project-id",projectEntryData.id);
	$project.find("[rel*=js-project-description]").text(projectEntryData.description);
	$projectList.append($project);

	projectEntryData.$element = $project;
}

function addProjectSelection(projectEntryData) {
	var $option = $("<option></option>");
	$option.attr("value",projectEntryData.id);
	$option.text(projectEntryData.description);
	$workEntrySelectProject.append($option);
}

function findProjectEntry(projectId) {
	for (let i = 0; i < projects.length; i++) {
		if (projects[i].id === projectId) {
			return projects[i];
		}
	}
}

function addWorkToProject(projectId,description,minutes) {
	projects.time = (projects.time || 0) + minutes;

	var projectEntryData = findProjectEntry(projectId);
	projectEntryData.time = (projectEntryData.time || 0) + minutes;

	// create a new work entry for the list
	var workEntryData = { id: projectEntryData.work.length + 1, description: description, time: minutes };
	projectEntryData.work.push(workEntryData);

	// multiple work entries now?
	if (projectEntryData.work.length > 1) {
		// sort work entries in descending order of time spent
		projectEntryData.work = projectEntryData.work.slice().sort(function sortTimeDescending(a,b){
			return b.time - a.time;
		});
	}

	addWorkEntryToList(projectEntryData,workEntryData);
	updateProjectTotalTime(projectEntryData);
	updateWorkLogTotalTime();
}

function addWorkEntryToList(projectEntryData,workEntryData) {
	var $projectEntry = projectEntryData.$element;
	var $projectWorkEntries = $projectEntry.find("[rel*=js-work-entries]");

	// create a new DOM element for the work entry
	var $workEntry = $(workEntryTemplate);
	$workEntry.attr("data-work-entry-id",workEntryData.id);
	$workEntry.find("[rel*=js-work-time]").text(formatTime(workEntryData.time));
	$workEntry.find("[rel*=js-work-description]").text(formatWorkDescription(workEntryData.description));

	workEntryData.$element = $workEntry;

	// multiple work entries now?
	if (projectEntryData.work.length > 1) {
		{ let entryIdx;
			// find where the entry sits in the new sorted list
			for (let i = 0; i < projectEntryData.work.length; i++) {
				if (projectEntryData.work[i] === workEntryData) {
					entryIdx = i;
					break;
				}
			}

			// insert the entry into the correct location in DOM
			if (entryIdx < (projectEntryData.work.length - 1)) {
				projectEntryData.work[entryIdx + 1].$element.before($workEntry);
			}
			else {
				projectEntryData.work[entryIdx - 1].$element.after($workEntry);
			}
		}
	}
	// otherwise, just the first entry
	else {
		$projectEntry.addClass("visible");
		$projectWorkEntries.append($workEntry);
	}
}

function updateProjectTotalTime(projectEntryData) {
	var $projectEntry = projectEntryData.$element;
	$projectEntry.find("> [rel*=js-work-time]").text(formatTime(projectEntryData.time)).show();
}

function updateWorkLogTotalTime() {
	if (projects.time > 0) {
		$totalTime.text(formatTime(projects.time)).show();
	}
	else {
		$totalTime.text("").hide();
	}
}

function formatWorkDescription(description) {
	if (description.length > maxVisibleWorkDescriptionLength) {
		description = `${description.substr(0,maxVisibleWorkDescriptionLength)}...`;
	}
	return description;
}

function formatTime(time) {
	var hours = Math.floor(time / 60);
	var minutes = time % 60;
	if (hours == 0 && minutes == 0) return "";
	if (minutes < 10) minutes = `0${minutes}`;
	return `${hours}:${minutes}`;
}


// **************************

const projectTemplate = "<div class='project-entry'><h3 class='project-description' rel='js-project-description'></h3><ul class='work-entries' rel='js-work-entries'></ul><span class='work-time' rel='js-work-time'></span></div>";
const workEntryTemplate = "<li class='work-entry'><span class='work-time' rel='js-work-time'></span><span class='work-description' rel='js-work-description'></span></li>";
const maxVisibleWorkDescriptionLength = 20;
const minWorkDescriptionLength = 5;
const maxWorkTime = 600;

var projects = [];

var $workEntryForm;
var $workEntrySelectProject;
var $workEntryDescription;
var $workEntryTime;
var $workEntrySubmit;
var $totalTime;
var $projectList;

initUI();

// hard coding some initial data
addProject("client features");
addProject("overhead");
addProject("backlog");
