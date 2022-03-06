import React from 'react';
import styled from 'styled-components';

const Promos = () => {
    return (
        <Wrapper>
            <OfferCard>
                <Title>Yield earned</Title>
                <Discripition>
                    Earn up to 2.8% APY on your crypto
                </Discripition>
                <Placeholder/>
                <Additional style={{fontSize:'1.5rem'}} >
                    $0.00066 <span>2.84% APY</span>
                </Additional>
            </OfferCard>
            <OfferCard>
                <Title>Learn and Earn</Title>
                <Discripition>
                    Earn up to 2.8% APY on your crypto
                </Discripition>
                <Placeholder/>
                <Additional style={{color:'#3773f5'}} >
                    Verify Identity
                </Additional>
            </OfferCard>
        </Wrapper>
    );
};

export default Promos;

const Wrapper = styled.div`
    margin-top: 2rem;
    padding-right: 1rem;
`

const OfferCard = styled.div`
    width: 21rem;
    height: 11rem;
    border: 1px solid #282b2f;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.1rem;
`
const Discripition = styled.div`
    font-size: 1.1rem;
`
const Placeholder = styled.div`
    flex: 1;
`
const Additional = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
        color: #8a919a !important ;
        font-size: 1rem;
    }
`