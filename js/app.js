const tabsBtn = document.querySelectorAll(".navigen");
const tabsItems = document.querySelectorAll(".block_menu");
const InfoBlock = document.querySelectorAll(".block")
const InfoItems = document.querySelectorAll(".block_button")

const tabsBtn2 = document.querySelectorAll(".navigen:nth-child(2)");
const tabsBtn3 = document.querySelectorAll(".navigen:nth-child(3)");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');

            InfoBlock.forEach(Inform1);
            function Inform1(item) {
                item.addEventListener("click", function () {
                    let currentBtn = item;
                    let tabId = currentBtn.getAttribute("tab");
                    let currentTab = document.querySelector(tabId);

                    if (!currentBtn.classList.contains('active')) {
                        InfoBlock.forEach(function (item) {
                            item.classList.remove('active');
                        });

                        InfoItems.forEach(function (item) {
                            item.classList.remove('active');
                        });

                        currentBtn.classList.add('active');
                        currentTab.classList.add('active');
                    };
                });
            }
        }
    });
}

document.querySelector('.navigen').click();


    // Підсвітка кнопки і блока tab_1
    // InfoBlock.forEach(Inform1);

    // function Inform1(item) {
    //     item.addEventListener("click", function () {
    //         let currentBtn = item;
    //         let tabId = currentBtn.getAttribute("tab1");
    //         let currentTab = document.querySelector(tabId);

    //         if (!currentBtn.classList.contains('active')) {
    //             InfoBlock.forEach(function (item) {
    //                 item.classList.remove('active');
    //             });

    //             InfoItems.forEach(function (item) {
    //                 item.classList.remove('active');
    //             });

    //             currentBtn.classList.add('active');
    //             currentTab.classList.add('active');
    //         }
    //     });
    // }
    
//     InfoBlock.forEach(Inform2);

//     function Inform2(item) {
//         item.addEventListener("click", function () {
//             let currentBtn = item;
//             let tabId = currentBtn.getAttribute("tab2");
//             let currentTab = document.querySelector(tabId);

//             if (!currentBtn.classList.contains('active')) {
//                 InfoBlock.forEach(function (item) {
//                     item.classList.remove('active');
//                 });

//                 InfoItems.forEach(function (item) {
//                     item.classList.remove('active');
//                 });

//                 currentBtn.classList.add('active');
//                 currentTab.classList.add('active');
//             }
//         });
// }
    
// InfoBlock.forEach(Inform3);

//     function Inform3(item) {
//         item.addEventListener("click", function () {
//             let currentBtn = item;
//             let tabId = currentBtn.getAttribute("tab3");
//             let currentTab = document.querySelector(tabId);

//             if (!currentBtn.classList.contains('active')) {
//                 InfoBlock.forEach(function (item) {
//                     item.classList.remove('active');
//                 });

//                 InfoItems.forEach(function (item) {
//                     item.classList.remove('active');
//                 });

//                 currentBtn.classList.add('active');
//                 currentTab.classList.add('active');
//             }
//         });
//     }


    // InfoBlock.forEach(Inform2);

    // function Inform2(item) {
    //     item.addEventListener("click", function () {
    //         let currentBtn = item;
    //         let tabId = currentBtn.getAttribute("tab1");
    //         let currentTab = document.querySelector(tabId);

    //         if (!currentBtn.classList.contains('active')) {
    //             InfoBlock.forEach(function (item) {
    //                 item.classList.remove('active');
    //             });

    //             InfoItems.forEach(function (item) {
    //                 item.classList.remove('active');
    //             });

    //             currentBtn.classList.add('active');
    //             currentTab.classList.add('active');
    //         }
    //     });
    // }
    
    // InfoBlock.forEach(Inform3);

    // function Inform3(item) {
    //     item.addEventListener("click", function () {
    //         let currentBtn = item;
    //         let tabId = currentBtn.getAttribute("tab");
    //         let currentTab = document.querySelector(tabId);

    //         if (!currentBtn.classList.contains('active')) {
    //             InfoBlock.forEach(function (item) {
    //                 item.classList.remove('active');
    //             });

    //             InfoItems.forEach(function (item) {
    //                 item.classList.remove('active');
    //             });

    //             currentBtn.classList.add('active');
    //             currentTab.classList.add('active');
    //         }
    //     });
    // }

    // Переключання між табами



