import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: white;
  padding: 10px 20px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)<{ $isActive: boolean }>`
  text-decoration: ${(props) => (props.$isActive ? 'underline' : 'none')};
  color: black;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 500;
    &:hover {
        background-color: pink;
    }
`;

const TopNav = () => {
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <NavBar>
      <NavList>
        <li>
          <StyledNavLink to='/' $isActive={isActivePath('/')}>
            Explore
          </StyledNavLink>
        </li>
        /
        <li>
          <StyledNavLink to='/promoted' $isActive={isActivePath('/promoted')}>
            Site of the Day
          </StyledNavLink>
        </li>
        /
        <li>
          <StyledNavLink to='/favorites' $isActive={isActivePath('/favorites')}>
            Favorites
          </StyledNavLink>
        </li>
      </NavList>
    </NavBar>
  );
};

export default TopNav;
