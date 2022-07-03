import {useState, useEffect} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

import Header from "./components/Organisms/Header/Header";
import Footer from "./components/Organisms/Footer/Footer";
import Banner from "./components/Modules/Banner/Banner";

import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";

const GlobalStyle = createGlobalStyle`
	${reset}
	:root {
	--main-color: rgb(55, 170, 236);
	--main-rgb: 55, 171, 236;
	--outline-border: rgb(55, 160, 236);
	--red-color: rgb(243, 124, 75);
	--red-rgb: 243, 124, 75;
	--black-color: #28303f;
	--white-color: #fff;
	--gray-color: #767676;
	--border-color: #ddd;
	--gray-background-light: #f9f9f9;
	--gray-background: #f5f5f5;
	--gray-text: #6f6f6f;
	--border-radius: 0.4em;
}

/* 공통 css */
h1,
a,
div,
p,
section,
article,
input,
textarea {
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: inherit;
}

html {
	font-size: 10px;
}

body {
	font-size: 1.6rem;
	line-height: 1.4;
}

input,
button {
	font-size: inherit;
	font-family: inherit;
}

button {
	cursor: pointer;
}

a {
	border-radius: 0.8rem;
	overflow: hidden;
}
img {
	vertical-align: bottom;
}

a:focus,
input:focus,
button:focus,
textarea:focus {
	outline: 3px solid rgba(var(--main-rgb), 0.2);
	box-shadow: 0 0 0 1px var(--outline-border);
}

body {
	background: var(--gray-background-light);
}

.a11y-hidden {
	overflow: hidden;
	position: absolute;
	clip: rect(0, 0, 0, 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
}

.max-width {
	width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
}

.link-underline {
	display: block;
	width: 5em;
	text-align: center;
	text-decoration: underline;
	color: var(--gray-color);
	padding: 0.4rem 1rem;
	margin: 1rem 0 auto auto;
	transition: all 0.3s;
}

.link-underline:hover {
	color: var(--main-color);
}

.not-found {
	text-align: center;
	margin-top: 8rem;
}

.not-found h2 {
	color: var(--main-color);
	font-size: 5rem;
	font-weight: bold;
}

.not-found p {
	font-size: 2rem;
	margin-bottom: 2rem;
}

`;

function App() {
	const [isLogined, setIsLogined] = useState(false);
	const [data, setData] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	function loginHandler() {
		setIsLogined(!isLogined);
	}
	
	useEffect(() => {
		async function getData() {
			const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
			const result = await response.json();
			return result;
		}

		getData().then((data) => {
			setData(data);
			setIsLoaded(true);
		});
	}, [])

  return (
    <>
      <GlobalStyle />
      <Header isLogined={isLogined} loginHandler={loginHandler} user={data.users[1]} />
      <Banner bannerInfo={data.blog} />
			<BrowserRouter>
			{isLoaded && (
				<Switch>
					<Route exact path="/" render={() =>
						<Home
							posts={data.posts}
							users={data.users}
						/>
					} />
					<Route exact path="/post/:id" render={() =>
						<Post 
							posts={data.posts}
						/>
					} />
				</Switch>
			)}
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
