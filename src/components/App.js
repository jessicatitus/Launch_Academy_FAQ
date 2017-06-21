import React from 'react';
import QuestionTile from './QuestionTile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      questionOpen: null
    }
//bind
    this.handleQuestionClick = this.handleQuestionClick.bind(this);
  }
  handleQuestionClick(id) {
    if(id === this.state.questionOpen){
      this.setState({questionOpen: null})
    } else {
      this.setState({questionOpen: id})
    }
  }

// call handleQuestionClick on the Onclick of the button. this will change the state
// depending on the state, add a className to the answer html that then we can manipulate in the css
// that way, when the button is clicked, it will change the state and show or hide the answer!

  render() {
    let questionTiles = this.props.data.map(questionObject => {
      let id = questionObject.id;
      let question = questionObject.question;
      let answer = questionObject.answer;
      let handleQuestionClick = () => {
         this.handleQuestionClick(questionObject.id)
      }
      let visible = false;
      if(id === this.state.questionOpen){
        visible = true;
      }
      return(
        <QuestionTile
          key={id}
          question={question}
          answer={answer}
          onClick={handleQuestionClick}
          visible={visible}
        />
      )
    })
    return(
      <div>
        <center>We're here to help</center><br />
        {questionTiles}
      </div>
    )
  }
}

export default App;
