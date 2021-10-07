import styled from 'styled-components';
// import styledComponentUtils from 'utils/styled-component-utils';

import { Link } from 'react-router-dom';

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
    <li className="Item">
      <Link to="/">top-page</Link>
    </li>
    <li className="Item">
      <Link to="/examples-app-clone">examples-app-clone</Link>
    </li>
    <li className="Item">
      <Link to="/examples-hoge">examples-hoge</Link>
    </li>
  </StyledElement>
);

export default Nav001;
