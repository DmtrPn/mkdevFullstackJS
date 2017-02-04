import connect from "react-refetch"
import React from "react"
import {secPrecisionDate} from "../../common/types/Date"
import db from "../../backend/db"

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state.comments = db.perfomanceComments
    }
    render() {
        const allComments = this.state.comments
        return <div>
            <p>
                <Link to="/perfomancesComment/create" className="create-link">Add Comment</Link>
            </p>
            <div>
                {Object.keys(allComments).map((id) => <Card comment={allComments[id]} />)}
            </div>
        </div>
    }
}

function Card({comment}) {
    return <div className="panel panel-default">
        <div className="panel-body">
            <table className="panel-user">
                <tbody>
                <tr>
                    <td>Id:</td><td>{comment.id}</td>
                </tr>
                <tr>
                    <td>from User:</td><td>{comment.fromUserId}</td>
                </tr>
                <tr>
                    <td>Text:</td><td>{comment.text}</td>
                </tr>
                <tr>
                    <td>Created:</td><td>{secPrecisionDate(comment.createdIn)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default connect(props => ({
    fetchComments: {
        url: '/api/perfomancesComment/'
    }
}))(CommentsIndex)
