let carousel = ()=>{
    let carouselHolder;
    let carouselTrack;
    let carouselItems;
    let carouselItemsLength;
    let carouselCurrentIndex = -1;
    let lazyLoadingToWait = 0;
    let timeOutId = null;
    const waitTime = 5000;
    function init(){
        carouselHolder = document.querySelector('.carousel');
        carouselTrack = carouselHolder.querySelector('.carousel-track');
        carouselItems = carouselTrack.children;
        carouselItemsLength = carouselItems.length;
        [...carouselItems].forEach((item)=>{
            const nodesWithLazyLoading = item.querySelectorAll('[data-src]');
            nodesWithLazyLoading.forEach(node=>{
                switch (node.tagName) {
                    case 'IMG':
                        node.setAttribute('src', node.dataset.src);
                        lazyLoadingToWait++;
                        node.addEventListener('load', ()=>{
                            lazyLoadingToWait--;
                            if(lazyLoadingToWait === 0){
                               startCarousel();
                            }
                        });
                        break;
                    case 'SOURCE':
                        node.setAttribute('srcset', node.dataset.src);
                        break;
                    default:
                        break;
                }
            });
        });
    }

    function startCarousel(){
        tick();
    }
    function moveSegmentToIndex(index = 0) {
        clearTimeout(timeOutId);
        if(index >= carouselItemsLength){
            index = 0;
        }
        if(index < 0){
            index = carouselItemsLength - 1;
        }
        carouselTrack.style.transform = `translateX(-${index * 100}vw)`;
        carouselCurrentIndex = index;
    }

    function tick(){
        
        timeOutId = setTimeout(()=>{
            moveSegmentToIndex(carouselCurrentIndex + 1);
            tick();
        }, waitTime);
    }

    init();
}

document.addEventListener('DOMContentLoaded', carousel);