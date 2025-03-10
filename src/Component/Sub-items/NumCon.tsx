import React, { useState } from "react";
import "../../styling/Sub-items/NumCon.css";

function NumCon() {
    const operations = [
        { name: "Binary", value: "bin" },
        { name: "Decimal", value: "dec" },
        { name: "Octal", value: "octal" },
        { name: "Hexadecimal", value: "hex" },
        { name: "ASCII", value: "ascii" }
    ]

    const [from, setFrom] = useState("bin");
    const [to, setTo] = useState("dec");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [steps, setSteps] = useState("");

    const generateSteps = (baseInput: string, fromBase: number | undefined, toBase: number) => {
        const baseMap = { 2: "₂", 10: "₁₀", 8: "₈", 16: "₁₆" };
        let stepDetails = `(${baseInput})${baseMap[fromBase as keyof typeof baseMap ?? 10]} = `;
        const parsedValue = parseInt(baseInput, fromBase);

        if (fromBase === 2 && toBase === 10) {
            const digits = baseInput.split("").reverse();
            const stepBreakdown = digits
                .map((digit, index) => `(${digit} × 2^${index})`)
                .join(" + ");
            stepDetails += `${stepBreakdown} = (${parsedValue})${baseMap[toBase]}`;
        }

        return stepDetails;
    }

    const convert = (e: React.FormEvent) => {
        e.preventDefault();
        if (isNaN(Number(input)) && from !== "ascii") {
            setOutput("Invalid input");
            setSteps("Invalid input. Ensure the input matches the selected format.");
            return;
        }

        let conversionSteps = "";

        if (from === "bin") {
            if (to === "dec") {
                setOutput(parseInt(input, 2).toString());
                conversionSteps = generateSteps(input, 2, 10);
            } else if (to === "octal") {
                setOutput(parseInt(input, 2).toString(8));
                conversionSteps = 'coming soon';
            } else if (to === "hex") {
                setOutput(parseInt(input, 2).toString(16));
                conversionSteps = 'coming soon';
            } else if (to === "ascii") {
                setOutput(String.fromCharCode(parseInt(input, 2)));

            }
        } else if (from === "dec") {
            if (to === "bin") {
                setOutput(Number(input).toString(2));
            } else if (to === "octal") {
                setOutput(Number(input).toString(8));
            } else if (to === "hex") {
                setOutput(Number(input).toString(16));
            } else if (to === "ascii") {
                setOutput(String.fromCharCode(Number(input)));
            }
        } else if (from === "octal") {
            if (to === "bin") {
                setOutput(parseInt(input, 8).toString(2));
            } else if (to === "dec") {
                setOutput(parseInt(input, 8).toString());
            } else if (to === "hex") {
                setOutput(parseInt(input, 8).toString(16));
            } else if (to === "ascii") {
                setOutput(String.fromCharCode(parseInt(input, 8)));
            }
        } else if (from === "hex") {
            if (to === "bin") {
                setOutput(parseInt(input, 16).toString(2));
            } else if (to === "dec") {
                setOutput(parseInt(input, 16).toString());
            } else if (to === "octal") {
                setOutput(parseInt(input, 16).toString(8));
            } else if (to === "ascii") {
                setOutput(String.fromCharCode(parseInt(input, 16)));
            }
        } else if (from === "ascii") {
            if (to === "bin") {
                setOutput(input.charCodeAt(0).toString(2));
            } else if (to === "dec") {
                setOutput(input.charCodeAt(0).toString());
            } else if (to === "octal") {
                setOutput(input.charCodeAt(0).toString(8));
            } else if (to === "hex") {
                setOutput(input.charCodeAt(0).toString(16));
            }
        }
        setSteps(conversionSteps);
    };

    const reset = (e: React.MouseEvent) => {
        e.preventDefault();
        setInput("");
        setOutput("");
        setSteps("");
    };

    const swap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
        setInput("");
        setOutput("");
        setSteps("");
    };

    return (
        <div className="numcon">
            <div className="numcon-container">
                <form className="calc-form" onSubmit={convert}>
                    <div className="form-control select-group">
                        <label htmlFor="value1">From</label>
                        <select name="value1" id="value1" value={from} onChange={(e) => setFrom(e.target.value)}>
                            {operations.map((operation, index) => (
                                <option key={index} value={operation.value}>{operation.name}</option>
                            ))}
                        </select>
                        <label htmlFor="value2">To</label>
                        <select name="value2" id="value2" value={to} onChange={(e) => setTo(e.target.value)}>
                            {operations.map((operation, index) => (
                                <option key={index} value={operation.value}>{operation.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="input">Enter Value</label>
                        <input type="text" name="input" id="input" value={input} onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <button type="submit">Convert</button>
                        <button type="reset" onClick={reset}>Reset</button>
                        <button type="button" onClick={swap}>Swap</button>
                    </div>
                    <div className="form-control">
                        <label htmlFor="output">Output</label>
                        <textarea name="output" id="output" readOnly value={output}></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="steps">Calculation Steps</label>
                        <textarea name="steps" id="steps" readOnly value={steps}></textarea>
                    </div>
                </form>
            </div>
        </div>
      );
}

export default NumCon;