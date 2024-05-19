//slider file

import {CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";

export default function Slider() {
    return(
  <div>
    <Carousel>
        <CarouselItem>
            <div className="flex justify-center items-center">
                <Image className="" src="/slike/slider1.jpg" alt="slider1" width={2000} height={0}/>
            </div>
        </CarouselItem>

        <CarouselItem>
            <div className="flex justify-center items-center">
                <Image className="" src="/slike/slider2.jpg" alt="slider2" width={2000} height={0} />
            </div>
        </CarouselItem>

        <CarouselItem>
            <div class="flex justify-center items-center">
                <Image className="" src="/slike/slider3.jpg" alt="slider3" width={2000} height={0} />
            </div>
        </CarouselItem>
    </Carousel>
  </div>
   
    )
}