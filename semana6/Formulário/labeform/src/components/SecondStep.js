import React from "react";
import OpenQuestions from "./OpenQuestions";
import Options from "./Options";

class SecondStep extends React.Component {
    render() {
        return (
            <div>
                <h3>Second Step - HIGHER EDUCATION INFORMATION</h3>
                <OpenQuestions questions={"5. Which course?"} />
                <OpenQuestions questions={"6. Which Instituion?"} />
            </div>
        );
    }
}

export default SecondStep;
