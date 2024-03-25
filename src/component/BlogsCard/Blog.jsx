import { Link } from "react-router-dom";
import publishedImage from '/src/assets/404.jpg'

const Blog = ({blog}) => {
    const {id, title, description, url,cover_image, published_at } = blog
    return (
        <Link to={`/blog/${id}`} className="max-w-sm p-2 transition hover:scale-105 border-2 border-primary hover:border-secondary border-opacity-30 mx-auto group hover:no-underline focus:no-underline hover:relative inline-block">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || publishedImage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs text-gray-400">{new Date(published_at).toLocaleString()}</span>
					<p>{description}</p>
				</div>
			</Link>
    );
};

export default Blog;