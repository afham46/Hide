// function show(type) {
//     document.querySelectorAll('.gallery-img').forEach(img => {
//         img.style.display = (type === 'all' || img.classList.contains(type)) ? 'block' : 'none';
//     });
// }

var movie = document.querySelectorAll("#movie");
var cartoon = document.querySelectorAll("#cartoon");
var img = document.querySelectorAll("img");

function filtermovie(){
    movie.forEach(function(movie){
        movie.style.display = "none"
    })
    cartoon.forEach(function(cartoon){
        cartoon.style.display = "inline"
    })
}
function filtercartoon(){    
    cartoon.forEach(function(cartoon){
        cartoon.style.display = "none"
    })
    movie.forEach(function(movie){
        movie.style.display = "inline"
    })
}
function alls(){
    img.forEach(function(img){
        img.style.display = "inline"
    })
}

// var input = document.getElementById("input");

// input.addEventListener("input",function(){
//     document.getElementById("text").innerHTML = input.value
// })


var input = document.getElementById("input");

input.addEventListener("input",function(){
    var inputvalue = input.value;
    img.forEach(function(img){
        if(img.alt.toLowerCase().includes(inputvalue)){
            img.style.display = "inline"
        }else{
            img.style.display = "none"
        }
    })
})
