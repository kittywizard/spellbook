import {useContext} from "react";
import {Context} from "../Context";
import  Box from "../components/box/Box";

const Home:React.FC = () => {
//home needs to check for status of state
    const {firstTime, setFirstTime} = useContext(Context);
    
    return (
        <section>
         
            Welcome to the Spellbook!
          
            <section className="box-container">
                 <Box />
            </section>
        </section>
    )
}

export default Home;