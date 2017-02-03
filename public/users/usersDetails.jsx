import connect from "react-refetch"
import React from "react"
import {secPrecisionDate} from "../../common/types/Date"
import db from "../../backend/db"

class UserDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state.users = db.users
    }

    render() {
        const allUsers = this.state.users

        return <div>
            <Card user={allUsers['103']}/>
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
                    {[
                        ...[user.exclusionDate ?
                        [<td>Exclusion:</td>, <td>{secPrecisionDate(user.exclusionDate)}</td>] : []]
                    ]}
                    {[
                        ...[user.countOfPerfomance ?
                            [<td>Count of perfomance:</td>, <td>{user.countOfPerfomance}</td>] : []]
                    ]}
                </tbody>
            </table>
        </div>
    </div>
}

export default connect(props => ({
    fetchUsers: {
        url: '/api/users/${props.params.id}`'
    }
}))(UserDetail)
