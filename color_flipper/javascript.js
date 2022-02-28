
   
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click", function () {
  //console.log(document.body)=> I am gonna target the body to change the background color
  //get a number between 0-3

  const randomNumber=getRandomNumber();
  //console.log(randomNumber)
  document.body.style.backgroundColor=colors[randomNumber]
  color.textContent=colors[randomNumber]
})

function getRandomNumber () {
  //when I multiply with the colors length I will be getting numbers between 0-3
  //after that need to round the number closet integer
  return Math.floor(Math.random()*colors.length)
}