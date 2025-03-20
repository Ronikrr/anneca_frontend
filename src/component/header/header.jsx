import './header.css';
import React, { useState, useEffect } from 'react';
import './change.css';
import { FaSearch } from "react-icons/fa";
import logo from '../../assets/new_images/logo.avif';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MENU_ITEM } from '../../utils/constant';
import { useGetAllCategoriesQuery } from '../../redux/apiSlice';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import india from '../../assets/india.png';
import australia from '../../assets/AUSTELIA.png';
import uk from '../../assets/uk flag.png';
import axios from 'axios';
import Spinner from '../../utils/spinner';

const countries = [
    { code: 'IN', name: 'IN', flag: india },
    { code: 'AU', name: 'Aus', flag: australia },
    { code: 'GB', name: 'UK', flag: uk },
];

const tabs = [
    { name: "Home", to: "/" },
    { name: "Girls", to: "/ourcollection/girls" },
    { name: "Boys", to: "/ourcollection/boys" },
    { name: "Twinning Sets", to: "/ourcollection/twinning set" },
];

const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    useGetAllCategoriesQuery();
    const location = useLocation();
    const [profileOpen, setProfileOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isHovered, setIsHovered] = useState(false);
    const categories = useSelector((state) => state.categories);
    const cart = useSelector((state) => state.cart);
    const wishlist = useSelector((state) => state.wishlist);

    const handleCountrySelect = (country) => setSelectedCountry(country);
    const handleLanguageSelect = (language) => setSelectedLanguage(language);
    const handleToggle = () => setIsMenuOpen(!isMenuOpen);
    const handleCloseMenu = () => isMenuOpen && setIsMenuOpen(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleClickOutside = (event) => {
        const toggleButton = document.querySelector('.navbar-toggler');
        const collapseMenu = document.querySelector('#navbarSupportedContent');
        if (collapseMenu && !collapseMenu.contains(event.target) && !toggleButton.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("https://anneca-backend-sepia.vercel.app/api/v1/auth/logout", { withCredentials: true });
            if (response.data.success) {
                localStorage.clear();
                sessionStorage.clear();
                navigate("/login");
                window.location.reload();
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("An error occurred during logout", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <div className="loader-overlay"><Spinner /></div>;

    return (
        <>
            {isMenuOpen && <div className="overlay" onClick={handleCloseMenu}></div>}
            <header className={`bg-white fixed-top mainnavbar ${scrolled ? 'mt-0' : 'mt-95'} px-2`}>
                <nav className="navbar navbar-expand-lg bg-white p-2 p-xl-0">
                    <div className="container-fluid align-items-center justify-content-between p- 0">
                        <Link className="d-lg-block d-none navbar-brand" to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={handleToggle} aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
                            {isMenuOpen ? (<i class="btn_box_menu bi bi-x-lg"></i>) : (<i class="btn_box_menu bi bi-list"></i>)}
                        </button>
                        <Link className="d-block d-lg-none navbar-brand me-0" to="/"><img src={logo} alt="Logo" width={90} /></Link>
                        <div className='d-flex d-lg-none align-items-center text-black'>
                            <div className="dropdown">
                                <button onClick={() => setProfileOpen(!profileOpen)} className="d-lg-flex d-none bg-transparent border-0 text-start account_sign" type="button" data-bs-toggle="dropdown" aria-expanded={profileOpen}>
                                    <i className="bi bi-person fs-4"></i>
                                </button>
                                <ul className={`dropdown-menu dropdown-menu2 ${profileOpen ? 'show' : 'd-none'}`}>
                                    <li><Link to={"/orders"} className="dropdown-item">Order History</Link></li>
                                    {user && <li><Link to={"/profile"} className="dropdown-item">Profile Edit</Link></li>}
                                    <li><Link to={"/login"} className="dropdown-item">Login & Security</Link></li>
                                    {user && <li className="dropdown-item" onClick={handleLogout}>Logout</li>}
                                </ul>
                            </div>
                            <Link to="/cart" className='d-flex align-items-center position-relative ms-2' onClick={handleCloseMenu}>
                                <i className="text-dark bi bi-bag fs-5" style={{ marginBottom: '2px' }}></i>
                                <span className="border border-light position-absolute rounded-circle cart_message start-100 translate-middle">
                                    <span>{cart?.items?.length || 0}</span>
                                </span>
                            </Link>
                            <Link to="/wishlist" className='d-flex align-items-center position-relative ms-3' onClick={handleCloseMenu}>
                                <i className="text-dark bi bi-heart fs-5" style={{ marginBottom: '2px' }}></i>
                                <span className="border border-light position-absolute rounded-circle cart_message start-100 translate-middle">
                                    <span>{wishlist?.items?.length || 0}</span>
                                </span>
                            </Link>
                        </div>
                        <div className={`collapse p-2 p-lg-0 navbar-collapse headermobile ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <div className='d-block d-lg-none my-2'>
                                <div className="me-0">
                                    <form onSubmit={(event) => {
                                        event.preventDefault();
                                        navigate('/ourcollection/girls' + `?searchQuery=${search}`);
                                    }}>
                                        <input type="search" name='search' value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "95%", padding: "5px 5px 5px 10px", borderRadius: "4px", border: "1px solid #b20570" }} placeholder="Search..." />
                                    </form>
                                </div>
                            </div>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                {tabs.map((tab, index) => {
                                    const girlsSubCat = categories?.data?.find((c) => c.name === "Girls")?.children;
                                    const decodedPath = decodeURIComponent(location.pathname);
                                    const isGirlsActive = tab.name === "Girls" && (
                                        decodedPath === tab.to ||
                                        girlsSubCat?.some((sc) => decodedPath.includes(`/ourcollection/${sc.name}`))
                                    );

                                    return (
                                        <li key={index} className="nav-item" onClick={() => {
                                            if (tab.name === "Girls") {
                                                isHovered ? handleMouseLeave() : handleMouseEnter();
                                            }
                                        }} onMouseLeave={tab.name === "Girls" ? handleMouseLeave : () => { }}>
                                            <Link className={`nav-link ${isGirlsActive ? 'text-primary' : 'text-dark'}`} onClick={tab.name !== "Girls" && handleCloseMenu} to={tab.name !== "Girls" && tab.to}>
                                                {tab.name}
                                            </Link>
                                            {isHovered && tab.name === "Girls" && (
                                                <ul className="dropdown-menu show">
                                                    {girlsSubCat?.map((sc, k) => (
                                                        <li key={k}>
                                                            <Link className="dropdown-item" to={`/ourcollection/${sc.name}`} onClick={handleCloseMenu}>
                                                                {sc.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className='d-flex d-lg-none align-items-start justify-content-around text-black w-100'>
                                <div className="dropdown w-100">
                                    <hr />
                                    <button className="d-flex d-lg-none align-items-center bg-transparent border-0 text-capitalize text-start account_sign gap-2" type="button" data-bs-toggle="dropdown">
                                        <i className="bi bi-person fs-4"></i> account
                                    </button>
                                    <ul className='list-unstyled w-100'>
                                        <li className='nav-item w-100 py-2'>
                                            <Link to={"/orders"} onClick={handleCloseMenu} className='nav-link'>Order History</Link>
                                        </li>
                                        <li className='nav-item w-100 py-2'>
                                            <Link to={`/contactus`} onClick={handleCloseMenu} className='nav-link'>Contact Us</Link>
                                        </li>
                                        <li className='nav-item w-100 py-2'>
                                            <Link to={`/returnpolicy`} onClick={handleCloseMenu} className='nav-link'>Return & Refund</Link>
                                        </li>
                                        <li className='nav-item w-100 py-2'>
                                            <Link to={`/shipping`} onClick={handleCloseMenu} className='nav-link'>Shipping Policy</Link>
                                        </li>
                                        <li className='nav-item w-100 py-2'>
                                            <Link to={"/login"} onClick={handleCloseMenu} className='nav-link'>Login & Security</Link>
                                        </li>
                                        {user && <li onClick={handleCloseMenu} className='nav-item w-100 py-2'><Link onClick={handleLogout} className='nav-link'>Logout</Link></li>}
                                    </ul>
                                </div>
                            </div>
                            <div className="d-block d-lg-none">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <DropdownButton
                                        id="dropdown-country-button"
                                        title={<span><img src={selectedCountry.flag} alt={selectedCountry.name} style={{ width: '20px', height: '20px', marginRight: '8px' }} /> {selectedCountry.name}</span>}
                                        onSelect={(eventKey) => handleCountrySelect(countries.find(c => c.code === eventKey))}
                                        className="ps-0"
                                    >
                                        {countries.map((country) => (
                                            <Dropdown.Item key={country.code} eventKey={country.code}>
                                                <img src={country.flag} alt={country.name} style={{ width: '20px', height: '20px', marginRight: '8px' }} className="ps-0" /> {country.name}
                                            </Dropdown.Item>
                                        ))}
                                    </DropdownButton>
                                    <DropdownButton
                                        id="dropdown-language-button"
                                        title={selectedLanguage}
                                        onSelect={(eventKey) => handleLanguageSelect(eventKey)}
                                        className="me-0"
                                    >
                                        {languages.map((language) => (
                                            <Dropdown.Item key={language} eventKey={language}>
                                                {language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()}
                                            </Dropdown.Item>
                                        ))}
                                    </DropdownButton>
                                </div>
                            </div>
                        </div>
                        <div className="d-lg-block d-none">
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="me-0 search-container">
                                    <div className="me-3 search-iconbox">
                                        <FaSearch className="search-icon" />
                                    </div>
                                    <form onSubmit={(event) => {
                                        event.preventDefault();
                                        navigate('/ourcollection/girls' + `?searchQuery=${search}`);
                                    }}>
                                        <input type="search" name='search' value={search} onChange={(e) => setSearch(e.target.value)} className="search-input" placeholder="Search..." />
                                    </form>
                                </div>
                                <DropdownButton
                                    id="dropdown-country-button"
                                    title={<span><img src={selectedCountry.flag} alt={selectedCountry.name} style={{ width: '20px', height: '20px', marginRight: '5px', marginBottom: '2px' }} /> {selectedCountry.name}</span>}
                                    onSelect={(eventKey) => handleCountrySelect(countries.find(c => c.code === eventKey))}
                                    className='ps-0'
                                >
                                    {countries.map((country) => (
                                        <Dropdown.Item key={country.code} eventKey={country.code}>
                                            <img src={country.flag} alt={country.name} style={{ width: '20px', height: '20px', marginRight: '5px', marginBottom: '2px' }} /> {country.name}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                <DropdownButton
                                    id="dropdown-language-button"
                                    title={selectedLanguage}
                                    onSelect={(eventKey) => handleLanguageSelect(eventKey)}
                                    className="me-2 pe-0"
                                >
                                    {languages.map((language) => (
                                        <Dropdown.Item key={language} eventKey={language}>
                                            {language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                <div className="dropdown">
                                    <button onClick={() => setProfileOpen(!profileOpen)} className="bg-transparent border-0 text-start account_sign me-1" type="button" data-bs-toggle="dropdown" aria-expanded={profileOpen}>
                                        <i className="bi bi-person fs-4"></i>
                                    </button>
                                    <ul className={`dropdown-menu ${profileOpen ? 'show' : 'd-none'}`}>
                                        <li><Link to={"/orders"} className="dropdown-item">Order History</Link></li>
                                        {user && <li><Link to={"/profile"} className="dropdown-item">Profile Edit</Link></li>}
                                        <li><Link to={"/login"} className="dropdown-item">Login & Security</Link></li>
                                        {user && <li className="dropdown-item" onClick={handleLogout}>Logout</li>}
                                    </ul>
                                </div>
                                <Link to="/cart" className='d-flex align-items-center position-relative mx-2' onClick={handleCloseMenu}>
                                    <i className="text-dark bi bi-bag fs-5" style={{ marginBottom: '2px' }}></i>
                                    <span className="border border-light position-absolute rounded-circle cart_message start-100 translate-middle">
                                        <span className="cart_text">{cart?.items?.length || 0}</span>
                                    </span>
                                </Link>
                                <Link to="/wishlist" className='d-flex align-items-center position-relative ms-3' onClick={handleCloseMenu}>
                                    <i className="text-dark bi bi-heart fs-5" style={{ marginBottom: '2px' }}></i>
                                    <span className="border border-light position-absolute rounded-circle cart_message start-100 translate-middle">
                                        <span className="cart_text">{wishlist?.items?.length || 0}</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {profileOpen && (
                    <ul className='d-none customprofiledown mt-3'>
                        {MENU_ITEM.map((v) => (
                            <Link key={v.path} onClick={() => setProfileOpen(false)} className={`nav-link mt-2`} to={v.path}>{v.item}</Link>
                        ))}
                    </ul>
                )}
            </header>
        </>
    );
};

export default Header;