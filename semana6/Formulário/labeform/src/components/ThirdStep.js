import React from "react";
import OpenQuestions from "./OpenQuestions";
import Options from "./Options";

class ThirdStep extends React.Component {
    render() {
        return (
            <div>
                <h3> Third Step - GENERAL TEACHING INFORMATION</h3>
                <OpenQuestions
                    questions={"5. Why didn't you finish an graduation course?"}
                />
                <Options
                    questions={"6. Have you taken any complementary courses?"}
                    options={["None", " Technical course", "English course"]}
                />
            </div>
        );
    }
}

export default ThirdStep;
