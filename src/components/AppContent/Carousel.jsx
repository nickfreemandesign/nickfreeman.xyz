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

                {props.assets.map( (asset, idx) => {
                    console.log(asset);
                    
                    return (
                        <div key={`asset-${idx}`}>
                            <img src={asset.img} />
                        </div>
                    )
                })
                }
       
            </Carousel>
        </CarouselContainer>
    )
}

module.exports = CarouselComponent