import { Grid, styled } from "@nextui-org/react";

export const Style = styled("div", {
	background: "$accents1",
	boxShadow: "$sm",
	borderRadius: "$lg",
	display: "flex",
	flexDirection: "column",
	marginBottom: "1rem",
	borderStyle: "solid",
	borderColor: "$gradient",
	bg: "$backgroundContrast",
	"@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
		bf: "saturate(180%) blur(14px)",
		bg: "rgba(255, 255, 255, 0.05)",
	},
});

export const StyledCardBlur = styled(Grid, Style, {
	transition: "$default",
	"&:hover": {
		opacity: 0.8,
	},
});
