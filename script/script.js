function openSubMenu() {

    const menuItems = document.querySelectorAll('.main-menu .nav-item a');

    for(let i = 0; i < menuItems.length; i++){
        let item = menuItems[i];
        item.addEventListener('click', function(){
            let itemDataTarget = this.dataset.target;
            //take proper sub menu
            let subMenu = document.getElementsByClassName(itemDataTarget)[0];
            // show proper sub menu
            subMenu.classList.add('d-block');
        });
    }
}
openSubMenu();

function closeSubMenu() {
    let toMainMenuArrows = document.getElementsByClassName('to-main-menu-arrow');
    for (let i = 0; i > toMainMenuArrows; i++) {
        let item = toMainMenuArrows[i];
        item.addEventListener('click', function() {
            console.log('działa');
        });
    }
}

closeSubMenu();


// toMainMenuArrow.addEventListener('onclick', function() {
//     console.log('działa');
// });

// function closeSubMenu() {
//     console.log("jakdf")
//     // event.target.addEventListener('click', function() {
//     //     // subMenu.classList.remove('d-block');
//     //     console.log('mam cie');
//     // });
    
// }
