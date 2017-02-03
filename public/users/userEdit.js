import React from "react"
import connect from "react-refetch"
import {UserForm} from "../../common/types/User"

class UserEdit extends Component {

    handleSubmit(e) {
        console.log('Send data to server')
    }

    render() {
        let {fetchUser} = this.props

        if (fetchUser.fulfilled) {
            let user = fetchUser.value.data
            let userForm = fromJSON(fetchUser.value.data, UserForm)
            return <div>
                <p>
                    <Link to={`/users/${user.id}`}>Detail</Link>
                </p>
                <Form form={userForm} onSubmit={this.handleSubmit}/>
            </div>
        } else {
            return null
        }
    }
}

function Form({form, onSubmit}) {
    return <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <div className="input-group">
                <input type="text" id="username" className="form-control" placeholder="Username" defaultValue={form.userName}/>
            </div>
        </div>

        <div>
            <button type="submit" className="btn btn-submit">Save</button>
        </div>
    </form>
}
export default connect((props) => {
    let apiUrl = `/api/users/${props.params.id}`
    return {
        fetchUser: {
            url: apiUrl,
        }
    }
})(UserEdit)