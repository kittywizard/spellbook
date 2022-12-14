import Spell from "../spell/Spell";

import {Context} from "../../Context";
import {useContext} from "react";

const Box:React.FC = () => {

    const {user} = useContext(Context);

    return (
        <section className="box">
            <div className="spell-level">
                Level {user.level}
            </div>
            <div className="spells">
                <Spell />
                <Spell />
                <Spell />
            </div>
        </section>
    )
}

export default Box;