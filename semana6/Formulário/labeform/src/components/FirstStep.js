import React from "react";
import OpenQuestions from "./OpenQuestions";
import Options from "./Options";

class FirstStep extends React.Component {
    render() {
        return (
            <div>
                <h3>First Step - General Data</h3>
                <OpenQuestions questions={"1. What is your name?"} />
                <OpenQuestions questions={"2. How old are you?"} />
                <OpenQuestions questions={"3. What is your e-mail?"} />
                <Options
                    questions={"4. What is your education?"}
                    options={[
                        "Incomplete high school",
                        "Complete high school",
                        "Incomplete higher education",
                        "Complete higher education"
                    ]}
                />
            </div>
        );
    }
}

export default FirstStep;