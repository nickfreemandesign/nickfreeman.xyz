import React from 'react';
import styled from 'styled-components';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselContainer = styled.div`
    grid-area: carousel;
    p.carousel-status {
        top: 0;
    }
`;

const CarouselComponent = (props) => {
    return (
        <CarouselContainer>
            <Carousel>
                <div>
                    <img src='https://s3.amazonaws.com/nickfreemandesign/restek/restek-1.png' />
                </div>
                <div>
                    <img src='https://s3.amazonaws.com/nickfreemandesign/restek/restek-2.png' />
                </div>
                <div>
                    <img src='https://s3.amazonaws.com/nickfreemandesign/restek/restek-1.png' />
                </div>
            </Carousel>
        </CarouselContainer>
    )
}

module.exports = CarouselComponent