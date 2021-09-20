import React, { Suspense, lazy } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import slider from './slider';

import styles from '../styles/Home.module.css';
import Hero from "../components/Hero/Hero";
import Navbar from "../components/UI/Navbar";
import Description from "../components/Description/Description";
import Footer from "../components/UI/Footer";
import Info from "../components/Info/Info";
import Galerry from "../components/Galery/Galerry";
import Detalii from "../components/Detalii/Detalii";
import Imperfections from '../components/Imperfections/Imperfections';
import Price from "../components/Price/Price";


export default function Home() {
	const navbarLinks = [
		{ url: "#fata", title: "Home" },
		{ url: "#desc", title: "Descriere" },
		{ url: "#echipare", title: "Echipare" },
		{ url: "#galerie", title: "Galerie" },
		{ url: "/slider", title: "Imperfectiuni" },
		{ url: "#contact", title: "Contact" },


	];


	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<Navbar  navbarLinks={navbarLinks}/>
			<Hero />
			<Description />
			<Info />
			<Galerry />
			<Detalii />
			{/*<Imperfections />*/}
			<Price />
			<Footer />
		</div>
	);
}
