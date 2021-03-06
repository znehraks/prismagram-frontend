import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;  
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 50px;
  position: relative;
  bottom: 0;
`;

const FooterWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: center;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${props => props.theme.darkGreyColor};
  margin-left: 16px;
`;

export default () => (
  <Footer>
    <FooterWrapper>
    <List>
      <ListItem>
        <Link href="#">about us</Link>
      </ListItem>
      <ListItem>
        <Link href="#">support</Link>
      </ListItem>
      <ListItem>
        <Link href="#">press</Link>
      </ListItem>
      <ListItem>
        <Link href="#">api</Link>
      </ListItem>
      <ListItem>
        <Link href="#">jobs</Link>
      </ListItem>
      <ListItem>
        <Link href="#">privacy</Link>
      </ListItem>
      <ListItem>
        <Link href="#">terms</Link>
      </ListItem>
      <ListItem>
        <Link href="#">directory</Link>
      </ListItem>
      <ListItem>
        <Link href="#">profiles</Link>
      </ListItem>
      <ListItem>
        <Link href="#">hashtags</Link>
      </ListItem>
      <ListItem>
        <Link href="#">language</Link>
      </ListItem>
    </List>
    <Copyright>Instaclone {new Date().getFullYear()} &copy;</Copyright>
    </FooterWrapper>
  </Footer>
);