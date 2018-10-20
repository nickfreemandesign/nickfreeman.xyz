import React from 'react';
import styled from 'styled-components';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselContainer = styled.div`
    grid-area: carousel;
    max-width: 650px;
    .carousel .carousel-slider{
        max-height: 400px!important;
    }
    .carousel .slide img {
        max-height: 400px!important;
        width: auto!important;
    }
    p.carousel-status {
        top: 0;
    }
    li.thumb {
        max-height: 50px!important;
    }

`;

const CarouselComponent = (props) => {
    console.log(props);
    
    return (
        <CarouselContainer>
            <Carousel infiniteLoop={true}>

                {props.assets.map( (asset, idx) => {
                    
                    return (
                        <div key={`asset-${idx}`}>
                            <img src={asset.thumb} />
                        </div>
                    )
                })
                }
       
            </Carousel>
        </CarouselContainer>
    )
}

module.exports = CarouselComponent