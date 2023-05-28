import Header from "./Header";

interface IPageLayout {
    theme: string;
    children: React.ReactNode;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const PageLayout = ({ theme, setTheme, children }: IPageLayout) => {
    return (
        <div>
            <Header setTheme={setTheme} theme={theme} />
            {children}
        </div>
    );
};

export default PageLayout;
