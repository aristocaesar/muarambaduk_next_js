import { ReactNode } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

interface MainLayoutProps {
    title? : string
    children : ReactNode
}

const MainLayout : React.FC<MainLayoutProps> = ({title, children}) => {
    return <>
        <NavBar title={title} />
            <main>
                {children}
            </main>
        <Footer />
    </>
}

export default MainLayout;