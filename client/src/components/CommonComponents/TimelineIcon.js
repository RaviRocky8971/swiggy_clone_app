const TimelineIcon = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '40px',
            marginRight: '10px'
        }}>
            <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#bbb'
            }} />
            <div style={{
                width: '2px',
                flex: 1,
                backgroundColor: '#bbb'
            }} />
            <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#bbb'
            }} />
        </div>
    );
};

export default TimelineIcon;
