import styled from 'styled-components';
import styledComponentUtils from 'utils/styled-component-utils';

const Heading = styled.h1`
  ${styledComponentUtils.fontSize(32)}
`;

type Props = {
  text: string;
};

const PageHeading: React.VFC<Props> = ({ text }) => <Heading>{text}</Heading>;

export default PageHeading;
