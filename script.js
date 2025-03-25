function volume_sphere() {
    //Write your code here
	let pi=3.14;
 let radius=Number(document.getElementById("radius").value)
 if(isNaN(radius.value) || radius.value<0 ){
	  document.getElementById("volume").textContent = NaN;
        return;
 }
	
let	volume= (4*pi*radius*radius*radius)/3

document.getElementById("volume").textContent=volume.toFixed(4)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
