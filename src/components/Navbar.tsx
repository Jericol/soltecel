import Logo from "../assets/logo-soltecel-full.svg";

function Navbar() {

    
    return (
        <div className="">
            <nav className="min-h-max grid grid-cols-10 p-5 cursor-pointer">
                {/* logo */}
                <section className="col-span-3 ">
                <img
                    src={Logo}
                    alt=""
                    className="object-cover w-14 h-14 bg-yellow-200 rounded-full"
                />
                </section>
                {/* lista */}
                <section className="col-span-4 ">
                    <ul className="flex items-end justify-center gap-4 pr-4">
                        <li className="item-list item">Inicio</li>
                        <li className="item-list">Servicios</li>
                        <li className="item-list ">Tienda</li>
                        <li className="item-list">Quienes somos</li>
                    </ul>
                </section>
                {/* user  */}
                <section className="col-span-3">
                    <ul className="flex items-center justify-end gap-4 pr-4">
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </li>
                        {/* cart */}
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </li>
                    </ul>
                </section>
            </nav>
        </div>
    );
}

export default Navbar;
