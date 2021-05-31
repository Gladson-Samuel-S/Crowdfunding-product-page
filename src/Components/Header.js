import styled from 'styled-components';
import image from '../images/image-hero-desktop.jpg'

const Wrapper = styled.div`
    .image {
        position: absolute;
        height: 400px;
        width: 100vw;
    }
    nav {
        padding: 32px 168px;
        display: flex;
        justify-content: space-between;
        position: relative;
        color: white;
    }
    ul {
        display: flex;
    }
    li {
        margin: 0px 16px;
    }
    h3 {
        /* font-size: 32px; */
    }
    a {
        color: white;
    }
`

const Header = () => {
    return (
        <Wrapper>
            <div>
                <img className='image' src={image} alt="Header"/>
                <nav>
                    <h3>Crowdfund</h3>
                    <ul>
                        <li><a href="/">About</a> </li>
                        <li><a href="/">Discover</a></li>
                        <li><a href="/">Get Started</a></li>
                    </ul>
                </nav>
            </div>
        </Wrapper>
    )
}

export default Header


