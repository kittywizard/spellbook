import { GiChainedArrowHeads } from "react-icons/gi";

export default function Spell(props) {
    return (
        <div className="spell-box">
            <GiChainedArrowHeads />
            <p className="spell-description">
               {props.spellName}
            </p>
        </div>
    )
}