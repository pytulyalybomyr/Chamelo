let form = document.getElementById("form")
let conteiner = document.getElementById("conteiner_button")
let what_text = document.getElementById("what_text-button")
let footer_text = document.getElementById("footer_text-button")



form.onclick = function () {
    error = swal ( "Oops" ,  "Something went wrong!" ,  "error" )
};

conteiner.onclick = function () {
    error = swal ( "Oops" ,  "Something went wrong!" ,  "error" )
};

what_text.onclick = function () {
    error = swal ( "Oops" ,  "Something went wrong!" ,  "error" )
};

footer_text.onclick = function () {
    error = swal ( "Oops" ,  "Something went wrong!" ,  "error" )
}


// let card = document.getElementById("card")
// let photo = document.querySelectorAll("photo")

// // card.onmouseover = function () {
// //     if (!card.classList.contains('active')) {
// //         tabsBtn.forEach(function (item) {
// //             item.classList.remove('active');
// //     });
// // }

// // card.forEach(onTabClick);

// function onTabClick(item) {
//     card.addEventListener("click", function () {
//         swal ( "Oops" ,  "Something went wrong!" ,  "error" )
//         // let currentBtn = item;
//         // let tabId = currentBtn.getAttribute("data-tab");
//         // let currentTab = document.querySelector(tabId);
//         if (!card.classList.contains('active')) {
//             card.forEach(function (item) {
//                 item.classList.remove('active');
//         })

//             item.classList.add('active');
//         }
//     });
// }

// card.onclick = function () {
//     swal("Oops", "Something went wrong!", "error")

// }














// const tabsBtn = document.querySelectorAll(".navigation_system");
// const tabsItem = document.querySelectorAll(".block_all");

// tabsBtn.forEach(function (item) {
//     item.addEventListener("click", function () {
//         let Btn = item;
//         let id = Btn.getAttribute("data-tab");
//         let Tab = document.querySelector(id);

//         if (!Btn.classList.contains('active')) {
//             tabsBtn.forEach(function (item) {
//                 item.classList.remove('active');
//             });
            
//             tabsItem.forEach(function (item) {
//                 item.classList.remove('active');
//             });

//             Btn.classList.add("active");
//             Tab.classList.add("active");
//         };
    
    
//     });


// });

