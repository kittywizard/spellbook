import "./box.css";
import Spell from "../spell/Spell";

export default function Box(props) {
    return (
        <section>
            <div className="spell-level">
                Level 1
            </div>
            <div className="spells">
                <Spell />
                <Spell />
                <Spell />
            </div>
        </section>
    )
}