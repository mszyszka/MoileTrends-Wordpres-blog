$(window).on('resize', function() {
    openAndCloseSubMenuSm();
    openAndCloseSubMenuMd();
    setImgHeight();

});
$(window).on('load', function(){
    
});
$(window).on('scroll', function(){
    
});


function openAndCloseSubMenuSm() {
    //take all links from main manu so we can add addEventListener to them
    const MainMenuItems = document.querySelectorAll('.main-menu-sm-col .main-menu .main-nav-item a');
    let doNotMissCol = document.querySelector('.do-not-miss-col');

    for(let i = 0; i < MainMenuItems.length; i++){
        let item = MainMenuItems[i];
        // let windowWidth = window.innerWidth;
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
            let toMainMenuArrow = document.querySelector('.to-main-menu-arrow');
            toMainMenuArrow.classList.add('d-block');
            
            //addEventListener to toMainMenuArrow 
            toMainMenuArrow.addEventListener('click', function(){
                //remove class d-block from
                subMenuForThisItem.classList.remove('d-block');
                item.classList.remove('darker-red');
                toMainMenuArrow.classList.remove('d-block');
                doNotMissCol.classList.remove('d-block');
            })
        });
    }
}

function openAndCloseSubMenuMd() {
    //take all links from main manu so we can add addEventListener to them
    const MainMenuItems = document.querySelectorAll('.main-menu-md-col .main-menu .main-nav-item a');

    for(let i = 0; i < MainMenuItems.length; i++){
        let item = MainMenuItems[i];
        
        item.addEventListener('click', function(e){

            //hiede do not miss column so subMenuForThisItem can fit there
            let doNotMissCol = document.querySelector('.do-not-miss-col');
            doNotMissCol.classList.add('d-none');

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
            let toMainMenuArrow = document.querySelector('.to-main-menu-arrow-md');
            toMainMenuArrow.classList.add('d-block');
            
            //addEventListener to toMainMenuArrow 
            toMainMenuArrow.addEventListener('click', function(){

                subMenuForThisItem.classList.remove('d-block');
                item.classList.remove('darker-red');
                toMainMenuArrow.classList.remove('d-block');
                doNotMissCol.classList.remove('d-none');

            })

        });
    }
}

openAndCloseSubMenuSm();
openAndCloseSubMenuMd();

function setImgHeight() {
    let articleImages = document.querySelectorAll('.menu-container-xl .article-image');
    let colWidth = document.querySelector('.do-not-miss-row .col-xl-6').offsetWidth;
    let articleImageHeight = (colWidth*0.75).toString();

    articleImages.forEach(
        function(element) {
            element.style.height = articleImageHeight;
        }
    );
}



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: true,
        loop: true,
        responsive:{
            0:{
                items:1
            }
        },
    }
    );
});
