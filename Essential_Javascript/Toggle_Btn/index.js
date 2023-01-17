const sortBtn = document.getElementById('sort-btn')
const container = document.getElementById('container')
                  
sortBtn.addEventListener('click', function(){
    container.classList.toggle('reverse')
})
