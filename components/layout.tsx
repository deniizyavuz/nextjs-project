import Navbar from "./navbar";

type LayoutProps = {
    children: React.ReactNode;
};


export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar /> <div> {children} </div>
        </>
    );
};

