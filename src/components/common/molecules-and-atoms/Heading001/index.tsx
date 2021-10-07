import styled from 'styled-components';
import styledComponentUtils from 'utils/styled-component-utils';

const StyledElement = styled.h2`
  &.Heading001 {
    font-weight: bold;
    color: #222222;
    border-bottom: 1px solid #cccccc;
    padding: 0.1em 0;
    line-height: 1.4;
    word-break: break-all;
    ${styledComponentUtils.fontSize(28)}
  }

  &.Lv3 {
    ${styledComponentUtils.fontSize(24)}
  }
  &.Lv4 {
    ${styledComponentUtils.fontSize(21)}
  }
  &.Lv5 {
    ${styledComponentUtils.fontSize(18)}
  }
  &.Lv6 {
    ${styledComponentUtils.fontSize(16)}
  }
`;

type Props = {
  text: string;
  modifierClassNames?: string[];
};

const Heading001: React.VFC<Props> = ({ text, modifierClassNames = [] }) => (
  <StyledElement className={['Heading001', ...modifierClassNames].join(' ')}>
    {text}
  </StyledElement>
);

export default Heading001;
