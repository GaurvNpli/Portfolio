import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <span className="footer-logo">Gaurav Nepali</span>
                    <span className="footer-divider">·</span>
                    <span className="footer-year">{new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
