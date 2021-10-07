import styled from 'styled-components';
import styledComponentUtils from 'utils/styled-component-utils';

import { Link } from 'react-router-dom';

const StyledElement = styled.header`
  padding: 12px 0;
  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;

  .Inner {
    width: 1200px;
    margin: 0 auto;
    padding: 0 8px;
    box-sizing: border-box;
    @media ${styledComponentUtils.mq.lg} {
      width: 100%;
    }
  }
  .LogoWrapper {
  }
  .Logo {
    color: #222222;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    padding: 4px 8px;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Header: React.VFC = () => (
  <StyledElement>
    <div className="Inner">
      <div className="LogoWrapper">
        <Link className="Logo" to="/">
          ロゴ
        </Link>
      </div>
    </div>
  </StyledElement>
);

export default Header;
