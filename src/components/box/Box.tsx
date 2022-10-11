import Spell from "../spell/Spell";

export default function Box(props) {
    return (
        <section className="box">
            <div className="spell-level">
                Level {props.user.level}
            </div>
            <div className="spells">
                <Spell />
                <Spell />
                <Spell />
            </div>
        </section>
    )
}