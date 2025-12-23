function Circle({size = 80, color = "green"}) {
    return (<>
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color }}
        >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        </svg>
    </>);
}

export default Circle;