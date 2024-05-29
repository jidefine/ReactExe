import { useParams } from "react-router-dom";

function Topic({contents}){
    // useParams을 사용하면 현재 컴포넌트가 routing된 변수값을 얻을 수 있음
    const params = useParams();
    const topic_id = params.topic_id;
    let selected_topic ={
        title: 'Sorry',
        description: 'Not Found'
    };
    for(let i=0; i<contents.length; i++){
        if(contents[i].id === Number(topic_id)){
            selected_topic = contents[i];
            break;
        }
    }
    console.log(params);

    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    );
}

export default Topic;