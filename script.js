console.log('Its working')

let theme = localStorage.getItem('theme')
setTheme('dark')
let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'dark'){
		document.getElementById('theme-style').href = 'dark.css'
	}
	localStorage.setItem('theme', mode)
}