var bio = {
	"name": "Chris Altamiran",
	"role": "ATO Development Coach",
	"contact": {
		"mobile": "559-867-5309",
		"email": "ca2759@att.com",
		"github": "caltamiran",
		"twitter": "@ChrisAltamiran",
		"location": "Visalia, California"
		
	},
	"biopic": "images/Coach.png",
	"welcomeMessage": "I'm currently working as a ATO Development Coach for AT&T in Visalia, California. I enjoy helping others "+
			  "and developing leaders of the business. I develop Field Managers that are responsible for the technicians,",
	"skills": ["Python", "Java", "HTML" ,"MS Office"]
};
var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "ATO Development Coach",
			"location": "Visalia, California",
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
			"location": "Visalia, California",
			"dates": "November 2011 - February 2013",
			"description": "I was hired to coach and develop Premise Technicians, that installs video and internet services. "+
				"Motivated direct reports to achieve business goals year after year. Removing roadblocks and providing a positive environment "+
				"for others to learn. Collaborated with other business units in the area, in order for both units to achieve goals. "

		},
		{
			"employer": "AT&T",
			"title": "Splicing Technician",
			"location": "Sacramento, California",
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
			"location": "Hanford, California",
			"degree": "Diploma",
		 	"majors": ["Agriculture"],
		 	"minors": ["General Education"]
					}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Intorduction into Programming",
			"dates": "October 2017",
			"url": "https://www.udacity.com/",
		 	//"location": "Mountain View, California"
		},

		]
};

var projects = {
	"projects": [
		{
			"title": "MAS Workflow",
			"dates": "December 2016 - February 2017",
			"description": "Created an excel workbook that allows Managers to hold one on one discussions " +
			"with technicians that pulls previous and current month results",
			"images": ["images/MAS.PNG"],
			"url": "#" //(Commenting out due to files being on secured company site)
		},
		{
			"title": "You Docs ",
			"dates": "November 2015",
			"description": "Created an excel work book that tracks and displays managers daily activities ",
			"images": ["images/YouDocs.PNG"],
			"url": "#" //(Commenting out due to files being on secured company site)
		},
		{
			"title": "Web Page Creation",
			"dates": "September 2017",
			"description": "Created webpage for Udacity intro into programming.",
			"images": ["images/Website.JPG"],
			"url": "#" //(Commenting out due to files being on secured company site)
			//commenting out due to files being on local hard drive
		}
	]
};

/*var data = '%data%';
var formattedName = HTMLheaderName.replace(data, bio.name);
var formattedRole = HTMLheaderRole.replace(data, bio.role);
var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace(data, bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace(data, bio.contacts.email));
formattedContactInfo.push(HTMLmobile.replace(data, bio.contacts.mobile));
formattedContactInfo.push(HTMLgithub.replace(data, bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace(data, bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace(data, bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
*/
bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
/* 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill); */
	}
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
}

bio.display();

work.display=function(){
//function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i=0;i<work.jobs.length;i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		
		/*work.jobs.forEach(function(job){

			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", job.dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
		*/
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle, formattedWorkLocation,formattedDatesWorked,formattedWorkDescription);
			//$(".work-entry:last").append(formattedEmployerWorkTitle);
			//$(".work-entry:last").append(formattedWorkLocation);
			//$(".work-entry:last").append(formattedDatesWorked);
			//$(".work-entry:last").append(formattedWorkDescription);

		}
	}

}

work.display();


projects.display = function() {
	if(projects.projects.length > 0) {
		//projects.projects.forEach(function(project){

		for(i=0;i<projects.projects.length;i++) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle,formattedProjectDates,formattedProjectDescription);

			//$(".project-entry:last").append(formattedProjectTitle);
			//$(".project-entry:last").append(formattedProjectDates);
			//$(".project-entry:last").append(formattedProjectDescription);
			if (projects.projects[i].images.length>0){
			for(x=0;x< projects.projects[i].images.length;x++) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			}

		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		//education.schools.forEach(function(school){
if (education.schools.length > 0 ){
		for(i=0;i< education.schools.length;i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minors);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree,formattedSchoolDates,formattedSchoolLocation,formattedSchoolMajor,formattedSchoolMinor);
			//$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			//$(".education-entry:last").append(formattedSchoolDates);
			//$(".education-entry:last").append(formattedSchoolLocation);
			//$(".education-entry:last").append(formattedSchoolMajor);
			//$(".education-entry:last").append(formattedSchoolMinor);
		}
}
		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for( i=0;i<education.onlineCourses.length;i++) {
			//education.onlineCourses.foreach(function(onlineCourses){	
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				//$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool,formattedOnlineDates,formattedOnlineURL);	
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


$("#mapDiv").append(googleMap);
