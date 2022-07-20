import Splide from "@splidejs/splide";

export const initPaginationCarousel = () => {
    const reviewsCarousels = document.querySelectorAll('.pagination-carousel');
    if (reviewsCarousels.length > 0) {
        for(let i = 0; i < reviewsCarousels.length; i++ ) {
            function paginationFraction( data ) {
                data.list.classList.add( 'pagination-fraction' );
                let arrows = reviewsCarousels[i].querySelectorAll('.splide__arrow');
                let totalValue = reviewsCarousels[i].querySelector('.splide__fractions-total');
                let currentValue = reviewsCarousels[i].querySelector('.splide__fractions-current');
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
            }
            new Splide(reviewsCarousels[i], {
                perPage: 3,
                perMove: 3,
                gap: 32,
                arrows: true,
                speed: 800,
                easing: 'ease',
                updateOnMove: true,
                pauseOnHover: false,
                resetProgress: false,
                drag: false,
                breakpoints: {
                    991: {
                        perPage: 2,
                        perMove: 2,
                    },
                    767: {
                        gap: 15,
                        perPage: 1,
                        perMove: 1,
                    },
                },
            })
                .on( 'pagination:mounted', function (data) {
                paginationFraction( data )
            } ).mount()
        }

    }
}