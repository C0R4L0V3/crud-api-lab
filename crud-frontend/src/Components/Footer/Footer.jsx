import './Footer.css'

const Footer = (props) => {

    return (
        <footer>
        <div class="footerContainer">

        <div class = "icons">
        <ul>
            <li>
                <a href="https://www.linkedin.com" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a>
            </li>
            <li>
                <a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram fa-2x"></i></a>
            </li>
            <li>
                <a href="ttps://www.youtube.com" target="_blank"><i class="fa fa-youtube fa-2x"></i></a>
            </li>
        </ul>
        </div>
        <div class = "copyright">
            <p>Copyright &copy; 2024 by Cora Love</p>
        </div>
        <div class = "footerCommonLinks">
        <ul>
            <li>
                <a href="https://www.google.com">Privacy Policy</a>
            </li>
            <li>
                <a href="https://www.google.com">Security</a>
            </li>
            <li>
                <a href="https://www.google.com">Manage Cookies</a>
            </li>
            <li>
                <a href="https://www.google.com">Contact Us</a>
            </li>
            <li>
                <a href="https://www.google.com">Legal</a>
            </li>
            <li>
                <a href="https://www.google.com">Accessibility</a>
            </li>
        </ul>
        </div>

        </div>
        </footer>
    )

}

export default Footer;