import Splide from "@splidejs/splide";

export const initPaginationCarousel = () => {
    const reviewsCarousel = document.querySelector('.pagination-carousel');
    if (!!reviewsCarousel) {
        const carousel = new Splide('.pagination-carousel', {
            perPage: 3,
            perMove: 3,
            gap: 32,
            arrows: true,
            speed: 800,
            easing: 'ease',
            updateOnMove: true,
            pauseOnHover: false,
            resetProgress: false,
            breakpoints: {
                991: {
                    autoWidth: true,
                    perPage: 1,
                    perMove: 1,
                    focus: 'center',
                },
                767: {
                    gap: 15,
                    autoWidth: true,
                    perPage: 1,
                    perMove: 1,
                    focus: 'center',
                },
            },
        });

        carousel .on( 'pagination:mounted', function ( data ) {
            data.list.classList.add( 'pagination-fraction' );
            let arrows = document.querySelectorAll('.splide__arrow');
            let totalValue = document.querySelector('.splide__fractions-total');
            let currentValue = document.querySelector('.splide__fractions-current');
            totalValue.textContent = `${data.items.length}`;
            currentValue.textContent = '1';

            for (let arrow of arrows){
                arrow.onclick = () => {
                    const currentPage = data.items.findIndex(object => {
                        return object.button.ariaCurrent === 'true';
                    });
                    currentValue.textContent = String(currentPage + 1);
                }
            }
        } );

        carousel.mount();
    }
}