import menu from "./assets/menu.svg";
import exit from "./assets/exit.svg";

import {Context} from "../../Context";
import {useContext} from "react";


const Nav:React.FC = () => {

    const {user} = useContext(Context);

    function openMenu(bool: boolean) {
        const menu:HTMLUListElement = document.querySelector('.nav-list') as HTMLUListElement;
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
                            {user.name}
                        </p>
                        <p>
                            <span className="char-info-bold">
                                Class:
                            </span> 
                            {user.class}
                        </p>
                        <p>
                            <span className="char-info-bold">
                                Level:
                            </span> 
                            {user.level}
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

export default Nav;