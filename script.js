circles=document.querySelectorAll(".circle")
prevbutton=document.getElementById("prev")
nextbutton=document.getElementById("next")
idx=0
circles[idx].classList.add('active')
updatebuttons()
function updatebuttons(){
	if(idx==0)
		{prevbutton.disabled=true}
	else{ prevbutton.disabled=false}
	
	if(idx==circles.length-1)
		{nextbutton.disabled=true}
	else {nextbutton.disabled=false}
}

nextbutton.addEventListener(("click"),()=>{
		if(idx<circles.length-1){
			// console.log("next")
			idx++
			circles[idx].classList.add('active')
			updatebuttons()
		}
})
prevbutton.addEventListener(("click"),()=>{
	if(idx>0){
		// console.log("prev")
		circles[idx].classList.remove('active')
		idx--
		updatebuttons()
	}
})

