// const clickbtn = document.getElementById("btn-clik");

// clickbtn.addEventListener("click", function() {
//   console.log("Button clicked  Successfully");
// });



// clickbtn.addEventListener("mouseover", function() {
//     console.log("Button clicked  Successfully");
// });




// const inputval = document.getElementById("inputvalue");
// inputval.addEventListener("change", function(event) {  
//     console.log(event.target.value);
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//     const inputElement = document.getElementById('myInput');
//     const outputElement = document.getElementById('output');

//     inputElement.oninput = function() {
//         outputElement.textContent = `You typed: ${inputElement.value}`;
//     };
// });





function hideSVGAfterAnimation() {
    const svgText = document.querySelector('.svg-text');
    svgText.addEventListener('animationend', function() {
        svgText.classList.add('hidden');
    });
}

// Run the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', hideSVGAfterAnimation);








let names = ["Noor", "Mustafa", "Jator"];


console.log(names);