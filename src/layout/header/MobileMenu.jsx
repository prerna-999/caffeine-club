import { FiMenu } from "react-icons/fi";

const MobileMenu = () => {
    return (
        <>
            <button
                className="btn btn-primary offcanvas-btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
            >
                <FiMenu size={25} />
            </button>

            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        <img src="/assets/img/logo/logo.png" alt="" />
                    </h5>

                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>

                <div className="offcanvas-body">
                    <ul className="offcanvas-list">
                        <li><a href="">The Signature Brews</a></li>
                        <li><a href="">Chilled & Refreshing</a></li>
                        <li><a href="">Club House Bites</a></li>
                        <li><a href="">Customizations</a></li>
                        <li><a href="">The Monkey's Tale</a></li>
                    </ul>
                    <div className="offcanvas-btn-bottom">
                        <a href="" className="header-btn ">The First Pour<span className="wave">👋</span></a>

                    </div>

                </div>
            </div>
        </>
    );
};

export default MobileMenu;