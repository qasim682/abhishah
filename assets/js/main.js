
// function check(e) {
//     var customcheck = document.getElementById("pricetoggle");
//     var text1 = document.getElementsByClassName("price1");
//     var text2 = document.getElementsByClassName("price2");
//     var text3 = document.getElementsByClassName("mmyyyy");

//     for (var i = 0; i < text1.length; i++) {
//         if (pricetoggle == true) {
//             text1[i].style.display = "none";
//             text2[i].style.display = "block";
//             text3[i].style.color = "#ffffff";
//         } else if (pricetoggle == false) {
//             text1[i].style.display = "block";
//             text2[i].style.display = "none";
           
//         }
        
//     }
// }


function check() {
    var customcheck = document.getElementById("pricetoggle");
    var text1 = document.getElementsByClassName("price1");
    var text2 = document.getElementsByClassName("price2");
    var text3 = document.getElementsByClassName("mm");
    var text4 = document.getElementsByClassName("yyyy");
   
    for (var i = 0; i < text1.length; i++) {
      if (pricetoggle.checked == true) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";

      } else if (pricetoggle.checked == false) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      }
    }

    for (var i = 0; i < text3.length; i++) {
      if (pricetoggle.checked == true) {
        text3[i].style.color = "#8c8c8c";
        text4[i].style.color = "#ffffff";

      } else if (pricetoggle.checked == false) {
        text3[i].style.color = "#ffffff";
        text4[i].style.color = "#8c8c8c";
      }
    }  
  
  
  
  }
check();



// const pricetoggle = document.querySelector("#pricetoggle");

// pricetoggle.addEventListener("change", function(event){
//     const yearly = document.querySelectorAll(".yearly");
//    if(event.target.checked){
//        yearly.forEach(year => {
//            year.classList.remove("d-none")
//        })
//        showMonthlyPrice();
//        event.target.previousElementSibling.classList.add("active-color")
//        event.target.nextElementSibling.classList.remove("active-color")
//    }
//    else if(event.target.checked === false){
//     hideMonthlyPrice();
//     yearly.forEach(year => {
//         year.classList.add("d-none")
//     })
//     event.target.nextElementSibling.classList.add("active-color")
//     event.target.previousElementSibling.classList.remove("active-color")
   
//    }
 
// })



// function showMonthlyPrice(){
//     const monthly = document.querySelectorAll(".monthly");
//         monthly.forEach(item => {
//        item.classList.add("d-none")
//     })
// }

// function hideMonthlyPrice(){
//     const monthly = document.querySelectorAll(".monthly");
//     monthly.forEach(item => {
//    item.classList.remove("d-none")
// })
// }
