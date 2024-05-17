
import Comment from "./Comment";

// 데이터를 서버에서 받아왔다고 가정하고, 배열에 저장
const comments = [
    {
        name: "뽀로로",
        comment: "나의 컴포넌트"
    },
    {
        name: "크롱",
        comment: "나의 컴포넌트"
    },
    {
        name: "포비",
        comment: "나의 컴포넌트"
    },
]

function CommentList(props){   

    return(
        <div>
            {
                comments.map((comment)=>{
                    return(
                        <Comment name={comment.name} comment={comment.comment}/>
                    )
                })
            }
        </div>
    )
}

export default CommentList;