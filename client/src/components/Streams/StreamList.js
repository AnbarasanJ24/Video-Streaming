import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = (props) => {

    useEffect(() => {
        props.fetchStreams();
        console.log(props)
    })

    const renderList = props.streams.map(stream => {
        return (
            <div>
                {stream.title}
            </div>
        )
    })

    return (<div>{renderList()}</div>)
};
const mapStateToProps = (state => {
    return { streams: Object.values(state.streams) }
})
export default connect(mapStateToProps, { fetchStreams })(StreamList);