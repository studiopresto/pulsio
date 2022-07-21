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

export const showMenu = () => {
    document.addEventListener('DOMContentLoaded', function () {
        let sections = document.querySelectorAll('.delivery');
        sections.forEach(section => {
            let title = section.querySelector('.H-2');
            if(section){
                title.onclick = () => {
                    section.classList.toggle('active');
                }
            }
        })
    })
}