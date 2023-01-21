import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import { Spacer, Card, Text, Image, Grid } from "@nextui-org/react";
import { BsCalendar } from "react-icons/bs";
import { StyledCardBlur } from "../components/styledCardBlur";

export default function Home({
	allPostsData,
}: {
	allPostsData: {
		date: string;
		title: string;
		id: string;
	}[];
}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<Spacer y={1} />
				<Grid.Container>
					<Grid>
						<Text h1>Andry Orellana</Text>
						<Text h4 color="$gray900">
							I'm self-taught developer from Venezuela.
						</Text>
						<Text size="$md" color="$gray800">
							This is a sample website to learn{" "}
							<a href="https://nextjs.org/">Next.js</a>, stylized with{" "}
							<a href="https://nextui.org/">NextUI</a>.
						</Text>
					</Grid>
					<Grid css={{ justifyContent: "flex-end" /* , flexGrow: "1" */ }}>
						<Image
							showSkeleton
							src="/images/profile.png"
							height={144}
							width={144}
							alt="Aeternus"
							css={{ borderRadius: "$rounded" }}
						/>
					</Grid>
				</Grid.Container>
				<Spacer y={1} />
			</section>
			<section>
				<Text h2>Blog</Text>
				<ul style={{ listStyle: "none", margin: "0" }}>
					{allPostsData.map(({ id, date, title }) => (
						<Link href={`/posts/${id}`} style={{ textDecoration: "none" }}>
							<StyledCardBlur>
								<li key={id}>
									<Card.Header>
										<Text h4>{title}</Text>
									</Card.Header>
									<Card.Footer>
										<Grid.Container css={{ color: "$accents8" }}>
											<Grid>
												<BsCalendar />
											</Grid>
											<Grid css={{ pl: "$4" }}>
												<Date dateString={date} />
											</Grid>
										</Grid.Container>
									</Card.Footer>
								</li>
							</StyledCardBlur>
						</Link>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};
