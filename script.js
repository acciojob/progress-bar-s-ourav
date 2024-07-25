circles=document.querySelectorAll(".circle")
prevbutton=document.getElementById("prev")
nextbutton=document.getElementById("next")
idx=0
circles[idx].classList.add('active')
function updatebuttons(){
	if(idx==0)
		prevbutton.disabled=true
	else prevbutton.disabled=false
	if(idx==4)
		nextbutton.disabled=true
	else nextbutton.disabled=false
}

nextbutton.addEventListener(("click"),()=>{
		if(idx<4){
			idx++
			circles[idx].classList.add('active')
			updatebuttons()
		}
})
prevbutton.addEventListener(("click"),()=>{
	if(idx>0){
		circles[idx].classList.remove('active')
		idx--
		updatebuttons()
	}
})

