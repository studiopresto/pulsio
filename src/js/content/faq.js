export const showText = () => {
    document.addEventListener('DOMContentLoaded', function () {
        let itemsText = document.querySelectorAll('ul>li>p')
        if(itemsText.length >= 1){
            itemsText.forEach(item => {
                if(item.offsetHeight >= 154){
                    let itemHeight = item.offsetHeight + 'px';
                    let parentOfItem= item.parentNode;
                    parentOfItem.classList.add('show-text');
                    let showMore = document.createElement('span');
                    showMore.innerHTML = 'Show more';
                    parentOfItem.appendChild(showMore);
                    showMore.onclick = () => {
                        let activeItem = document.querySelector('li.active');
                        parentOfItem.classList.add('active');
                        item.style.maxHeight = itemHeight;
                        showMore.innerHTML = 'Hide';
                        parentOfItem.classList.remove('show-text')
                        if(activeItem){
                            let activeItemStyle = activeItem.querySelector('p');
                            let activeBtn = activeItem.querySelector('span');
                            activeItemStyle.style.maxHeight = '';
                            activeItem.classList.remove('active');
                            activeItem.classList.add('show-text');
                            activeBtn.innerHTML = 'Show more';
                        }
                    }
                }
            })
        }
    })
}

// export const countItems = () => {
//     let section =document.querySelector('.delivery')
//     let items = section.querySelectorAll('ul>li');
//     for(let i = 0; i <= items.length; i++){
//         items[i].textContent = `${i+1}`;
//     }
// }