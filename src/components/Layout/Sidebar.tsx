import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactElement } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/ILegal.svg";
import FullLogo from "../../assets/ILegalSolutions.svg";
import clsx from "clsx";
import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import PeopleIcon from "../Icons/PeopleIcon";
import DocumentsIcon from "../Icons/DocumentsIcon";
import SummarizeIcon from "../Icons/SummarizeIcon";
import TranslateIcon from "../Icons/TranslateIcon";
import SignatureIcon from "../Icons/SignatureIcon";
import ScaleIcon from "../Icons/ScaleIcon";
import TemplatesOutlinedIcon from "../Icons/TemplatesOutlinedIcon";
interface ISidebarLinks {
    children: { title: string; icon: ReactElement; roles: string[] }[];
}

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const userRole = "admin";
    const sidebarLinks: ISidebarLinks[] = [
        {
            children: [
                {
                    title: "Home",
                    icon: <HomeIcon />,
                    roles: ["admin"],
                },
                {
                    title: "Tenants",
                    icon: <PeopleIcon />,
                    roles: ["admin"],
                },
                {
                    title: "Documents",
                    icon: <DocumentsIcon className="size-11" />,
                    roles: ["admin"],
                },
                {
                    title: "Templates",
                    icon: <TemplatesOutlinedIcon />,
                    roles: ["admin"],
                },
                {
                    title: "Summarization",
                    icon: <SummarizeIcon />,
                    roles: ["admin"],
                },
                {
                    title: "Translation",
                    icon: <TranslateIcon />,
                    roles: ["admin"],
                },
                {
                    title: "Sign Documents",
                    icon: <SignatureIcon />,
                    roles: ["admin"],
                },
                {
                    title: "Jurisdiction",
                    icon: <ScaleIcon />,
                    roles: ["admin"],
                },
            ],
        },
    ];

    return (
        <>
            <motion.aside
                animate={{ minWidth: isOpen ? "260px" : "120px" }}
                className={` pb-[53px] mr-0 whitespace-nowrap  relative  left-0 flex flex-col justify-between z-50  pt-4 `}
            >
                <div onClick={() => setIsOpen(!isOpen)}
                    className={`absolute cursor-pointer h-full w-full transition-all duration-300 bg-gradient-blue ${isOpen ? 'opacity-0' : 'rounded-[35px] shadow-panel opacity-100'}`} />
                <div>
                    <div className="mx-auto relative">
                        <Link
                            className="flex items-center gap-1 w-full justify-center mt-24"
                            to="/"
                        >
                            {isOpen ? <img src={FullLogo} /> : <img src={Logo} />}
                        </Link>
                    </div>
                    <div className="flex flex-col  w-full mt-52">
                        {sidebarLinks.map((link) => (
                            <div className="flex flex-col  gap-12">
                                {link.children
                                    .filter(
                                        (child) => !child.roles || child.roles.includes(userRole)
                                    ) // Filter links
                                    .map((child) => {
                                        const isActive =
                                            location.pathname ===
                                            `/${child.title.toLowerCase().split(" ").join("-")}`;
                                        return (
                                            <NavLink
                                                to={`${child.title.toLowerCase().split(" ").join("-")}`}
                                                className={({ isActive: isNavLinkActive }) =>
                                                    clsx(
                                                        "relative h-[50px] max-w-[192px] cursor-pointer transition w-full rounded-lg items-center gap-1.5 flex ",
                                                        {
                                                            "bg-lightBlue !text-white": isNavLinkActive,
                                                        }
                                                    )
                                                }
                                            >
                                                <div className={`${isOpen ? "ml-5" : "mx-auto"} transition-all relative z-50 duration-300`}>
                                                {React.cloneElement(child.icon, {
                                                        isSelected: isActive,
                                                    })}
                                                </div>

                                                <motion.div
                                                    animate={{
                                                        opacity: isOpen ? "1" : "0",
                                                        position: isOpen ? "static" : "absolute",
                                                        transform: isOpen ? "translateX(0)" : "translateX(100%)" 
                                                    }}
                                                    className="text-inherit text-xl transition duration-200"
                                                >
                                                    {child.title}
                                                </motion.div>
                                            </NavLink>
                                        );
                                    })}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.aside>
        </>
    );
};

export default Sidebar;
