import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
];

export const footerData = [
	{
		title: 'create',
		links: ['web', 'android', 'blockchain', 'others'],
	},
	{
		title: 'connect',
		links: ['Colleagues', 'Alumni', 'Dean', 'To me'],
	},
	{
		title: 'collaborate',
		links: ['project 1', 'project 2', 'project 3', 'project 4'],
	},
	{
		title: 'Connect',
		links: ['Sign up', 'email: gaashish575@gmail.com', 'mob no. : 8394893843', 'pin code: 201206'],
	},
	{
		title: 'T & C',
		links: ['Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];
