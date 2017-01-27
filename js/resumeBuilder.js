var bio = {
	"name": "Alex Barbosa Garcia",
	"role" : "Web Developer",
	"skills" : ["images/html5-icon-5.png", "images/css3-icon-3.png", "images/javascript-icon.png", "images/jquery-icon.png", "images/bootstrap-icon.png"],
	"contacts" : {
		"mobile" : "954-907-4998",
		"email" : "CaptABarbosa@Gmail.com",
		"github" : "CaptBarbosa",
		"twitter" : "OnlyNeed9",
		"location" : "Miami, FL"
	},
	"welcomeMessage" : "Welcome to my Resume...",
	"bioPic" : "images/fry.jpg"
};

var education = {
	"schools": [
		{
			"school": "Florida International University",
			"location": "Miami, FL",
			"degree": "Bachelors",
			"majors": "Computer Science",
			"dates": "2012 - 2016",
			"url": "www.FIU.edu"
		}
	],
	"onlineCourses": [
		{
			"program": "Front-End Web Development",
			"school": "Udacity",
			"dates": "2016 - 2017",
			"url": "www.Udacity.com"
		},
		{
			"program": "HTML & CSS",
			"school": "Codecademy",
			"dates": "Feb - August 2016",
			"url": "www.Codecademy.com"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Elevate Management",
			"title": "Project Manager",
			"dates": "August 2015 - August 2016",
			"description": "Sample Description Here",
		},
		{
			"employer": "CyberHive",
			"title": "Web Developer",
			"dates": "January 2016 - Present",
			"description": "Sample Description Here"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2017",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"images": [
				"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjRtMj3itnRAhWTdSYKHd8gCeEQjRwIBw&url=http%3A%2F%2Fhearstcommerce.ca%2Fm%2Flisting%2Fview%2Fpremium&psig=AFQjCNHlcGsUOyFZqugL-NbjcBckvhA9_g&ust=1485289022460412",
				"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj5kK6Ei9nRAhXCQCYKHUuhAN4QjRwIBw&url=http%3A%2F%2Fwww.techinsights.com%2Fteardown.com%2Fteardown-sample-reports%2F&psig=AFQjCNHlcGsUOyFZqugL-NbjcBckvhA9_g&ust=1485289022460412"
			]
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
};

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function inName(name) {
	name=name.trim().split(" ");
	console.log(name);
	name[2] = name[2].toUpperCase();
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1] +" "+name[2];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].school);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);

	}
};

education.display();

online.display = function () {
	for (online in education.onlineCourses) {
		$("#online").append(HTMLonlineClassesStart);	

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].program);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".online-entry:last").append(formattedOnlineTitleSchool);

		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		$(".online-entry:last").append(formattedOnlineDate);

		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		$(".online-entry:last").append(formattedUrl);
	}

};

online.display();

