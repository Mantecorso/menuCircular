window.addEventListener('load', function() {
    
    let toggle = this.document.querySelector('.toggle');
    let menu = this.document.querySelector('.menu');

    toggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        
    })
})