import React from 'react';

const QuestionTile = (props) => {

  let icon, buttonColor;
  if (props.visible) {
    icon = "-";
    buttonColor = "green";
  } else {
    icon = "+";
    buttonColor = "black";
  }

  const answer = (visible) => {
    if(visible){
      return(props.answer)
    }
  }

  return(
    <div classname="row">
      <div className="small-1 column">
        <button className={`${buttonColor} onClick`} onClick={props.onClick}>
          {icon}
        </button>
      </div>
      <h4 className="small-11 large-11 column">
        {props.question}
      </h4>
      <div className="row">
        <div className="small-1 column" />
        <p className="small-11 large-11 column">
          {answer(props.visible)}
        </p>

      </div>
      <div className="line-separator"></div><br />
    </div>

  )
}

export default QuestionTile;
