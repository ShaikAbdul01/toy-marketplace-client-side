import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const MyToys = () => {
    const user=useContext(AuthContext)
    console.log(user?.email);
    return (
        <div>
            
        </div>
    );
};

export default MyToys;