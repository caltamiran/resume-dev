var bio = {
	"name": "Chris Altamiran",
	"role": "ATO Development Coach",
	"contacts": {
		"email": "ca2759@att.com",
		"github": "caltamiran",
		"twitter": "@ChrisAltamiran",
		"location": "Visalia, California, USA"
		
	},
	"biopic": "images/Coach.png",
	"welcomeMessage": "I'm currently working as a ATO Development Coach for AT&T in Visalia, California. I enjoy helping others "+
			  "and developing leaders of the business. I develop Field Managers that are responsible for the technicians,",
	"skills": ["Python", "Java", "HTML"]
};
var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "ATO Development Coach",
			"location": "Visalia, California, USA",
			"dates": "February 2013 - in progress",
			"description": "Coach and develop Field Managers into succesfull leaders of the business."+
				"Track and chart trends with company metrics and targets set for the day, month and year. "+
				"Quickly anaylizing data and providing feedback to the Field Managers to drive individual teams,"+
				"collaborated closely with the business leaders and developing performance plans and goals. "+
				"Develop or modify exisiting Methods and Procedures to ensure constant development.  "

		},
		{
			"employer": "AT&T",
			"title": "Network Field Manager",
			"location": "Visalia, California, USA",
			"dates": "November 2011 - February 2013",
			"description": "I was hired to coach and develop Premise Technicians, that installs video and internet services. "+
				"Motivated direct reports to achieve business goals year after year. Removing roadblocks and providing a positive environment "+
				"for others to learn. Collaborated with other business units in the area, in order for both units to achieve goals. "

		},
		{
			"employer": "AT&T",
			"title": "Splicing Technician",
			"location": "Sacramento, California, USA",
			"dates": "August 1998 - November 2011",
			"description": "My primary responsibilities involve restoral of customer phone, data or cellular lines. " +
				"Knowledge of POTS, DSL, ADSL, Centax, HDSL, T1, and VDSL services offered by company. " +
				"Expert with trouble shootig with industry tools, lead trainer for all new hires. " +
				"Perform managerial duties as senior technician for when manager was off. "

		},
		]
};

var education = {
	"schools": [
		{ "name": "Hanford High School",
			"dates": "1993 - 1997",
			"location": "Hanford, California, USA",
			"degree": "Diploma",
		 	"major": "Agriculture",
		 	"minor": "General Education"
					}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Intorduction into Programming",
			"completed": "October 2017",
			"url": "https://www.udacity.com/",
		 	"location": "Mountain View, California, USA"
		},

		]
};

var projects = {
	"projects": [
		{
			"title": "MAS Workflow",
			"datesWorked": "December 2016 - February 2017",
			"description": "Created an excel workbook that allows Managers to hold one on one discussions " +
			"with technicians that pulls previous and current month results",
			"images": ["images/MAS.PNG"],
			"url": "#" //(Commenting out due to files being on secured company site)
		},
		{
			"title": "You Docs ",
			"datesWorked": "November 2015",
			"description": "Created an excel work book that tracks and displays managers daily activities ",
			"images": ["images/YouDocs.PNG"],
			"url": "#" //(Commenting out due to files being on secured company site)
		},
		{
			"title": "Web Page Creation",
			"datesWorked": "September 2017",
			"description": "Created webpage for Udacity intro into programming.",
			"images": ["images/Website.JPG"],
			"url": "#" //(Commenting out due to files being on secured company site)
			//commenting out due to files being on local hard drive
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

bio.display=function(){
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(var i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(var i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}
};
bio.display();
work.display=function(){
//function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(var i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

};

work.display();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(var img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(var i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
};

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Excel',
				color: 'rgba(255, 0, 0, .5)',
				data: [[2017, 10], [2016, 12]]
			},
			{
				name: 'Javascript',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2017, 2]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2017, 6]]
			},
			{
				name: 'Web Development',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2017, 6]]
			},
			
			{
				name: 'python',
				color: 'rgba(119, 152, 191, .5)',
				data: [[2017, 6]]
			
			}]
	});
});


//$("#mapDiv").append(googleMap);
