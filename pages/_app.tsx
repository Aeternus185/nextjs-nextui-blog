import "../styles/globals.css";
import { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
	type: "light",
	theme: {},
});

const darkTheme = createTheme({
	type: "dark",
	theme: {},
});

export default function App({ Component, pageProps }: AppProps) {
	document.body.style.background = "transparent";
	return (
		<NextThemesProvider
			defaultTheme="system"
			attribute="class"
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</NextThemesProvider>
	);
}
