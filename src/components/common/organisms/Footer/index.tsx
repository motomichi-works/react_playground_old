import styled from 'styled-components';
import styledComponentUtils from 'utils/styled-component-utils';
import { Link } from 'react-router-dom';

const StyledElement = styled.footer`
  padding: 8px 0;
  background-color: #222222;

  .CopyWrapper {
    width: 1200px;
    margin: 0 auto;
    padding: 0 8px;
    box-sizing: border-box;
    text-align: center;
    color: #ffffff;
    @media ${styledComponentUtils.mq.lg} {
      width: 100%;
    }
  }
  .Copy {
    font-size: 12px;
    color: #ffffff;
    text-decoration: none;
  }
`;

const Footer: React.VFC = () => (
  <StyledElement>
    <div className="CopyWrapper">
      <Link className="Copy" to="/">
        &copy;MotomichiWorks
      </Link>
    </div>
  </StyledElement>
);

export default Footer;
