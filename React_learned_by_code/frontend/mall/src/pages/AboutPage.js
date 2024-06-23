import BasicLayout from "../layouts/BasicLayout";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <BasicLayout>
            <div className="flex">
                <Link to={'/'}>Main</Link>
            </div>
            <div className="text-3xl">
                <div>AboutPage</div>
            </div>
        </BasicLayout>
    );
}

export default AboutPage;