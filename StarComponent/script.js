let container = document.getElementById('container')

let filled = 0

let star = document.querySelectorAll('.star')

container.addEventListener('click', function(e){
    let currentClick = e.target.dataset.index

    //console.log(currentClick)
    for(let i=0; i<filled; i++){
        star[i].classList.remove('star-color')
    }
    for(let i=0; i<currentClick;i++){
        star[i].classList.add('star-color')
    }
    filled = currentClick
})