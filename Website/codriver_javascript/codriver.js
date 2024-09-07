
    /******************************** HEADER-BAR ********************************/

    const header = document.querySelector('.header-bar');

    /*window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            header.style.backgroundColor = 'white';
        } 
        else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.438)';
        }
    })*/


    /******************************** ARROW-DOWN ********************************/
    const nav_links_li = document.querySelector('.nav_links-li');
    const arrowDown = document.querySelector('.nav-bar-arrow-down');

    nav_links_li.addEventListener('mouseover', () => {
        arrowDown.style.borderColor = 'rgb(37, 37, 231)';
    });

    nav_links_li.addEventListener('mouseout', () => {
        arrowDown.style.borderColor = 'black';
    });


    /******************************** MORE-DROPDOWN-NAV ********************************/
    const nav_drop_more_div = document.querySelector('.nav_links-more-dropdown-div');
    const nav_drop_more = document.querySelector('.nav_links-more-dropdown');

    nav_drop_more_div.addEventListener('click', () => {
        if (nav_drop_more.style.display == 'block') {
            nav_drop_more.style.display = 'none';
        }
        else {
            nav_drop_more.style.display = 'block';
        }
    });

        /** HIDE WHEN CLICKING OUTSIDE **/
    document.addEventListener('mouseup', function(e) {
        if (!nav_drop_more_div.contains(e.target)) {
            nav_drop_more.style.display = 'none';
        }
    });



    /******************************** DROPDOWN-MENU ********************************/

    const dropdown_menu = document.querySelector('.dropdown-menu');
    const toggle_button = document.querySelector('.toggle-button');
        
    toggle_button.addEventListener('click', () => {
        if (dropdown_menu.style.display == 'block') {
            dropdown_menu.style.display = 'none';
            dropdown_menu.style.opacity = '0';
            dropdown_menu_more_div_display.style.display = 'none';
            more_arrow.style.borderWidth = '0px 3px 3px 0px';
            more_arrow.style.marginBottom = '0px';
        }
        else {
            dropdown_menu.style.display = 'block';
            dropdown_menu.style.opacity = '1';
        }
    });


        /** MORE DROP-DOWN **/
    const dropdown_menu_more_dropdown = document.querySelector('.drop-links-more-class');
    const dropdown_menu_more_div_display = document.querySelector('.dropdown-menu-more-div');
    const more_arrow = document.querySelector('.dropdown_more_arrow');
    const dropdown_menu_more_li = document.querySelector('.dropdown-links-more');

    dropdown_menu_more_dropdown.addEventListener('click', () => {
        if (dropdown_menu_more_div_display.style.display == 'block') {
            dropdown_menu_more_div_display.style.display = 'none';
            more_arrow.style.borderWidth = '0px 3px 3px 0px';
            more_arrow.style.marginBottom = '0px';
        }
        else {
            dropdown_menu_more_div_display.style.display = 'block';
            more_arrow.style.borderWidth = '3px 0px 0px 3px';
            more_arrow.style.marginBottom = '-8px';
        }
    });

        /** ARROW BORDER COLOR HOVER **/
    dropdown_menu_more_li.addEventListener('mouseover', () => {
        more_arrow.style.borderColor = 'rgba(0, 0, 0, 0.753)';
    })

    dropdown_menu_more_li.addEventListener('mouseout', () => {
        more_arrow.style.borderColor = 'black';
    })

        /** HIDE WHEN CLICKING OUTSIDE **/
    document.addEventListener('mouseup', function(e) {
        if (!dropdown_menu.contains(e.target) && !toggle_button.contains(e.target)) {
            dropdown_menu.style.display = 'none';
            dropdown_menu_more_div_display.style.display = 'none';
            more_arrow.style.borderWidth = '0px 3px 3px 0px';
            more_arrow.style.marginBottom = '0px';
        }
    });

    /******************************** WINDOW-WIDTH-CLOSE ********************************/

    window.addEventListener('resize', function() {
        const screenWidth = window.innerWidth;

        if (screenWidth > 1290) {
            dropdown_menu.style.display = 'none';
            dropdown_menu_more_div_display.style.display = 'none';
            more_arrow.style.borderWidth = '0px 3px 3px 0px';
            more_arrow.style.marginBottom = '0px';
        }
        else if (screenWidth < 1290) {
            nav_drop_more.style.display = 'none';
        }
    });


    /******************************** APP-DOWNLOAD ********************************/

    const appdownload_Div = document.querySelector('.app-download-bar-div');
    const appdownload_Text = document.querySelector('.app-download-bar-p');

    appdownload_Div.addEventListener('mouseover', () => {
        appdownload_Text.innerHTML = 'Download CoDriver';
    });

    appdownload_Div.addEventListener('mouseout', () => {
        appdownload_Text.innerHTML = 'Download App';
    });



    jQuery("img").on("taphold", function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
     })
        
