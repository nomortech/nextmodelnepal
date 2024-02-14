"use client"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { useCallback, useEffect, useRef, useState } from "react";
// import "swiper/css/navigation";


const Testimonials = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        // Update slidesPerView based on viewport width
        const handleResize = () => {
        if (window.innerWidth <= 768) {
            setSlidesPerView(1);
        } else {
            setSlidesPerView(2); // Or set to your desired number of slides per view on desktop
        }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call handleResize initially

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sliderRef = useRef<any>(null);
    // const sliderRef: React.MutableRefObject<Swiper | null> = useRef<Swiper | null>(null);

    const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
        sliderRef.current?.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (sliderRef.current && sliderRef.current.swiper) {
          sliderRef.current.swiper.slideNext();
        }
    }, []);

    return (
        <div className="mb-[4rem]">
            <h1 className="text-[10vw] font-bold text-[#AE97750D] w-full text-center block">
                Next Models Nepal
            </h1>

            <div className="px-2 md:px-[8rem] py-[4rem] flex justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-balance capitalize">Rave reviews of our rising stars</h1>
                    <p>Our success is best reflected in the words of our own models. See what our talents have to say about their journey with Next Models Nepal.</p>
                </div>
                <div className="flex gap-3 items-center">
                    <div
                        className="p-3 bg-tertiary rounded-full swiper-button-prev"
                        onClick={handlePrev}
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        className="p-3 bg-tertiary rounded-full swiper-button-next"
                        onClick={handleNext}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-[8rem] relative">
                <div className="absolute flex items-center -left-8 top-1/2 transform -translate-y-1/2 transform rotate-90 z-10">
                    <span className="text-black bg-white p-2">Testimonials</span>
                </div>

                <Swiper
                    ref={sliderRef}
                    spaceBetween={30}
                    slidesPerView={slidesPerView}
                    slidesPerGroup={1}
                    // navigation={{
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // }}
                    modules={[Navigation]}
                    // navigation={true}
                    className="flex flex-row"
                >
                    <SwiperSlide>
                    <div className="bg-[#282828] p-8 rounded-lg">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                        urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        </p>
                        <br />
                        <h1 className="text-2xl text-white">People Name</h1>
                        <p className="text-sm text-white">Marketing Manager</p>
                    </div>
                    {/* Additional testimonials can be added similarly */}
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="bg-[#282828] p-8 rounded-lg">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                        urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        </p>
                        <br />
                        <h1 className="text-2xl text-white">People Name</h1>
                        <p className="text-sm text-white">Marketing Manager</p>
                    </div>
                    {/* Additional testimonials can be added similarly */}
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="bg-[#282828] p-8 rounded-lg">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                        urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        </p>
                        <br />
                        <h1 className="text-2xl text-white">People Name</h1>
                        <p className="text-sm text-white">Marketing Manager</p>
                    </div>
                    {/* Additional testimonials can be added similarly */}
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="bg-[#282828] p-8 rounded-lg">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                        urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        </p>
                        <br />
                        <h1 className="text-2xl text-white">People Name</h1>
                        <p className="text-sm text-white">Marketing Manager</p>
                    </div>
                    {/* Additional testimonials can be added similarly */}
                    </SwiperSlide>
                    {/* Add more SwiperSlides for additional testimonials */}
                </Swiper>
            </div>

            {/* <div className="flex px-[8rem] gap-3 relative">
                <div className="absolute flex items-center -left-8 top-1/2 transform -translate-y-1/2 transform rotate-90">
                    <span className="text-black bg-white p-2">Testimonials</span>
                </div>
                <div className="flex-1 bg-[#282828] p-8 rounded-lg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
                    <br />
                    <h1 className="text-2xl text-white">People Name</h1>
                    <p className="text-sm text-white">Marketing Manager</p>
                </div>
                <div className="flex-1 bg-[#282828] p-8 rounded-lg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
                    <br />
                    <h1 className="text-2xl text-white">People Name</h1>
                    <p className="text-sm text-white">Marketing Manager</p>
                </div>
            </div> */}
        </div>
    )
}

export default Testimonials;