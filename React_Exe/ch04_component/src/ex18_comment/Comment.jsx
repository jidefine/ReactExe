
const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",

    }
};

function Comment(props){
    return(
        <div style={styles.wrapper}>
             <div style={styles.wrapper}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image} alt="이미지"/>
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}></span>
            </div>
        </div>
    )
}

export default Comment;