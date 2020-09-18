<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1>Hello World!</h1>
					<p class="lead">This is an Awesome App Landing Page</p>

					<div class='carousel'>
						<div class='carousel-inner'>
							<v-carousel hide-delimiters>
								<v-carousel-item
									v-for="(item,i) in items"
									:key="i"
									:src="item.src"
								></v-carousel-item>
							</v-carousel>
							<div class="my-2">
								<v-btn depressed color="primary" class='start'>
									<router-link to="/ready" class='start-text'>START</router-link>
								</v-btn>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data () {
		return {
			items: [
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
				},
			],
		}
	},
	methods: {
		nav() {
			var scrollTop = window.scrollTop();

				if (scrollTop > 10) {
					document.querySelector('.navbar-default').addClass('fixed-to-top')
						
				} else if (scrollTop == 0)   {
					document.querySelector('.navbar-default').removeClass('fixed-to-top')
				}
			}
	}

}
</script>

<style scoped>
header{
	padding: 150px 0px 0px 0px;
	height: 800px;
	background: url('../../assets/img/main/meetingroom2.jpg');
	background-color: white!important;
	background-size: cover;
	background-repeat: no-repeat;
	color: white;
	position: relative;
}

header h1{
	text-transform: uppercase;
	font-weight: 700;
	font-weight: 300;
	font-size: 100px;
	font-family: 'Roboto Condensed', sans-serif;
	
}

header p.lead{
	font-size: 36px;
}


header .carousel{
	margin-right: auto;
	margin-left: auto;
	margin-top: 100px;
	width: 800px;
	height: 500px;
	background: url('../../assets/img/main/notebook.png') no-repeat;
	background-size: 100%;
}

header .carousel-inner{
	position: relative;
	top: 25px;
	margin-right: auto;
	margin-left: auto;
	padding: 1px 0px 0px 4px;
	width: 76%;
	height: 76%;
}

header .start {
	position: relative;
	top: -200px;
}

header .start-text {
	color: white;
}

</style>