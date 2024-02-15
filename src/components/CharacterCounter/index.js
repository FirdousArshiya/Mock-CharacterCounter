import {Component} from 'react'
import {v4} from 'uuid'
import UserEnteredInputList from '../UserEnteredInputList'

import {
  BgContainer,
  LeftPanel,
  InfoCardContainer,
  Info,
  UserInputsList,
  RightPanel,
  CounterHeading,
  AddInputContainer,
  Input,
  AddInputButton,
  EmptyImage,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    characterList: [],
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {characterList} = this.state
    return characterList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      characterList.map(eachItem => (
        <UserEnteredInputList key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <LeftPanel>
          <InfoCardContainer>
            <Info>
              Count the characters like a <br />
              Boss...
            </Info>
          </InfoCardContainer>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </LeftPanel>
        <RightPanel>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the characters here"
            />
            <AddInputButton>Add</AddInputButton>
          </AddInputContainer>
        </RightPanel>
      </BgContainer>
    )
  }
}

export default CharacterCounter
