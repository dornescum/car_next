import React from 'react';
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
import UsedCar from "../components/UsedCar/UsedCar";
import Diffrent from "../components/Diffrent/Diffrent";


export default function Home() {
	const navbarLinks = [
		{ url: "#fata", title: "Home" },
		{ url: "#desc", title: "Descriere" },
		{ url: "#echipare", title: "Echipare" },
		{ url: "#galerie", title: "Galerie" },
		{ url: "/slider", title: "Imperfectiuni" },
		{ url: "#contact", title: "Contact" },
	];
	// const date = new Date()

	return (
		<div className={styles.container}>

			<Navbar  />
			<Hero />
			<Description />
			<Info />
			<Galerry />
			<Detalii />
			{/*<Imperfections />*/}
			<UsedCar />
			<Price />
			{/*<Diffrent />*/}
			<Footer />
		</div>
	);
}
{/*<Head>*/}
{/*	<title>Best car ever</title>*/}
{/*	<meta name="viewport" content="width=device-width,initial-scale=1" />*/}
{/*	<meta name="description" content="best car ever"/>*/}
{/*	<meta name="description" content={`${date}`}/>*/}
{/*	<link rel="icon" href="/favicon.ico"/>*/}
{/*</Head>*/}