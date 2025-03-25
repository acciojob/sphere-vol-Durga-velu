function volume_sphere() {
    //Write your code here
	let pi=3.14;
 let radius=Number(document.getElementById("radius"))
 if(isNaN(radius.value) || (radius.value)<0 ){
	  document.getElementById("volume").textContent = NaN;
        return;
 }
	
 let volume = (4 * pi * Math.pow(radius, 3)) / 3;

document.getElementById("volume").innerHTML=volume.toFixed(4)
} 

window.onload =function () {
document.getElementById('MyForm').onsubmit = volume_sphere;
	
} 