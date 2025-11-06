import React from "react";

function article_1() {
	return {
		date: "6 Nov 2025",
		title: "Microservices 101 - Saga Pattern",
		description:
			"Saga pattern helps microservices handle distributed transactions and recover from failures.",
		keywords: [
			"Saga Pattern",
			"Microservices",
			"Distributed System",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		link: "https://medium.com/@doanvietanh03022003/microservices-101-saga-pattern-5adf5984fcf7?source=friends_link&sk=bc00ab2529055e435cade92952dc1bf1",
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];
// const myArticles = [article_1, article_2];

export default myArticles;
