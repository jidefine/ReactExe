function Avatar(props){
    return (
        <img className="avatar" src={props.user.avatarUrl} alt={props.author.name}/>
    )
}

function UserInfo(props){
    return (
        <div className="user-info">
                <Avatar user={props.user}/>
                <div className="user-info-name">{props.user.name}</div>
            </div>
    )
}

function CommentText(props){
    return(
        <div className="comment-text">
                {props.text}
            </div>
    )
}

function CommentDate(props){
    function formatDate(date){
        <div>날짜 : {date}</div>
    }
    return(
        <div className="comment-text">
                {formatDate(props.date)}
        </div>
    )
}

function Comment(props) {

    return (
        
        <div className="comment">
            <UserInfo user={props.user}/>

            <CommentText text={props.text}/>

            <CommentDate text={props.text}/>
        </div>
    )
}

export default Comment;