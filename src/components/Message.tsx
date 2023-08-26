import { useState } from "react";


function Message() {
    const [name, setName] = useState<string>('');

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        const newName: string = event.target.value;
        setName(newName);
    }

    return (
        <div>
            <br></br>
            <input id="name-input" type="text" onChange={updateName} placeholder="Enter your name" />
            <h1>Hello, {name ? name.concat("!") : "World"}</h1>
        </div>
    );
}

export default Message;