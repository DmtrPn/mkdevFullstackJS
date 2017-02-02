let connect =  require('react-refetch')
let Users = require('../../common/types/User')

class UserForm extends React.Component {
    render() {
        const usersList = this.props
        if (usersList.fullfiled) {
            return Object.keys(usersList).map(id => {
                let currentUser = usersList[id]
                return <div>
                    <table className='user'>
                        <tbody>
                        <tr>
                            <td>Role:</td>
                            <td>{currentUser.role}</td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>{currentUser.userName}</td>
                        </tr>
                        <tr>
                            <td>Inclusion:</td>
                            <td>{currentUser.inclusionDate}</td>
                        </tr>
                        <tr>
                            <td>Exclusion:</td>
                            <td>{currentUser.exclusionDate}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            })
        }

    }
}

connect(props => ({
    usersList: '/users'
}))(Users)

const users = <UserForm />

let renderTarget = document.getElementById('content');

ReactDOM.render(users, renderTarget);
