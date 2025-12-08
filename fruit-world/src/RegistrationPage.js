import { useState } from "react";
import "./styles/LoginPage.css"

export default function RegistrationPage() {
    const [FirstName, setFirstName] = useState("");
    const [Lastname, setLastName] = useState("");
    const [EMailID, setEmail] = useState("");
    const [MobileNo, setMobileNo] = useState("");
    const [BirthDate, setBirthDate] = useState("");
    const [Address, setAddress] = useState("");
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Register Successfully!");
    };


    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="title">Register to Fruit World !</h1>

                <form onSubmit={handleSubmit}>
                    <label>FirstName</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label>Lastname</label>
                    <input
                        type="text"
                        placeholder="Enter LastName"
                        value={Lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        value={EMailID}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Phone Number</label>
                    <input
                        type="text"
                        placeholder="Enter phoneno"
                        value={MobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        required
                    />

                    <label>BirthDate</label>
                    <input
                        type="date"
                        placeholder="Select Birthdate"
                        value={BirthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                    />   <label>Address</label>
                    <input
                        type="text"
                        placeholder="Enter Address"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <label>username</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="text"
                        placeholder="Enter Password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>ConfirmPassword</label>
                    <input
                        type="text"
                        placeholder=" confirm Password"
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />


                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>

    );
}

