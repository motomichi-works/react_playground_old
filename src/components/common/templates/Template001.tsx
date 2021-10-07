import styled from 'styled-components';
import styledComponentUtils from 'utils/styled-component-utils';

import Footer from 'components/common/organisms/Footer';
import Header from 'components/common/organisms/Header';
import PageHeading from 'components/common/organisms/PageHeading';

const StyledElement = styled.div`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f7f7f7;
  @media ${styledComponentUtils.mq.md} {
    min-height: 0;
  }
  .PageHeadingWrapper {
    width: 1200px;
    margin: 40px auto 0;
    padding: 0 8px;
    @media ${styledComponentUtils.mq.lg} {
      width: 100%;
    }
  }
  .MainContentsWrapper {
    padding: 40px 8px 120px;
    width: 1200px;
    margin: 0 auto;
    @media ${styledComponentUtils.mq.lg} {
      width: 100%;
    }
  }
  .FooterWrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`;

type Props = {
  pageHeadingText: string;
};

const Template001: React.FC<Props> = ({ children, pageHeadingText }) => (
  <StyledElement>
    <Header />
    <div className="PageHeadingWrapper">
      <PageHeading text={pageHeadingText} />
    </div>
    <div className="MainContentsWrapper">{children}</div>
    <div className="FooterWrapper">
      <Footer />
    </div>
  </StyledElement>
);

export default Template001;
