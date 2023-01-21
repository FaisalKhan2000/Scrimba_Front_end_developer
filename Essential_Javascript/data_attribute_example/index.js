document.addEventListener('click', function(e) {
    if (e.target.dataset.shareIcon){
        console.log(e.target.dataset.shareIcon)
    }
    else if (e.target.dataset.heart){
        console.log(e.target.dataset.heart)
    }
})



