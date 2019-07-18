function openAndCloseSubMenu() {
    //take all links from main manu so we can add addEventListener to them
    const MainMenuItems = document.querySelectorAll('.main-menu .nav-item a');

    for(let i = 0; i < MainMenuItems.length; i++){
        let item = MainMenuItems[i];
        item.addEventListener('click', function(){
            //give dark red background to clicked element
            this.classList.add('darker-red');
            //data-target atribute in main menu links, are a class of sub-menu for this links
            //take data-target of this item, so we can show sub-menu that has class like it
            let itemDataTarget = this.dataset.target;
            //take proper sub menu
            let subMenuForThisItem = document.getElementsByClassName(itemDataTarget)[0];
            // show proper sub menu
            subMenuForThisItem.classList.add('d-block');
            //take button .to-main-menu-arrow 
            let toMainMenuArrow = document.getElementsByClassName('to-main-menu-arrow')[i];
            //addEventListener to toMainMenuArrow 
            toMainMenuArrow.addEventListener('click', function(){
                //remove class d-block from
                subMenuForThisItem.classList.remove('d-block');
                item.classList.remove('darker-red');
            })
        });
    }
}
openAndCloseSubMenu();



