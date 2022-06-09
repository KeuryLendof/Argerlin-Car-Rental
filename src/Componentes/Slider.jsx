import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";



function Slider(){

  return(
    <>
      <div className="containerSlider">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <img src="" alt="" class="card-img"/>
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">David Dell</h2>
                <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                <button class="button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <img src="" alt="" class="card-img"/>
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">David Dell</h2>
                <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                <button class="button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <img src="" alt="" class="card-img"/>
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">David Dell</h2>
                <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                <button class="button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <img src="" alt="" class="card-img"/>
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">David Dell</h2>
                <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                <button class="button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <img src="" alt="" class="card-img"/>
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">David Dell</h2>
                <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                <button class="button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <img src="" alt="" class="card-img"/>
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">David Dell</h2>
                <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                <button class="button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <img src="" alt="" class="card-img"/>
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">David Dell</h2>
                <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                <button class="button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <img src="" alt="" class="card-img"/>
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">David Dell</h2>
                <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                <button class="button">View More</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Slider;