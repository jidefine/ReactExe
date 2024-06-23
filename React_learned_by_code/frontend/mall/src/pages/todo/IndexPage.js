/*Outlet
- 상위 컴포넌트와 하위 컴포넌트에 중첩적으로 라우팅이 적용될 때 
기존 컴포넌트의 구조를 유지할 수 있게 함
- 좀 더 세밀한 레이아웃의 재사용 단위 구성 가능*/

import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {

    return (
        <BasicLayout>
            <div className="w-full flex m-2 p-2 ">
                <div className="text-xl m-1 p-2  w-20 font-extrabold text-center underline">
                    LIST
                </div>

                <div className="text-xl m-1 p-2 w-20 font-extrabold  text-center underline">
                    ADD
                </div>

            </div>
            <div className="flex flex-wrap w-full">
                <Outlet />
            </div>
        </BasicLayout>
    );
}

export default IndexPage;
