import React, {PropTypes} from 'react'

function Comment(props) {

    const {text, user} = props.comment
    return (
        <div>
            {text}
            {user && <b> by {user}</b>}
        </div>
    )
}


export default Comment

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        user: PropTypes.string
    }),
};