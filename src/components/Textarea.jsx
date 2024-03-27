import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  //   const [text, setText] = useState("");
  //   const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed");
      //   setShowWarning(true);
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ symbol Allowed");
      // setShowWarning(true);
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        spellCheck="false"
        placeholder="Enter your text"
      />
      {<Warning warningText={warningText} />}
    </div>
  );
}
