import React, { useState } from "react";
import "../../styling/Sub-items/BinaryArith.css";

function BinaryArith() {
    const operations = [
        { name: "Addition", value: "add" },
        { name: "Subtraction", value: "sub" },
        { name: "Multiplication", value: "mul" },
        { name: "Division", value: "div" },
        { name: "power", value: "pow" },
        { name: "and", value: "and" },
        { name: "or", value: "or" },
        { name: "xor", value: "xor" },
        { name: "not", value: "not" },
        { name: "left shift", value: "leftshift" },
        { name: "right shift", value: "rightshift" }
    ]

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [binaryOutput, setBinaryOutput] = useState("");
    const [decimalOutput, setDecimalOutput] = useState("");
    const [hexOutput, setHexOutput] = useState("");
    const [operation, setOperation] = useState("add");

    const calculate = (e: React.FormEvent) => {
        e.preventDefault();
        if (isNaN(Number(input1)) || isNaN(Number(input2))) {
            setBinaryOutput("Invalid input");
            setDecimalOutput("Invalid input");
            setHexOutput("Invalid input");
            return;
        }

        const operation = (document.getElementById("operation") as HTMLSelectElement).value;
        let result = 0;

        if (operation === "add") {
            result = parseInt(input1, 2) + parseInt(input2, 2);
        } else if (operation === "sub") {
            result = parseInt(input1, 2) - parseInt(input2, 2);
        } else if (operation === "mul") {
            result = parseInt(input1, 2) * parseInt(input2, 2);
        } else if (operation === "div") {
            result = parseInt(input1, 2) / parseInt(input2, 2);
        } else if (operation === "pow") {
            result = Math.pow(parseInt(input1, 2), parseInt(input2, 2));
        } else if (operation === "and") {
            result = parseInt(input1, 2) & parseInt(input2, 2);
        } else if (operation === "or") {
            result = parseInt(input1, 2) | parseInt(input2, 2);
        } else if (operation === "xor") {
            result = parseInt(input1, 2) ^ parseInt(input2, 2);
        } else if (operation === "not") {
            result = ~parseInt(input1, 2);
        } else if (operation === "leftshift") {
            result = parseInt(input1, 2) << parseInt(input2, 2);
        } else if (operation === "rightshift") {
            result = parseInt(input1, 2) >> parseInt(input2, 2);
        }

        setBinaryOutput(result.toString(2));
        setDecimalOutput(result.toString(10));
        setHexOutput(result.toString(16).toUpperCase());
    }

    const reset = (e: React.MouseEvent) => {
        e.preventDefault();
        setInput1("");
        setInput2("");
        setBinaryOutput("");
        setDecimalOutput("");
        setHexOutput("");
        setOperation("add");
    };

    return (
        <div className="binaryarith">
            <div className="binaryarith-container">
                <form className="calc-form" onSubmit={calculate}>
                    <div className="form-control">
                        <label htmlFor="input">Enter Value</label>
                        <input 
                            type="text" 
                            name="input1" 
                            id="input1"  
                            value={input1} 
                            onChange={(e) => setInput1(e.target.value)}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="input">Enter Value</label>
                        <input 
                            type="text" 
                            name="input2" 
                            id="input2"  
                            value={input2} 
                            onChange={(e) => setInput2(e.target.value)}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="operation">Operation</label>
                        <select 
                            name="operation" 
                            id="operation"
                            value={operation}
                            onChange={(e) => setOperation(e.target.value)}
                        >
                            {operations.map((operation, index) => (
                                <option key={index} value={operation.value}>{operation.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <button type="submit">Calculate</button>
                        <button type="reset" onClick={reset}>Reset</button>
                    </div>
                    <div className="form-control">
                        <label htmlFor="output">Binary Output</label>
                        <textarea name="bi-output" id="bi-output" readOnly value={binaryOutput}></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="output">Decimal Output</label>
                        <textarea name="dec-output" id="dec-output" readOnly value={decimalOutput}></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="output">Hex Output</label>
                        <textarea name="hex-output" id="hex-output" readOnly value={hexOutput}></textarea>
                    </div>
                </form>
            </div>
        </div>
      );
}

export default BinaryArith;