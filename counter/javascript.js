let count=0;


const value=document.querySelector("#value");

const btns=document.querySelectorAll(".btn")

//nodelist is like array like I can use foreach
//console.log(btns) 

btns .forEach(function (item) {
  item.addEventListener("click", function(event) {
    //on event object I have currentTarget
    const styles=event.currentTarget.classList
    //console.log(styles)

    if(styles.contains('decrease')) {
      count --; 
     
    } else if(styles.contains('increase')) {
      count ++; 
     
    } else {
      count=0;
    }
    if(count>0) {
      value.style.color="green"
    }
    if(count<0) {
      value.style.color="red"
    }
    if(count ===0) {
      value.style.color="black"
    }
    value.textContent=count
  })
})
