import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import { Spacer, Grid, Text } from "@nextui-org/react";
import { BsCalendar } from "react-icons/bs";

export default function Post({
	postData,
}: {
	postData: {
		title: string;
		date: string;
		contentHtml: string;
	};
}) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<Text h1> {postData.title}</Text>
				<Grid.Container css={{ color: "$accents8" }}>
					<Grid>
						<BsCalendar />
					</Grid>
					<Grid css={{ pl: "$4" }}>
						<Date dateString={postData.date} />
					</Grid>
				</Grid.Container>
				<Spacer y={2} />
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
			<Spacer y={3} />
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params?.id as string);
	return {
		props: {
			postData,
		},
	};
};
