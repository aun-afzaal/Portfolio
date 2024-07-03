<script>
export default {
	setup() {
		return {
			bios: [
				{id:1,
					bio:"As a passionate and skilled web developer, I specialize in creating stunning and highly functional web applications. With a keen eye for design and a strong foundation in cutting-edge technologies, I transform ideas into digital experiences that captivate users and drive engagement",
				},{
					id:2,
					bio:"My expertise spans across the entire web development stack, ensuring that every project I undertake is robust, scalable, and tailored to meet the unique needs of each client. Whether it's developing dynamic user interfaces with React, ensuring seamless functionality with efficient backend solutions, or crafting responsive designs with Tailwind CSS.",
				},{
					id:3,
					bio: "I deliver web apps that are not only visually appealing but also performant and user-friendly.I thrive on challenges and am committed to continuous learning and innovation. By staying up-to-date with the latest industry trends and best practices, I ensure that the web applications I build are future-proof and leverage the most advanced features available.From initial concept to final deployment, I work closely with clients to understand their vision and bring it to life through meticulous planning, agile development, and rigorous testing. The result is a web application that not only meets but exceeds expectations, providing a seamless and enjoyable experience for users.Let’s create something amazing together!"
				}
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="../../assets/images/aun.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
