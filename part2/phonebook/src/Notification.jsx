const Notification = ({ message }) => {

    const errorClass = {
        color: 'green',
        backgroundColor: 'rgba(0, 255, 0, .1)',
        borderRadius: '5px',
        margin: '5px 0',
        padding: '5px'
    };
    if (!message) {
        return null
    }
    return <div style={errorClass}>{ message }</div>

}

export default Notification