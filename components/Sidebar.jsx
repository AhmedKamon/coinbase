import Image from 'next/image'
import CoinbaseLogo from '../assets/cb-logo.png'
import styled from 'styled-components'
import {navItems} from '../static/navItems'
import { useState } from 'react'

function Sidebar() {
    const [activeIcon, setActiveIcon] = useState(navItems[0].title)
    return (
        <Wrapper>
            <LogoContainer>
                <Logo style={{width:150}} >
                    <Image   src={CoinbaseLogo} alt='kamon' /> 
                </Logo>
            </LogoContainer>
            <NavItemContainer>
                {navItems.map((item, index) =>(
                    <NavItem key={index} onClick={()=>setActiveIcon(item.title)} >
                        <NavIcon style={{color: item.title === activeIcon && '#3773f5'}} >
                            {item.icon}
                        </NavIcon>
                        <NavTitle>
                            {item.title}
                        </NavTitle>
                    </NavItem>
                ))}
            </NavItemContainer>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    height: 100vh;
    border-right: 1px solid #282b2f;
    width: calc(22rem - 16px -16px);
    padding: 0 1rem ;
    overflow: hidden ;
    
`
const LogoContainer = styled.div`
    margin-top: 1.5rem;
    margin-right: 5rem;
`
const Logo = styled.div`
    object-fit: contain;
    margin-left: 1.5rem;
`
const NavItemContainer = styled.div`
    margin-top: 3rem;

    &:hover{
        cursor: pointer;
    }
`
const NavItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    height: 4rem;

    &:hover{
        background-color: #141519;
    }
`
const NavIcon = styled.div`
    background-color: #141519;
    padding: 0.7rem;
    border-radius: 50%;
    margin: 0 1rem;
    display: grid;
    place-items: center;
`
const NavTitle = styled.div`
    
`