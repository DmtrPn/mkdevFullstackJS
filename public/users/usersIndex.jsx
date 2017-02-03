import connect from "react-refetch"
import React from "react"
import {secPrecisionDate} from "../../common/types/Date"
import db from "../../backend/db"

class UserIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state.users = db.users
    }
    render() {
        const allUsers = this.state.users
        return <div>
            <p>
                <Link to="/users/create" className="create-link">Add User</Link>
            </p>
            <div>
                {Object.keys(allUsers).map((id) => <Card user={allUsers[id]} />)}
            </div>
        </div>
    }
}

function Card({user}) {
    return <div className="panel panel-default">
        <div className="panel-heading">
            <h3>
                <Link to={"/users/" + user.id}>{user.userName}</Link>
            </h3>
            <Link to={"/users/" + user.id + "/edit"}>Edit</Link>
        </div>
        <div className="panel-body">
            <table className="panel-user">
                <tbody>
                    <tr>
                        <td>Id:</td><td>{user.id}</td>
                    </tr>
                    <tr>
                        <td>Role:</td><td>{user.role}</td>
                    </tr>
                    <tr>
                        <td>Name:</td><td>{user.userName}</td>
                    </tr>
                    <tr>
                        <td>Created:</td><td>{secPrecisionDate(user.inclusionDate)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default connect(props => ({
    fetchUsers: {
        url: '/api/users/'
    }
}))(UserIndex)
