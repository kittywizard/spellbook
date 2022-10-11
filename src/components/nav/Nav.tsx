import menu from "./assets/menu.svg"
import exit from "./assets/exit.svg"

export default function Nav() {

    function openMenu(bool) {
        const menu = document.querySelector('.nav-list');
        bool ? menu.style.transform = "translateX(0)" : menu.style.transform = "translateX(-100%)";
    }

    return (
        <nav className="menu">
            <img src={menu} className="menu-open" onClick={() => openMenu(true)}/>
            <ul className="nav-list">
                <img src={exit} className="menu-close" onClick={() => openMenu(false)}/>
                <li>
                    <div className="char-info">
                        <p>
                            <span className="char-info-bold">
                                Name:
                            </span> 
                            Tali
                        </p>
                        <p>
                            <span className="char-info-bold">
                                Class:
                            </span> 
                            Sorcerer
                        </p>
                        <p>
                            <span className="char-info-bold">
                                Level:
                            </span> 
                            1
                        </p>
                    </div>
                </li>
                <li>
                    <a href="#">home</a>
                </li>
            </ul>
        </nav>
    )
}