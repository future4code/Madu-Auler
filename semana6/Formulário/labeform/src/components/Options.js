import React from "react";

export default function Options(props) { //export default is used to export a single class, function or primitive from a script file.
    return (
        <div>
            <p>{props.questions}</p>
            <select>
                {props.options.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}
