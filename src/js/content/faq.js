export const showText = () => {
    setTimeout( function () {
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
    }, 500)
}

export const showMenu = () => {
    let sections = document.querySelectorAll('.delivery');
    let sectionVariant = document.querySelectorAll('.delivery__title');
    if(sectionVariant.length > 0){
        sections.forEach(section => {
            let title = section.querySelector('.delivery__title');
            if(section){
                title.onclick = () => {
                    section.classList.toggle('active');
                }
            }
        })
    }
}

export const textBG = () => {
    setTimeout( function () {
        let sectionsDelivery = document.querySelectorAll('.delivery');
        sectionsDelivery.forEach(section => {
            let title = section.querySelector('.H-2');
            let leftText = section.querySelector('.delivery__title-left');
            let rightText = section.querySelector('.delivery__title-right');
            if(leftText && rightText){
                let titlesArray = '';
                for(let i = 0; i < 15; i++){
                    titlesArray += title.textContent + '';
                }
                let addText = () => {
                    leftText.innerHTML = titlesArray;
                    rightText.innerHTML = titlesArray;
                    let titleWidth = title.offsetWidth + 10 + 'px';
                    rightText.style.right = 'initial';
                    rightText.style.left = titleWidth;
                }
                addText()
                window.addEventListener('resize', addText)
            }
        })
    }, 500)
}