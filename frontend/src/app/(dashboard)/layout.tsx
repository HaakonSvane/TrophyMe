import { Header } from "@/components/header";

const MainSiteLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <>
            <Header />
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-6">{children}</div>
        </>
    );
};

export default MainSiteLayout;
