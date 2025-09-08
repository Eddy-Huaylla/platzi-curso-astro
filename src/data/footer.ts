import EmailIcon from "~icons/custom/email";
import PhoneIcon from "~icons/custom/phone";
import AddressIcon from "~icons/custom/address";
import FacebookIcon from "~icons/custom/facebook";
import InstagramIcon from "~icons/custom/instagram";
import TwitterIcon from "~icons/custom/twitter";
import GithubIcon from "~icons/custom/github";
import DribbbleIcon from "~icons/custom/dribbble";

export const description =
	"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.";

export const socials = [
	{ name: "Facebook", url: "#", icon: FacebookIcon },
	{ name: "Instagram", url: "#", icon: InstagramIcon },
	{ name: "Twitter", url: "#", icon: TwitterIcon },
	{ name: "GitHub", url: "#", icon: GithubIcon },
	{ name: "Dribbble", url: "#", icon: DribbbleIcon },
];

export const linkSections = [
	{
		title: "About Us",
		links: [
			{ text: "Company History", url: "#" },
			{ text: "Meet the Team", url: "#" },
			{ text: "Employee Handbook", url: "#" },
			{ text: "Careers", url: "#" },
		],
	},
	{
		title: "Our Services",
		links: [
			{ text: "Web Development", url: "#" },
			{ text: "Web Design", url: "#" },
			{ text: "Marketing", url: "#" },
			{ text: "Google Ads", url: "#" },
		],
	},
	{
		title: "Helpful Links",
		links: [
			{ text: "FAQs", url: "#" },
			{ text: "Support", url: "#" },
			{ text: "Live Chat", url: "#", type: "live" },
		],
	},
	{
		title: "Contact Us",
		links: [
			{
				text: "john@doe.com",
				url: "mailto:john@doe.com",
				type: "email",
				iconComponent: EmailIcon,
			},
			{
				text: "0123456789",
				url: "tel:0123456789",
				type: "phone",
				iconComponent: PhoneIcon,
			},
			{
				text: "213 Lane, London, United Kingdom",
				type: "address",
				iconComponent: AddressIcon,
			},
		],
	},
];

export const companyName = "Astro Course";

export const policyLinks = [
	{ text: "Terms & Conditions", url: "#" },
	{ text: "Privacy Policy", url: "#" },
];
