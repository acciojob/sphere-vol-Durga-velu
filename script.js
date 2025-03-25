function volume_sphere() {
    //Write your code here
	let pi=3.14;
 let radius=document.getElementById("radius").value
	let submit=document.getElementById("submit")
	submit.addEventListener("click", (event)=>{
		event.preventDefault();
 if(isNaN(radius) || (radius<0 ){
	  document.getElementById("volume").textContent = NaN;
        return;
 }
	
 let volume = (4 * pi * Math.pow(radius, 3)) / 3;

document.getElementById("volume").value=volume.toFixed(4)
		
	})

} 

window.onload =function () {
document.getElementById('MyForm').onsubmit = volume_sphere;
	
} 