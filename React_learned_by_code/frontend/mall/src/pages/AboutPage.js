import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div>
            <div className="flex">
                <Link to={'/'}>Main</Link>
            </div>
            <div className="text-3xl">
                <div>AboutPage</div>
            </div>
        </div>
    );
}

export default AboutPage;