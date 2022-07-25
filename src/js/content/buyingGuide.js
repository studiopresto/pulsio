
export const orderItems = () => {
    let doubleColumnSection =document.querySelector('.delivery.double-column');
    if(doubleColumnSection){
        let listItems = doubleColumnSection.querySelectorAll('ul>li');
        for( let i = 0; i <= listItems.length; i++){
            listItems[i].style.order = `${i + 1}`;
            if(listItems[i].classList.contains('mobile-order')){
                listItems[i].style.order = `${i + 3}`;
            }
        }
    }
}