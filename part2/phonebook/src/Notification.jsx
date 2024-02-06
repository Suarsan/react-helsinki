const Notification = ({ message, type }) => {

    const styles = {
        color: type === 'error' ? 'red' : 'green',
        backgroundColor: type === 'error' ? 'rgba(255, 0, 0, .1)' : 'rgba(0, 255, 0, .1)',
        borderRadius: '5px',
        margin: '5px 0',
        padding: '5px'
    };

    if (!message) {
        return null
    }
    return <div style={styles}>{ message }</div>

}

export default Notification