import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    grid-area: carousel;
`;

const Carousel = (props) => {
    return (
        <CarouselContainer>
            carousel
        </CarouselContainer>
    )
}

module.exports = Carousel