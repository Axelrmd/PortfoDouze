import { useState, useRef } from "react";
import "../../style/AsideBar.css";

const AsideBar = () => {
    const [asideSelected, setAsideSelected] = useState("");
    const summaryRef = useRef(null);

    const selectAside = (aside) => {
        setAsideSelected(asideSelected === aside ? "" : aside);
    };


    const resize = (e) => {
        if (summaryRef.current) {
            requestAnimationFrame(() => {
                const newWidth = Math.max(200, e.clientX - summaryRef.current.getBoundingClientRect().left);
                summaryRef.current.style.width = `${newWidth}px`;
            });
        }
    };

    const startResizing = (e) => {
        if (summaryRef.current) {
            summaryRef.current.style.transition = "none"; // Désactive la transition
        }
        document.addEventListener("mousemove", resize);
        document.addEventListener("mouseup", stopResizing);
    };
    
    const stopResizing = () => {
        if (summaryRef.current) {
            summaryRef.current.style.transition = ""; // Réactive la transition après resize
        }
        document.removeEventListener("mousemove", resize);
        document.removeEventListener("mouseup", stopResizing);
    };
    

    return (
        <div className="complete-aside-bar">
            <div className="aside-bar">
                {/* Les logos */}
                <button onClick={() => selectAside("explorateur")}>
                    <img src="chill/assets/images/Fichiers.svg" alt="Explorateur" />
                </button>
            </div>
            <div className="summary-aside-bar">
                {asideSelected === "explorateur" && (
                    <div className="summary explorateur" ref={summaryRef}>
                        DOUZE
                        <div className="resizer" onMouseDown={startResizing}></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AsideBar;
