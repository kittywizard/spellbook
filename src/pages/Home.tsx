import {useContext} from "react";
import {Context} from "../Context";

const Home:React.FC = () => {
//home needs to check for status of state
    const {firstTime, setFirstTime} = useContext(Context);
    
    return (
        <section>
         
            Welcome to the Spellbook!
          
        </section>
    )
}

export default Home;