import { Component, ReactElement } from 'react';
import styled from 'styled-components';
import Heading001 from 'components/common/molecules-and-atoms/Heading001';

const StyledElement = styled.div``;

/* eslint-disable react/prefer-stateless-function */
class CounterClass extends Component {
  render(): ReactElement {
    return (
      <StyledElement>
        <Heading001 text="カウンター" modifierClassNames={['Lv3']} />
        <div>
          <p>カウンター</p>
        </div>
      </StyledElement>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default CounterClass;
