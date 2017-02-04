import React from "react"
import connect from "react-refetch"
import {PerfomanceForm} from "../../common/types/Perfomance"

class PerfomanceEdit extends Component {

    handleSubmit(e) {
        let {fetchPerfomance} = this.props
        console.log(fetchPerfomance)
    }

    render() {
        let {fetchPerfomance} = this.props

        if (fetchPerfomance.fulfilled) {
            let perfomance = fetchPerfomance.value.data
            let perfomanceForm = fromJSON(fetchPerfomance.value.data, PerfomanceForm)
            return <div>
                <p>
                    <Link to={`/perfomances/${perfomance.id}`}>Detail</Link>
                </p>
                <Form form={perfomanceForm} onSubmit={this.handleSubmit}/>
            </div>
        } else {
            return null
        }
    }
}

function Form({form, onSubmit}) {
    return <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="title">Title</label>
            <div className="input-group">
                <input type="text" id="title" className="form-control" placeholder="Title" defaultValue={form.title}/>
            </div>
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <div className="input-group">
                <input type="text" id="description" className="form-control" placeholder="Description" defaultValue={form.description}/>
            </div>
        </div>

        <div>
            <button type="submit" className="btn btn-submit">Save</button>
        </div>
    </form>
}
export default connect((props) => {
    let apiUrl = `/api/perfomances/${props.params.id}`
    return {
        fetchPerfomance: {
            url: apiUrl,
        }
    }
})(PerfomanceEdit)