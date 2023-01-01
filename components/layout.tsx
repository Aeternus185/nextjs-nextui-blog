import Head from "next/head";
import Link from "next/link";
import { Container, Navbar, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { ThemeToggle } from "./themeToggle";

export const siteTitle = "Next.js Sample Website";

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	const { setTheme } = useNextTheme();
	const { isDark } = useTheme();
	return (
		<Container xs>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="This is a sample website to learn Next.js, stylized with NextUI."
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			{home ? (
				<Navbar
					isCompact
					isBordered
					variant="floating"
					maxWidth="fluid"
					css={{ background: "transparent" }}>
					<Navbar.Content>
						<Navbar.Link href="https://github.com/Aeternus185">
							<AiFillGithub size={28} />
						</Navbar.Link>
						<Navbar.Link href="mailto:andryfpo@gmail.com">
							<SiGmail size={28} />
						</Navbar.Link>
						<Navbar.Link href="https://www.linkedin.com/in/aeternus185">
							<IoLogoLinkedin size={28} />
						</Navbar.Link>
						<Navbar.Link href="https://www.instagram.com/_andry_ore/">
							<AiFillInstagram size={28} />
						</Navbar.Link>
					</Navbar.Content>
					<Navbar.Content>
						<Navbar.Item>
							<ThemeToggle />
						</Navbar.Item>
					</Navbar.Content>
				</Navbar>
			) : (
				<Navbar
					isCompact
					isBordered
					variant="floating"
					maxWidth="fluid"
					css={{ background: "transparent" }}>
					<Navbar.Content>
						<Link href="/">
							<IoReturnUpBackOutline /> Back to home
						</Link>
					</Navbar.Content>
					<Navbar.Content>
						<Navbar.Item>
							<ThemeToggle />
						</Navbar.Item>
					</Navbar.Content>
				</Navbar>
			)}
			<main>{children}</main>
		</Container>
	);
}
