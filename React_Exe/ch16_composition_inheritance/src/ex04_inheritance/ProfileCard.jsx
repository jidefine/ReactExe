import Card from './Card';

function ProfileCard(props){
    return (
        <div>
            <Card title="pororo" backgroundColor="#43a04e">
                <p>안녕. 난 뽀로로야.</p>
                <p>크롱크롱</p>
            </Card>

            {/* props를 통해 컴포넌트의 속성으로 스타일을 전달
            컴포넌트 내부에서 해당 props를 사용하여 스타일을 적용
            ex) backgroundColor="lightgreen" */}
            <Card title="crong" backgroundColor="lightgreen">

                <p>크롱의 하루 일과</p>
                <ul>
                    <li>간지나게 숨쉬기</li>
                    <li>하늘 바라보기</li>
                    <li>뽀로로 괴롭히기</li>
                    <li>멋지게 눕기</li>
                </ul>
            </Card>
        </div>
        
    )
}

export default ProfileCard;