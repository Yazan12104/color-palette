let inputv = document.getElementById('button1');
var box = document.querySelector('.box')// اللوحة الملونة 
 var arr = [] ; // مصفوفة الالوان المدخلة
 var i = 0 ;
inputv.addEventListener('click' , function(){
    var x  = document.getElementById('input1').value;
	
	console.log("x = " , x ,", i = ", i ) // فحص
	if(x.length <= 7 && x.length >= 4 && x[0] === '#' && x.length !== 6){		
		genreat(x)  
        arr.push(x);
        console.log("arr = " , arr); // فحص
	    i++;
    }
	else{alert("error , input a hexa value")}
	
	// var jsonvalue = JSON.stringify(x);
	// var blob = new Blob([jsonvalue], {type: "apllication/json"})
	// saveAs(blob , "file.json")
})
function genreat(x){ // توليد اللون إكس
	var newDiv = document.createElement("div");
    newDiv.classList.add("col-3");
    newDiv.style.backgroundColor = x;
    newDiv.style.height = "100px";
    newDiv.style.width = "100px";
    newDiv.style.color = "white";
    newDiv.style.fontFamily = "Arial";
	newDiv.style.fontSize = "16px";
	newDiv.style.textAlign = "center"
    newDiv.addEventListener("mouseover", function() {
        newDiv.textContent = x;
	});
    newDiv.addEventListener("mouseout", function() {
        newDiv.style.opacity = "1";
		newDiv.textContent = ""; 
    });
    document.getElementById("row").appendChild(newDiv);
	//...................
	var colorsArray = JSON.parse(localStorage.getItem("colors")) || [];
    colorsArray.push(x);
    localStorage.setItem("colors", JSON.stringify(colorsArray));
}
function exportColorsToJSON() {
    var colorsArray = JSON.parse(localStorage.getItem("colors")) || [];
    var jsonData = JSON.stringify(colorsArray, null, 2);
    
    var blob = new Blob([jsonData], { type: "application/json" });
    saveAs(blob, "colors.json");

    // إعادة تهيئة localStorage
    localStorage.removeItem("colors");
}
function palettes(){
    var gradientColors = 'linear-gradient(to bottom'; // بداية تعريف التدرج

for (var i = 0; i < arr.length; i++) {
  gradientColors += ', ' + arr[i]; // إضافة كل لون من المصفوفة إلى التدرج
}

gradientColors += ')'; // إغلاق تعريف التدرج

box.style.background = gradientColors; 
}
// ........................
// function hexToDecimal(hex) { 
//     return parseInt(hex, 16);
// }
// let hexNumber = "5f5";
// let decimalNumber = hexToDecimal(hexNumber);
// console.log(decimalNumber);