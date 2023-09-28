var navBar = document.querySelector("#topnav");
var selected;

async function navAnimate(select, dir = 'normal', speed = 100) {
	navBar.animate([
		{height: '42px'},
		{height: '100%'}
	], {
		duration: speed,
		fill: 'forwards',
		direction: dir
	});
	selected = select;
	changeActive();
	
	return new Promise(res => {
		setTimeout(res, speed + 1);
	})
}

function navBackAnimate(page) {
	navAnimate(page, 'reverse', 250);
}

function changeActive() {
	document.querySelectorAll('#toptext li').forEach((element, index) => {
		element.classList.remove('active');
		if(index == selected-1) element.classList.add('active');
	});
}
