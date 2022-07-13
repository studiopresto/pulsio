
export const showText = () => {
    let itemsText = document.querySelectorAll('ul>li>p')
    if(itemsText.length >= 1){
        itemsText.forEach(item => {
            if(item.offsetHeight > 132){
                let parentOfItem= item.parentNode;
                parentOfItem.classList.add('show-text');
                let showMore = document.createElement('span');
                showMore.innerHTML = 'Show more';
                parentOfItem.appendChild(showMore);
                showMore.onclick = () => {
                    let activeItem = document.querySelector('li.active');
                    parentOfItem.classList.add('active');
                    parentOfItem.classList.remove('show-text')
                    if(activeItem){
                        activeItem.classList.remove('active')
                        activeItem.classList.add('show-text')
                    }
                }
            }
        })
    }
}