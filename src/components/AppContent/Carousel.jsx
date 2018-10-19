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

const img1 = require('-!file-loader?name=restek-1!../../assets/restek-1.png');
const img2 = require('-!file-loader?name=restek-2!../../assets/restek-2.png');

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