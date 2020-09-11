<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1>Hello World!</h1>
					<p class="lead">This is an Awesome App Landing Page</p>

					<!-- <div class="carousel-iphone">
						<div id="carousel-example-generic" class="carousel slide">

							<ol class="carousel-indicators">
									<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
									<li data-target="#carousel-example-generic" data-slide-to="1"></li>
									<li data-target="#carousel-example-generic" data-slide-to="2"></li>
							</ol>

							<div class="carousel-inner">
								<div class="item active">
									<img src="../../assets/img/main/app-1.png" alt="App Screen 1"></div>
								<div class="item">
										<img src="../../assets/img/main/app-2.png" alt="App Screen 2"></div>
								<div class="item">
										<img src="../../assets/img/main/app-3.png" alt="App Screen 3"></div>

							</div>
						</div>
					</div> -->
					<div class='carousel'>
						<v-carousel hide-delimiters class='carousel-inner'>
							<v-carousel-item
								v-for="(item,i) in items"
								:key="i"
								:src="item.src"
							></v-carousel-item>
						</v-carousel>
						<router-link to="/Interview" class='start'>Interview</router-link>
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
		}
</script>

<style scoped>
header{
	padding: 150px 0px 0px 0px;
	height: 960px;
	background: url('../../assets/img/main/meetingroom2.jpg');
	background-color: white!important;
	background-size: cover;
	background-repeat: no-repeat;
	color: white;
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
	height: 100%;
	background: url('../../assets/img/main/notebook.png') no-repeat;
	background-size: 100%;
}


header .carousel-inner{
	position: relative;
	margin-right: auto;
	margin-left: auto;
	padding: 1px 0px 0px 4px;
	width: 780px;
}

header .carousel-indicators .active {
	width: 15px;
	height: 15px;
	background: #444444;
}

header .carousel-indicators {
	bottom: -63px;
}

header .carousel-indicators li {
	display: inline-block;
	margin: 1px;
	width: 15px;
	height: 15px;
	border: 1px solid #666666;
	border-radius: 10px;
	text-indent: -999px;
	cursor: pointer;
}

</style>