import React, { useState } from "react"
import styled from "styled-components"

const Nav = styled.nav`
  padding: 30px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`

const Logo = styled.h1`
  font-size: 15px;
  color: black;
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
   font-size: 15px;
`

const Item = styled.li`
display:inline-block;
padding 0px 20px;
`

const Link = styled.a`
  color: black;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
`

const Line = styled.span`
  display: block;
  width: 25px;
  height: 2px;
  margin: 5px;
  background-color:black;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "30%")};
  }

  :nth-child(3) {
    width: ${props => (props.open ? "40%" : "50%")};
  }
`

const Overlay = styled.div`
z-index: 999;
  position: absolute;
  height: ${props => (props.open ? "100vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
`

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  z-index: 999;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`

const Header = () => {
  const [toggle, toggleNav] = useState(false)
  return (
    <>
      <Nav>
        <Logo>blog</Logo>
        <Menu>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Filippa Gistrand
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              Instagram
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              Behance
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Github
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  )
}

export default Header
