import styled from 'styled-components';

import Heading001 from 'components/common/molecules-and-atoms/Heading001';

const StyledElement = styled.section`
  padding: 1px 16px;
  background-color: #ffffff;

  // padding-topを補完する初期値
  > :first-child {
    margin-top: 15px;
  }

  // padding-bottomを補完する初期値
  > :last-child {
    margin-bottom: 39px;
  }

  .HeadingWrapper {
  }
  .Body {
    margin-top: 24px;
  }
`;

type Props = {
  sectionHeadingText: string;
};

const BasicOrganism001: React.FC<Props> = ({
  children,
  sectionHeadingText,
}) => (
  <StyledElement>
    <div className="HeadingWrapper">
      <Heading001 text={sectionHeadingText} />
    </div>
    <div className="Body">{children}</div>
  </StyledElement>
);

export default BasicOrganism001;
