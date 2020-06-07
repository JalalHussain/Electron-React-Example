import React, {useState} from 'react';

function Hooks (){
    const [buttonText, setButtonText] = useState("Click, I will show the name");

    function handleClick() {
        return setButtonText("Jalal Hussain");
    }
    return (
        <div className="container">
            <div className="row mt-5">
                <button onClick={handleClick}>{buttonText}</button>
            </div>
        </div>
    );
}

export default Hooks;
