import {type ChangeEvent, useState} from 'react'
import './App.css'

function App() {

    function UserInput() {
        const [input, setInput] = useState<string>("");

        function handleChange(e: ChangeEvent<HTMLInputElement>) {
            setInput(e.target.value);
        }

        return (
            <>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                />
                <p>User Input: {input}</p>
                <div>
                    {input.split('').map((char : string) => {
                        const srcString = `./assets/${char.toUpperCase()}.png`;
                        const altString = `NO IMAGE`

                        return (
                            <img
                                src={srcString}
                                alt={altString}
                                className="image"
                            />
                        );
                    })}
                </div>
            </>
        );
    }

    return (
    <>
        <h1>My First React App</h1>
        <UserInput/>
    </>
    )
}

export default App
