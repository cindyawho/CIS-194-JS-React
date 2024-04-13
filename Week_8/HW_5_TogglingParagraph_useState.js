import React, {useState} from 'react';

// ----------------------------------------------------
// DO NOT MODIFY THE APP COMPONENT BELOW 
// ----------------------------------------------------
const App = () => {
  return (
    <div>
      <DisplayParagraph
        text={`Singleness of purpose is one of the chief essentials for success in life, no matter what may be one’s aim.`}
        maxLength={25}
      />
    </div>
  );
};
// ----------------------------------------------------
// DO NOT MODIFY THE APP COMPONENT ABOVE ^^^
// ----------------------------------------------------


function DisplayParagraph({ text, maxLength }) {

  // ----------------------------------------------------
  // TODO (A): fill in YOUR_CODE_HERE below. Create a 
  // state, and initialize it to a boolean value for 
  // toggling the paragraph into either a long or short form.
  // HINT: const [...] = useState(...);
  // ----------------------------------------------------
  const [form, setForm] = React.useState(false);

  // ----------------------------------------------------
  // TODO (B): fill in YOUR_CODE_HERE below. This is the bulk
  // of the toggling you need to perform
  // ----------------------------------------------------
  
  function handleClick(){
    if(form == false){
        setForm(true);
        console.log(form);
        let result = text;
        let aText = "...Read Less";
    }
    else if(form == true){
        setForm(false);
        console.log(form);
        let result = text.substr(0, maxLength);
        let aText = "...Read More";
    }
  }
  
  return (
    <div>
        {text}
        {/* {result} */}
        <a onClick={() => handleClick()}>...Read More</a>
    </div>
  );
}

export default App;