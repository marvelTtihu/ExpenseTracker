import { FaCircleChevronLeft } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaTable } from "react-icons/fa";
import { GrFormEdit } from "react-icons/gr";
import { Link } from "react-router";

const Sidebar = () => {
    return(
        <aside className="w-64 min-h-screen shrink-0">
            <header className="flex justify-between items-center">
                <h2 className="p-4 text-2xl font-bold">MVT.</h2>
                <button className="px-4 text-2xl cursor-pointer">
                    <FaCircleChevronLeft />
                </button>
            </header>

            <nav className="flex flex-col px-4 py-2 my-1">
                <Link to="/" preventScrollReset><MdDashboard />Dashboard</Link>
                <Link to="/overview" preventScrollReset><FaTable />Overview</Link>
                <Link to="/form" preventScrollReset><GrFormEdit />Form</Link>
            </nav>
        </aside>
    );
}

export default Sidebar;