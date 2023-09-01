document.addEventListener("DOMContentLoaded", function () {
    let logo = document.getElementsByClassName("logo")[0];
    let navbar = document.getElementsByClassName("navbar")[0];
    let header = document.getElementsByClassName("header")[0];
    let menu = document.getElementsByClassName("menu")[0];
    let sideBar = document.getElementsByClassName("hidden_sidebar")[0];
    let menu_line1 = document.getElementsByClassName("menu_lines")[0];
    let menu_line2 = document.getElementsByClassName("menu_lines")[1];
    let menu_line3 = document.getElementsByClassName("menu_lines")[2];
    let overlay = document.getElementsByClassName("overlay_container")[0];
    // let i = 1000;
    let menu_flag = 0;

    // Adding Event listener for calling a scroll related function on scroll
    let prevScrollPos = 0;
    window.addEventListener('scroll', scrollFunction);

    //Function for hidding unhiding details like header sidebar etc. on scroll up or down
    function scrollFunction(){
        let currentScrollPos = window.scrollY;
        if(menu_flag == 1){
            hideSideBar();
        }
        if (currentScrollPos > prevScrollPos) {
            if(currentScrollPos > 300 ){
                hideHeader();
            }
            else {
                showHeader();
            }   
        }
        else {
            // Scrolling up
            if(currentScrollPos <= 300){
                showHeader();
            }
            else {
                showHeader();
                header.style.background = "black";
            }
        }
        prevScrollPos = currentScrollPos;
    }

    //Function for hidding header 
    function hideHeader(){
        logo.style.opacity = 0;
        navbar.style.opacity = 0;
        logo.style.transform = "translateY(-100px)";
        navbar.style.transform = "translateY(-100px)";
        header.style.background = "transparent";
        header.style.transform = "translateY(-100px)";
    }
    //Function for displaying header 
    function showHeader(){
        logo.style.opacity = 1;
        navbar.style.opacity = 1;
        logo.style.transform = "translateY(0px)";
        navbar.style.transform = "translateY(0px)";
        header.style.transform = "translateY(0px)";
        header.style.background = "transparent";
    }

    sideBar.style.transform = 'translateX(23vw)';
    menu.addEventListener('click', function(){
        if(menu_flag == 0){
            showSideBar();
        }
        else{
            hideSideBar();
        }
    });

    //Function for displaying sidebar and animating munu icon/Hamburger menu
    function showSideBar(){
        menu_line2.style.transform = 'translateX(-20px)';
        sideBar.style.visibility = 'visible';
        sideBar.style.transform = 'translateX(0)';
        menu_line1.style.transform = 'translateY(-50%) rotateZ(45deg)';
        menu_line3.style.transform = 'translateY(50%) rotateZ(-45deg)';
        menu_line3.style.transformOrigin = 'bottom left';
        menu_line1.style.transformOrigin = 'top left';
        overlay.style.visibility = 'visible';
        overlay.style.background = 'rgba(0, 0, 0, 0.5)';
        // header.style.background = 'black';
        showSideBarListItems();
        menu_flag = 1;
    }
    //Function for hidding sidebar and animating munu icon/Hamburger menu
    function hideSideBar(){
        sideBar.style.transform = 'translateX(23vw)';
        sideBar.style.visibility = 'hidden';
        menu_line2.style.transform = 'translateX(0px)';
        menu_line1.style.transform = 'rotateZ(0deg)';
        menu_line3.style.transform = 'rotateZ(0deg)';
        overlay.style.visibility = 'hidden';
        overlay.style.background = 'transparent';
        // header.style.background = 'transparent';
        hideSideBarListItems();
        menu_flag = 0;
    }

    //Intializing variables for initial listItems of sidebar
    let listItem1 = document.getElementsByClassName("sidebar_list_item")[0];
    let listItem2 = document.getElementsByClassName("sidebar_list_item")[1];
    let listItem3 = document.getElementsByClassName("sidebar_list_item")[2];
    let listItem4 = document.getElementsByClassName("sidebar_list_item")[3];
    let listItem5 = document.getElementsByClassName("sidebar_list_item")[4];

    //Function for changing sidebar listItems css for little animation while sideBar appears
    function showSideBarListItems(){
        listItem1.style.paddingBottom = '0px';
        listItem2.style.paddingBottom = '0px';
        listItem3.style.paddingBottom = '0px';
        listItem4.style.paddingBottom = '0px';
        listItem5.style.paddingBottom = '0px';
    }
    //Function for changing sidebar listItems css for little animation while sideBar disappear
    function hideSideBarListItems(){
        listItem1.style.paddingBottom = '5px';
        listItem2.style.paddingBottom = '5px';
        listItem3.style.paddingBottom = '5px';
        listItem4.style.paddingBottom = '5px';
        listItem5.style.paddingBottom = '5px';
    }

    // Initializing variables for adding or removing listItems in sidebar while screen resizes
    let ul = document.querySelector('.sidebar_ul');
    let navbarLi1 = document.getElementsByClassName("navbar_li")[0];
    let navbarLi2 = document.getElementsByClassName("navbar_li")[1];
    let navbarLi3 = document.getElementsByClassName("navbar_li")[2];
    let navbarLi4 = document.getElementsByClassName("navbar_li")[3];
    let navbarLi5 = document.getElementsByClassName("navbar_li")[4];
    let navbarLi6 = document.getElementsByClassName("navbar_li")[5];
    let navbarLi7 = document.getElementsByClassName("navbar_li")[6];
    let navbarLi8 = document.getElementsByClassName("navbar_li")[7];
    

    window.addEventListener('resize', responsive);

    // Function for adding or removing listItems in sidebar and hiding unhiding navbar of top while screen resizes
    function responsive() {
        let width = window.innerWidth;
        if(width <= 800){
            navbar.style.display = 'none';
            sideBar.style.padding = '13vh 1vw';
            ul.appendChild(navbarLi1.cloneNode(true));
            ul.appendChild(navbarLi2.cloneNode(true));
            ul.appendChild(navbarLi3.cloneNode(true));
            ul.appendChild(navbarLi4.cloneNode(true));
            ul.appendChild(navbarLi5.cloneNode(true));
            ul.appendChild(navbarLi6.cloneNode(true));
            ul.appendChild(navbarLi7.cloneNode(true));
            ul.appendChild(navbarLi8.cloneNode(true));
        }
        else {
            navbar.style.display = '';
            sideBar.style.padding = '13vh 5vw';
            ul.innerHTML = '';
            ul.appendChild(listItem1);
            ul.appendChild(listItem2);
            ul.appendChild(listItem3);
            ul.appendChild(listItem4);
            ul.appendChild(listItem5);
        }
    }
});