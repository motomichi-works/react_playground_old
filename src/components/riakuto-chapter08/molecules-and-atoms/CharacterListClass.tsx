import { Component, ReactElement } from 'react';
import styled from 'styled-components';
import Heading001 from 'components/common/molecules-and-atoms/Heading001';

export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
};

type Props = {
  school: string;
  characters: Character[];
};

const StyledElement = styled.div`
  .Heading {
    font-weight: bold;
  }
  .List {
    margin-top: 1em;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class CharacterListClass extends Component<Props> {
  render(): ReactElement {
    const { school, characters } = this.props;

    return (
      <StyledElement>
        <Heading001 text={school} modifierClassNames={['Lv3']} />
        {characters.map((character) => (
          <ul key={character.id} className="List">
            <li>{character.name}</li>
            <li>{character.grade}年生</li>
            <li>{character.height ? character.height : '???'}cm</li>
          </ul>
        ))}
      </StyledElement>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default CharacterListClass;
