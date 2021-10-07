import styled from 'styled-components';
import styledComponentUtils from 'utils/styled-component-utils';
import Heading001 from 'components/common/molecules-and-atoms/Heading001';

const StyledElement = styled.div`
  &.Counter {
    display: inline-block;
    border: 1px solid #999999;
  }
  .Heading001 + &.Counter {
    margin-top: 32px;
  }
  .Counter__Body {
    padding: 0 32px;
  }
  .Counter__Count {
    text-align: center;
    ${styledComponentUtils.fontSize(64)}
  }
  .Counter__BodyHeading {
  }
  .Counter__Count {
  }
  .Counter__ButtonRow {
    display: flex;
    padding: 16px 32px;
    border-top: 1px solid #cccccc;
  }
  .Counter__ButtonWrapper {
  }
  .Counter__Button {
    width: 100px;
    padding: 16px;
    cursor: pointer;
  }
`;

type Props = {
  count: number;
  increment: () => void;
  reset: () => void;
};

const Counter: React.VFC<Props> = ({ count, increment, reset }) => (
  <>
    <Heading001 text="カウンター" modifierClassNames={['Lv3']} />
    <StyledElement className="Counter">
      <div className="Counter__Body">
        <p className="Counter__Count">{count}</p>
      </div>
      <ul className="Counter__ButtonRow">
        <li className="Counter__ButtonWrapper">
          <button type="button" className="Counter__Button" onClick={reset}>
            Reset
          </button>
          <button type="button" className="Counter__Button" onClick={increment}>
            +1
          </button>
        </li>
      </ul>
    </StyledElement>
  </>
);

export default Counter;
