import { useState } from "react"
import "./Inputs.css"

function Inputs(props) {
    let [name,setName] = useState('')
    let [lastname,setLastName] = useState('')
    let [phone,setPhone] = useState('')
    let [email,setEmail] = useState('')
    let [pas,setPas] = useState('')
    let [click,setClick] = useState(false)

    function Click() {
        setClick(true)
    }

    return (
        <>  
        <div className="inputs">
        <h1>Register</h1>
            <div className="names">
                <input type="text" onChange={(e) => setName(e.target.value)} 
                    value={name} placeholder="First Name"
                    className={click && name ? 'inp' : click ? 'error' : 'inp'}/>
                <input type="text" onChange={(e) => setLastName(e.target.value)} 
                    value={lastname} placeholder="Last Name" 
                    className={click && lastname ? 'inp' : click ? 'error' : 'inp'}/>
            </div>
            <input type="email" onChange={(e) => setEmail(e.target.value)} 
                value={email} placeholder="Email"
                className={click && email.includes('@gmail.com') && email ? 'input' : click || email ? 'err' : 'input'}/>
            <input type="tel" onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9\.]/g, '');
                setPhone(e.target.value)
            }} 
                value={phone} placeholder="Telephon"
                className={click && phone.length >= 9 ? 'input' : click || phone ? 'err' : 'input'}/>
            <input type="password" onChange={(e) => setPas(e.target.value)} 
                value={pas} placeholder="Password"
                className={click && pas.length >= 8 ? 'input' : click || pas ? 'err' : 'input'}/>
            <button className={props.data() ? 'valid' : 'invalid'} onClick={Click} >Login</button>
        </div>
        </>
 )
}

export default Inputs 