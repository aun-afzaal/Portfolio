<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Project',
				singleProjectDate: 'Jul 26, 2021',
				singleProjectTag: 'UI / Frontend',
			},
			projectImages: [
				{
					id: 1,
					img: require('@/assets/images/raap-builder.jpeg'),
				},
				{
					id: 2,
					img: require('@/assets/images/invoicely.jpg'),
				},
				{
					id: 3,
					img: require('@/assets/images/twitterExt.jpeg'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'AccellionX',
					},
					{
						id: 2,
						title: 'Services',
						details: 'UI Design & Frontend/Backend Development',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://accellionx.com',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:"I am a passionate web developer who creates stunning and highly functional web applications. With a strong foundation in modern technologies, I transform ideas into captivating digital experiences.My expertise includes developing dynamic user interfaces with React, ensuring seamless functionality with efficient backend solutions, and crafting responsive designs with Tailwind CSS. I am dedicated to delivering web apps that are visually appealing, performant, and user-friendly.By staying up-to-date with industry trends, I ensure my projects are future-proof and leverage the latest features. From concept to deployment, I work closely with clients to bring their vision to life through meticulous planning and agile development.Let’s create something amazing together!",
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Vue.js',
							'TailwindCSS',
							'Nodejs',
							'Express.js'
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
				{
					id: 1,
					details: "Ensuring responsiveness: Making sure the web application looks and functions well on a variety of devices and screen sizes."
				},
				{
					id: 2,
					details: "Frontend performance optimization: Reducing load times and improving the speed and responsiveness of the user interface."
				},
				{
					id: 3,
					details: "Backend integration: Ensuring seamless communication between the frontend and backend, including handling APIs, databases, and server-side logic."
				},
				{
					id: 4,
					details: "Cross-browser compatibility: Making sure the application works consistently across different web browsers and versions."
				},
				{
					id: 5,
					details: "Security: Implementing measures to protect the application from threats such as SQL injection, cross-site scripting (XSS), and other vulnerabilities."
				},
				{
					id: 6,
					details: "Scalability: Designing the application architecture to handle increased load and traffic without performance degradation."
				},
				{
					id: 7,
					details: "User experience (UX): Creating an intuitive and engaging interface that provides a seamless experience for users."
				},
				{
					id: 8,
					details: "Testing and debugging: Identifying and fixing bugs, and ensuring the application is robust through unit, integration, and end-to-end testing."
				},
				],

				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/AunAfzaal',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/aun.afzal',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/m-aun7954',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/honest-property.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/erp-next.png'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/pitchlane.jpeg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/twitterExt.jpeg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
