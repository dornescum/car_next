import React, {useRef, useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";
import Link from 'next/link';

// {navbarLinks}
const Navbar = () => {
	const [menuClicked, setMenuClicked] = useState(false);

	const toggleMenuClick = () => {
		setMenuClicked(!menuClicked);
	};
	// const handleClick = (e) => {
	// 	const target = e.target.getAttribute('href');
	// 	const location = document.querySelector(target).offsetTop;
	// 	window.scrollTo({
	// 		left: 0,
	// 		top: location - 70
	// 	});
	// };


	return (
		<nav className="navbar" id="nav">
			<span className="navbar__logo">Vitezomanu Gica</span>
			{menuClicked ? (
				<FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick}/>
			) : (
				<FiMenu
					size={25}
					className={"navbar__menu"}
					onClick={toggleMenuClick}
				/>
			)}
			<ul
				className={
					menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
				}
			>

				<Link className="navbar__item" href="#home">
					<a className="navbar__link">
						Home
					</a>
				</Link>
				<Link className="navbar__item" href="#descriere">
					<a className="navbar__link">
						Descriere
					</a>
				</Link>
				<Link className="navbar__item" href="#echipare">
					<a className="navbar__link">
						Echipare
					</a>
				</Link>
				<Link className="navbar__item" href="#galerie">
					<a className="navbar__link">
						Galerie
					</a>
				</Link>
				<Link className="navbar__item" href="#contact">
					<a className="navbar__link">
						Contact
					</a>
				</Link>
				<Link className="navbar__item" href="/slider">
					<a className="navbar__link">
						Imperfectiuni
					</a>
				</Link>



				{/*{navbarLinks.map((item, index) => {*/}
				{/*	return (*/}
				{/*		<li className="navbar__item" key={index}>*/}
				{/*			<a className="navbar__link" href={item.url} onClick={handleClick}*/}
				{/*			>*/}
				{/*				{item.title}*/}
				{/*			</a>*/}
				{/*		</li>*/}
				{/*	);*/}
				{/*})}*/}
			</ul>

		</nav>
	);
};

export default Navbar;