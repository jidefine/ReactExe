// BasicLayout 컴포넌트
// - 화면 상단에 공통적인 메뉴와 링크를 보여줌
// - 아래에 각 페이지별 컴포넌트를 출력
// - children 속성을 활용해서 컴포넌트 내부에 다른 컴포넌트 적용 가능
const BasicLayout = ({children}) => {
    return (
        <>
        <header className="bg-teal-400 p-2">
            <h1 className="text-2xl md:text-4xl">
                header
            </h1>
        </header>

        <div className="bg-white my-1 w-full flex flex-col space-y-4 md:flex-row md:space-a-4 md:space-y-0">
            <aside className="bg-green-300 md:w-1/5 lg:w-1/4 px-5 py-40">
                <h1 className="text-2xl md:text-4xl">
                    Sidebar
                </h1>
            </aside>
            <main className="bg-sky-300 md:w-4/5 lg:w-3/4 px-5 py-40">
                {children}
            </main>
        </div>
        </>
    );
}

export default BasicLayout;