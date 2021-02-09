import styled from "styled-components";
import { Github } from "@styled-icons/feather";


const Header = () => {

    const GitLogo = styled(Github)`
            margin-top: 5px;
            width: 30px;
            height: 30px;
            transition: all .5s ease;
            fill: transparent;

            &:hover{
                fill: #fff;
                transform: translateY(5px);
            }
    `

    return(
        <div className="header-daddy">
            <div className="header hide">
                <div>
                    <h1>Memory&nbsp; GIFs&nbsp; Game</h1>
                    <a href="https://github.com/ZaidKhan144" target="_blank" rel="noreferrer"><GitLogo></GitLogo></a>
                </div>
             </div>
        </div>
    )
}

export default Header