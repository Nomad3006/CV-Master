/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository:
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = theaterJS()

theater
	.on('type:start, erase:start', function () {
	theater.getCurrentActor().$element.classList.add('actor__content--typing')
})
	.on('type:end, erase:end', function () {
	theater.getCurrentActor().$element.classList.remove('actor__content--typing')
})
//	.on('type:start, erase:start', function () {
//	if (theater.getCurrentActor().name === 'me') {
//		document.body.classList.add('dark')
//	} else {
//		document.body.classList.remove('dark')
//	}
//})

theater
	.addActor('me', { speed: 1.2, accuracy: 0.9 })
	.addScene('me: link rel="stylesheet" href="css/sytle.css">',1000)

	.addScene(-10,'tyles.css">')
	.addScene(function (done) {
	$('#bgimgvect').attr("src","img/withcss.jpg")
	done()
},5000)
	.addScene(function (done) {
	$('#bgimgvect').attr("src","img/withoutcss.jpg")
	done()
})
	.addScene(theater.replay.bind(theater))
