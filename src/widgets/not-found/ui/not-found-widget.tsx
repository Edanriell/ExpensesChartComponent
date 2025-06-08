import { Link } from "@tanstack/react-router";

export const NotFoundWidget = () => {
	return (
		<section className="not-found-section" aria-labelledby="not-found-title">
			<header className="not-found-section__header">
				<h1 id="not-found-title" className="not-found-section__title">
					404
				</h1>
				<p className="not-found-section__subtitle">Page Not Found</p>
			</header>
			<p className="not-found-section__description">
				Sorry, we couldn't find the page you were looking for.
			</p>
			<Link className="not-found-section__link link" to="/">
				Go back to Home
			</Link>
		</section>
	);
};
