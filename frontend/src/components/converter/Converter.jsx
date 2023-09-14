import React, { useState } from 'react'
import "./converter.css"
import unicodeToDlManel from './unicodeToDlManel'
import singlishToUnicode from './singlishToUnicode';

function Converter() {

    const [singlishText, setSinglishText] = useState(''); // Singlish text
    const [unicodeText, setUnicodeText] = useState(''); // Unicode text

    // Singlish conversion
    const handleSinglishInputChange = (event) => {
        const newValue = event.target.value;

        const newConvertedText = singlishToUnicode(newValue);
        setSinglishText(newConvertedText);
    };

    // Unicode conversion
    const handleUnicodeInputChange = (event) => {
        const newValue = event.target.value;

        const newConvertedText = unicodeToDlManel(newValue);
        setUnicodeText(newConvertedText);
    };

  return (
    <div className="converter-container">
        <div className="convert-boxes">
            <div className="input-box">
                <div className="text-area">
                    <textarea
                        id='convert-input'
                        placeholder="Singlish වලින් ලියන්න..."
                        onChange={handleUnicodeInputChange}
                    />
                </div>
            </div>

            <div className="output-box">
                <div className="text-area">
                    <textarea
                        id='convert-input'
                        placeholder="hqksfldaâ j,ska¡¡¡"
                        value={unicodeText}
                        readOnly
                    />
                </div>
                <div className="toolbar">
                    <select className="select-converter">
                        <option value="en">English</option>
                        <option value="si">සිංහල</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Converter