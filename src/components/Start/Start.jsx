import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './Start.css';

function Start(){
    const [nameInput, setInputName] = useState('');
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setUser(nameInput.trim());
        navigate('/game');
    }

    return (
        <>
            <div className="start-container">
            <form onSubmit={handleSubmit} className="start-form">
                <input type="text" 
                placeholder="Your Name" 
                value={nameInput}
                onChange={(e)=>setInputName(e.target.value)}
                required />
                <br></br>
                <button type="submit">Get Your Riddle</button>
            </form>
            </div>
        </>
    );
}
export default Start;