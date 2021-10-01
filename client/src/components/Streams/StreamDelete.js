import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStream, fetchStream } from '../../actions';
import history from '../../history';
import Modal from '../Modal';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderAction = () => {
        const { id } = this.props.match.params;

        return <React.Fragment>
            <button className="ui button negative" onClick={() => {
                this.props.deleteStream(id);
            }}>Delete</button>
            <Link className="ui button" to="/">cancel</Link>
        </React.Fragment>
    };

    deleteStream = () => {

    }

    renderContent = () => {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream ?"
        }
        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`
    };

    render() {
        return <div>
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push('/')}
            />
        </div>

    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, {
    deleteStream: deleteStream,
    fetchStream: fetchStream
})(StreamDelete);