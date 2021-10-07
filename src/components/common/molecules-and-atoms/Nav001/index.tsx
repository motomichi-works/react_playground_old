import styled from 'styled-components';
import { Link } from 'react-router-dom';
import paths from 'settings/paths';

const StyledElement = styled.ul`
  .Item {
    padding-left: 1em;
    &:before {
      content: '・';
      margin-left: -1em;
    }
  }
`;

const Nav001: React.VFC = () => (
  <StyledElement>
    {Object.keys(paths).map((strKey) => {
      type Key = keyof typeof paths;
      const key = strKey as Key;

      return (
        <li key={key} className="Item">
          <Link to={paths[key]}>{key}</Link>
        </li>
      );
    })}
  </StyledElement>
);

export default Nav001;
