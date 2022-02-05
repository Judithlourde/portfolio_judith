export default {
	state() {
		return {
			navigation: [
				{ title: `Projects` },
				{ title: `Capability` },
				{ title: `Contact` },
			],

			about: [
				{
					intro: `Hi there, I'am Judith 👋`,
					lead: `Front End Developer`,
					aboutText: [
						`I am an enthusiastic and detail-oriented Frontend software developer seeking a position with a company to use my skills in coding to provide solutions that meet customer needs through collaboration with cross-functional teams.`,
					],
					// author: '',
					preview: {
						image: '/images/judith_image.png',
						caption: `Judith_image`
					},
				},
			],

			projectImages: [
				{ image: '/images/photographer_project.jpg', caption: 'photographer-image' },
				{ image: '/images/dashboard_project.jpg', caption: 'dashboard-image' },
				{ image: '/images/coffee-shop_project.jpg', caption: 'coffee-shop-image' },
				{ image: '/images/pizza-shop_project.jpg', caption: 'pizza-shop-image' },
				
			]
		};
	},

	getters: {
		getNavigationPages(state) {
			return state.navigation;
		},

		getAbout(state) {
			return state.about;
		},

		getProjectImages(state) {
			return state.projectImages;
		}
	}
}
