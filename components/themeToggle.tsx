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
	background: "transparent",
	border: "none",
	padding: 0,
	"& .theme-selector-icon": {
		color: "$colors$accents6",
	},
	"@xsMax": {
		px: "$2",
	},
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
			className={cn("theme-selector-container", className)}
			css={css}
			onClick={handleToggleTheme}>
			{isDark ? <FiSun /> : <FiMoon />}
		</StyledButton>
	);
};

export default ThemeToggle;
