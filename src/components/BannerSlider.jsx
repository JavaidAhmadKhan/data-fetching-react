import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const BannerSlider = () => {
    return (
        <div className='overflow-x-hidden'>
            <Carousel
                className="mt-2 mb-2 mx-4 "
                showDots={true}
                autoPlay
                responsive={responsive}
                sliderClass='gap-2'
            >
                    <img  className="h-auto w-full object-cover" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" alt="" />

                    <img className="h-auto w-full object-cover" src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg" alt="" />

                    <img className="h-auto w-full object-cover" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" alt="" />

                    <img className="h-auto w-full object-cover" src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg" alt="" />
                    <img className="h-auto w-full object-cover" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" alt="" />
                
            </Carousel>
        </div>
    )
}

export default BannerSlider