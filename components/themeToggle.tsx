import React from "react";
import cn from "classnames";
import { CSS, styled, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

import { FiSun, FiMoon } from "react-icons/fi";

interface Props {
	className?: string;
	css?: CSS;
}

const StyledButton = styled("button", {
	dflex: "center",
	size: "auto",
	cursor: "pointer",
	bgColor: "$accents4",
	borderRadius: "$xs",
	border: "none",
	padding: "$xs",
	"&:hover": { color: "$yellow800" },
});

export const ThemeToggle: React.FC<Props> = ({ className, css }) => {
	const { setTheme } = useNextTheme();
	const { isDark } = useTheme();

	const handleToggleTheme = () => {
		setTheme(isDark ? "light" : "dark");
	};

	return (
		<StyledButton
			aria-label="toggle a light and dark color scheme"
			css={css}
			onClick={handleToggleTheme}>
			{isDark ? <FiSun /> : <FiMoon />}
		</StyledButton>
	);
};

export default ThemeToggle;
