import Link from "next/link"
import { ReactNode } from "react"
interface NavItemProps  {
    href : string
    children : ReactNode
    target? : "_blank" | "_self" | "_parent" | "_top"
    onClick? : () => void;
}

const NavItem : React.FC<NavItemProps> = (props) => {
    
    const handleClick = () => {
        if(props.onClick) props.onClick();
    }
    
    return (
        <li className="mr-10" onClick={handleClick}>
            <Link href={props.href} className="text-white hover:text-white-200" target={props.target}>{props.children}</Link>
        </li>
    );
}

export default NavItem;