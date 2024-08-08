window.onload = function() {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
}



function toggleMenu() {
    
    const menuIcon = document.getElementById("barIcon");
    const crossIcon = document.getElementById("crossIcon");
    const navLink = document.getElementById("nav-link-mobile");
    

    menuIcon.addEventListener('click' , function(){
        navLink.style = " display: block";
        crossIcon.style = "display: block" ; 
        menuIcon.style =  "display : none" ; 
       
    }); 
    crossIcon.addEventListener('click' , function(){
        navLink.style = " display: none" ;
        crossIcon.style = "display: none" ; 
        menuIcon.style =  "display : block" ; 
       
    }); 
}
toggleMenu() ;
