import React, {useState} from 'react';

const Formulario = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log(newUser);
    }


    return (
        <div className="container">
        <form onSubmit={handleSubmit}> 
            <div className="form-group">
                <label>First Name: </label>
                <input type="text" className="form-control" onChange={(e) => setFirstName(e.target.value)} 
                value={firstName} required />
                {firstName.length <= 2 ? <div style={{color: "red"}}>Your first name must have at least 2 caracters</div>
                : ""}   
            </div>
            <br></br>
            <div className="form-group">
                <label>Last Name: </label>
                <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)} 
                value={lastName} required />
                {lastName.length <= 2 ? <div style={{color: "red"}}>Your last name must have at least 2 caracters</div>
                : ""}    
            </div>
            <br></br>
            <div className="form-group">
                <label>E-Mail: </label>
                <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} 
                value={email} required/>
                {email.length <= 5 ? <div style={{color: "red"}}>Your E-Mail must have at least 5 caracters</div>
                : ""}    
            </div>
            <br></br>
            <div className="form-group">
                <label>Password: </label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} 
                value={password} required/>
                {password.length < 8 ? <div style={{color: "red"}}>Your password must have 8 caracters at least</div>
                : "" }
            </div>
            <br></br>
            <div className="form-group">
                <label>Confrim Password: </label>
                <input type="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} 
                value={confirmPassword} />
                {confirmPassword === password ? <div style={{color: "green"}}>Valid</div>
                : <div style={{color: "red"}}>Confirm Password is not same as the Password</div>}
            </div>
            <br></br>
            <input type="submit" className="btn btn-warning" value="Create User" />

        </form>
        </div>
    );

}
export default Formulario;