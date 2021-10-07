import styled from 'styled-components';
import Heading001 from 'components/common/molecules-and-atoms/Heading001';

const StyledElement = styled.div``;
const UseState: React.VFC = () => (
  <StyledElement>
    <Heading001 text="カウンター" modifierClassNames={['Lv3']} />
    <div>
      <p>カウンター</p>
    </div>
  </StyledElement>
);

export default UseState;
