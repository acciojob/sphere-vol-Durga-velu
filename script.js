function volume_sphere() {
    //Write your code here
	

	let volume=document.getElementById("volume");
	let submit=document.getElementById("submit")
	submit.addEventListener("click", (event)=>{
		event.preventDefault();
		 let radius=document.getElementById("radius").value;
 if(isNaN(radius) || radius<0 ){
	  volume.value = NaN;
        return;
 }
	
 let volumeOfSphere = (4 * Math.PI * radius*radius*radius) / 3;

volume.value=volumeOfSphere.toFixed(4)
		
	})

} 

window.onload =
document.getElementById('MyForm').onsubmit = volume_sphere; 