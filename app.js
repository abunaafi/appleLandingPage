

new Glider(document.querySelector(".glider"),{
    slidesToShow:3,
    slidesToScroll:3,
    dots: '.dots',
    arrows:{
        prev:'.glider-prev',
        next:'.glider-next'
    }
})
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click',() =>{
    navbar.classList.toggle('active')
})



