// nav-bar animation

// const uls = document.querySelectorAll("nav ul");
// const links = [...document.querySelectorAll("nav a")];
// const light = document.querySelector("nav .tubelight");
// let activeIndex = 0;
// let currentIndex = 0;
// let increment = 1;
// links.forEach((link, index) => 
// {
// 	if (links[index].classList.contains("active"))
//     {
// 		light.style.left = `${links[index].offsetLeft + light.offsetWidth / 4}px`;
// 	}
// 	link.addEventListener("click", (e) => 
//     {
// 		activeIndex = index;
// 		let t = setInterval(() => 
//         {
// 			if (activeIndex > currentIndex) increment = 1;
// 			else if (activeIndex < currentIndex) increment = -1;
// 			currentIndex += increment;

// 			links[currentIndex].classList.add("active");
// 			if (currentIndex != -1)
// 				links[currentIndex - increment].classList.remove("active");

// 			if (currentIndex == activeIndex) 
//             {
// 				e.target.classList.add("active");
// 				increment = 0;
// 				clearInterval(t);
// 			}
// 		}, 50);
// 		light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
// 	});
// });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'NodeJS', 'React',
    'Python', 'Java', 'git',
    'django', 'OpenCV',
    'PHP', 'MySQL', 'jQuery', 'Express',
];

var tagCloud = TagCloud('.sphere', myTags,{

  // radius in px
  radius: 300,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true

});

var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.sphere').style.color = random_color;