import { useState } from 'react'
import './App.css'

function App() {

    function UserInput() {
        const [input, setInput] = useState<string>("");

        function handleChange() {
            setInput(event.target.value)
        }

        return (
            <>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                />
                <p>User Input: {input}</p>
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
