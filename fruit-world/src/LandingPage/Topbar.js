import '../styles/Topbar.css';
export default function TopBar() {

    return (
        <div className="topbar">
            <div className="left">
                <span>📍 123 Street, New York</span>
                <span>✉️ Email@example.com</span>
            </div>
            <div className="right">
                <a href="#">Privacy Policy</a>
                <span>/</span>
                <a href="#">Terms of Use</a>
                <span>/</span>
                <a href="#">Sales and Refunds</a>
            </div>
        </div>
    );
}

