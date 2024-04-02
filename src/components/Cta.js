function CTA({ text, width }) {
    const btnStyle = {
        display: 'flex',
        width: width || '128px',
        padding: '16px 20px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '8px',
        background: 'linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)',
        color: '#f5f5f5',
        fontFamily: 'Pretendard',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        cursor: 'pointer',
    };

    return (
        <>
            <p className="Cta-btn" style={btnStyle}>
                {text}
            </p>
        </>
    );
}

export default CTA;
