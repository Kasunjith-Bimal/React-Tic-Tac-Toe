function Cross({ size = 80, color = "red" }) {
  return (<> <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
  >
    <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2" />
    <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2" />
  </svg>
  </>);
}

export default Cross;