export default function ToggleSelector(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider">
                    <div className="toggler--slider--circle" onClick={props.toggleDarkMode}>
                        
                    </div>
                </div>
                <p className="toggler--dark">Dark</p>
                
            </div>
        </nav>
    )
}