const buttonStyle = {
    display: 'inline-block',
    padding: '0.35em 1.2em',
    border: '0.1em solid #33C3F0',
    margin: '2rem 0.3em 0.3em 0',
    borderRadius: '0.12em',
    boxSizing: 'border-box',
    textDecoration: 'none',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '300',
    color: '#FFFFFF',
    backgroundColor: '#33C3F0',
    textAlign: 'center',
    transition: 'all 0.2s'
  };
  
  function Button({ children, onClick, className = '', type = 'button' }) {
    return (
      <button
        style={buttonStyle}
        class={`button ${className}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }
  
  export default Button;