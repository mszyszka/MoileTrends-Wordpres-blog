$(window).on('resize', function() {
    // openAndCloseSubMenuSm();
    // openAndCloseSubMenuMd();
    // openAndCloseSubMenuXl();
});
$(window).on('load', function(){
    
});
$(window).on('scroll', function(){
    
});

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
    let toMainMenuArrow = document.querySelector('.to-main-menu-arrow-md');

    for(let i = 0; i < MainMenuItems.length; i++){

        let item = MainMenuItems[i];

        item.addEventListener('click', function(e){
            // Mateusz
            let darkerRedElemnts = document.querySelectorAll('.darker-red')
            if(darkerRedElemnts.length)
            {
                for(let i = 0; i < darkerRedElemnts.length; i++)
                {
                    darkerRedElemnts[i].classList.remove('darker-red');
                    let allElements = document.querySelectorAll('.sub-menu-col-md')

                    for(let i = 0; i < allElements.length; i++)
                    {
                        if(allElements[i].getAttribute('open'))
                        {
                            allElements[i].removeAttribute('open');
                            allElements[i].classList.remove('d-block');
                        }
                    }
                }
            }
            // Mateusz

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

            // Mateusz
            subMenuForThisItem.setAttribute('open',true)
            // Mateusz

            //take button .to-main-menu-arrow 
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

function openAndCloseSubMenuLg() {
    //take all links from main manu so we can add addEventListener to them
    const MainMenuItems = document.querySelectorAll('.main-menu-lg-col .main-menu .main-nav-item a');
    let toMainMenuArrow = document.querySelector('.to-main-menu-arrow-lg');

    for(let i = 0; i < MainMenuItems.length; i++){
        
        let item = MainMenuItems[i];

        item.addEventListener('click', function(e){
            // Mateusz
            let darkerRedElemnts = document.querySelectorAll('.darker-red')
            if(darkerRedElemnts.length)
            {
                for(let i = 0; i < darkerRedElemnts.length; i++)
                {
                    darkerRedElemnts[i].classList.remove('darker-red');
                    let allElements = document.querySelectorAll('.sub-menu-col-lg')

                    for(let i = 0; i < allElements.length; i++)
                    {
                        if(allElements[i].getAttribute('open'))
                        {
                            allElements[i].removeAttribute('open');
                            allElements[i].classList.remove('d-block');
                        }
                    }
                }
            }
            // Mateusz

            //hide do not miss column so subMenuForThisItem can fit there
            let doNotMissCol = document.querySelector('.col-lg-8.do-not-miss-col');
            doNotMissCol.classList.add('d-none');

            // hide previous conference row on the bottom
            let previousConferenceRow = document.querySelector('.previous-conferences-row');
            previousConferenceRow.classList.add('d-none');
            

            // show previous conference col on right side
            let previousConferenceCol = document.querySelector('.col-4.previous-conferences-col');
            previousConferenceCol.classList.remove('d-none');
            previousConferenceCol.classList.add('d-flex');


            //give dark red background to clicked element
            this.classList.add('darker-red');

            //data-target atribute in main menu links, are a class of sub-menu for this links
            //take data-target of this item, so we can show sub-menu that has class like it
            let itemDataTarget = this.dataset.target;

            //take proper sub menu
            let subMenuForThisItem = document.getElementsByClassName(itemDataTarget)[0];

            // show proper sub menu
            subMenuForThisItem.classList.add('d-block');

            // Mateusz
            subMenuForThisItem.setAttribute('open',true)
            // Mateusz

            //take button .to-main-menu-arrow 
            toMainMenuArrow.classList.add('d-block');
            
            
            //addEventListener to toMainMenuArrow 
            toMainMenuArrow.addEventListener('click', function(){

                subMenuForThisItem.classList.remove('d-block');
                item.classList.remove('darker-red');
                toMainMenuArrow.classList.remove('d-block');
                doNotMissCol.classList.remove('d-none');
                previousConferenceRow.classList.remove('d-none');
                previousConferenceCol.classList.add('d-none');
                previousConferenceCol.classList.remove('d-flex');

            })

        });
    }
}

function openAndCloseSubMenuXl() {
    //take all links from main manu so we can add addEventListener to them
    const MainMenuItems = document.querySelectorAll('.main-menu-xl-col .main-menu .main-nav-item a');
    let toMainMenuArrow = document.querySelector('.to-main-menu-arrow-xl');

    // first main-menu item must be shown
    MainMenuItems[0].classList.add('darker-red');
    let firstSubMenu = document.querySelector('.sub-menu-xl-1');
    firstSubMenu.classList.add('d-block');
    firstSubMenu.setAttribute('open', true);

    for(let i = 0; i < MainMenuItems.length; i++){
        
        let item = MainMenuItems[i];

        item.addEventListener('click', function(e){
            // Mateusz
            let darkerRedElemnts = document.querySelectorAll('.darker-red')
            if(darkerRedElemnts.length)
            {
                for(let i = 0; i < darkerRedElemnts.length; i++)
                {
                    darkerRedElemnts[i].classList.remove('darker-red');
                    let allElements = document.querySelectorAll('.sub-menu-col-xl')

                    for(let i = 0; i < allElements.length; i++)
                    {
                        if(allElements[i].getAttribute('open'))
                        {
                            allElements[i].removeAttribute('open');
                            allElements[i].classList.remove('d-block');
                        }
                    }
                }
            }
            // Mateusz

            //give dark red background to clicked element
            this.classList.add('darker-red');

            //data-target atribute in main menu links, are a class of sub-menu for this links
            //take data-target of this item, so we can show sub-menu that has class like it
            let itemDataTarget = this.dataset.target;

            //take proper sub menu
            let subMenuForThisItem = document.getElementsByClassName(itemDataTarget)[0];

            // show proper sub menu
            subMenuForThisItem.classList.add('d-block');

            // Mateusz
            subMenuForThisItem.setAttribute('open',true)
            // Mateusz

            //take button .to-main-menu-arrow 
            toMainMenuArrow.classList.add('d-block');
            
        });
    }
}

openAndCloseSubMenuSm();
openAndCloseSubMenuMd();
openAndCloseSubMenuLg();
openAndCloseSubMenuXl();