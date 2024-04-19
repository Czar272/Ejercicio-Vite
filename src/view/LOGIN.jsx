import { useState } from "react"

function Login(){

    const [text, setText] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const hiddenText = inputValue.replace(/./g, '*');
        setText(hiddenText);
    };
    return(
        <>
            <div className="cardC">

                <div className="logintxt"> <h4>Login</h4></div>
                <textarea className="txtbox" rows={1} placeholder="Usuario"></textarea>
                <textarea className="txtbox" rows={1} placeholder="Contraseña" value={text} onChange={handleChange}></textarea>
                <div className="contBtns">
                    <button className='btn'>Log in</button>
                    <button className='btn'>Sign in</button>
                </div>

            </div>
        </>
        
    )
}

export default Login