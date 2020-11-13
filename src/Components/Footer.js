import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width:100%;
`;

const Footer = styled.footer`
  margin:0 auto;
  padding-left:25px
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  margin: 50px 0px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -238px;
`;

const List = styled.ul`
overflow:hidden;
`;

const ListItem = styled.li`
float:left;
  &:not(:last-child) {
      margin-right: 16px;
  }
  padding:5px;
`;

const Link = styled.a`
  color: white;
`;

const Copyright = styled.span`
  display:block;
  text-align:center;
  margin-left:5px;
  margin-top:10px;
  color: ${props => props.theme.darkGreyColor};
`

export default () => (
    <Footer>
      <Wrapper>
  <List>
  <ListItem>
    <Link href="#">about us</Link>
  </ListItem>
  <ListItem>
    <Link href="#">press</Link>
  </ListItem>
  <ListItem>
    <Link href="#">api</Link>
  </ListItem>
  <ListItem>
    <Link href="#">privacy</Link>
  </ListItem>
  <ListItem>
    <Link href="#">terms</Link>
  </ListItem>
  <ListItem>
    <Link href="#">hashtags</Link>
  </ListItem>
  <ListItem>
    <Link href="#">language</Link>
  </ListItem>
</List>
</Wrapper>
    <Copyright>DANCEGRAM {new Date().getFullYear()} &copy;</Copyright>
  </Footer>  
)