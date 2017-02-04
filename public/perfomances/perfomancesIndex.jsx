import connect from "react-refetch"
import React from "react"
import {secPrecisionDate} from "../../common/types/Date"
import db from "../../backend/db"

class PerfomancesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state.perfomances = db.perfomances
    }
    render() {
        const allPerfomances = this.state.perfomances
        return <div>
            <p>
                <Link to="/perfomances/create" className="create-link">Add Perfomance</Link>
            </p>
            <div>
                {Object.keys(allPerfomances).map((id) => <Card perfomance={allPerfomances[id]} />)}
            </div>
        </div>
    }
}

function Card({perfomance}) {
    return <div className="panel panel-default">
        <div className="panel-heading">
            <h3>
                <Link to={"/perfomances/" + perfomance.id}>{perfomance.title}</Link>
            </h3>
            <Link to={"/perfomances/" + perfomance.id + "/edit"}>Edit</Link>
        </div>
        <div className="panel-body">
            <table className="panel-user">
                <tbody>
                <tr>
                    <td>Id:</td><td>{perfomance.id}</td>
                </tr>
                <tr>
                    <td>Title:</td><td>{perfomance.title}</td>
                </tr>
                <tr>
                    <td>Actors count:</td><td>{perfomance.actorsCount}</td>
                </tr>
                <tr>
                    <td>Premiere date:</td><td>{secPrecisionDate(perfomance.premiereDate)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default connect(props => ({
    fetchPerfomances: {
        url: '/api/perfomances/'
    }
}))(PerfomancesIndex)
