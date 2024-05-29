export default function ToggleSelector(props) {
    return (
        <nav className={props.orderMode ? "off" : ""}>
            <div className="toggler">
                <p className="toggler--on">On</p>
                <div className="toggler--slider" onClick={props.toggleOrderMode}>
                    <div className="toggler--slider--circle">
                        
                    </div>
                </div>
                <p className="toggler--off">Off</p>

            </div>
        </nav>
    )
}