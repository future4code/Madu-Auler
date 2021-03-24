import React from "react";

export default function OpenQuestions(props) { //export default is used to export a single class, function or primitive from a script file.
  return (
    <div>
      <p>{props.questions}</p>
      <input onChange={props.onChange} value={props.value} />
    </div>
  );
}
