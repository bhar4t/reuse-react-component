import React from "react";

const styles = {
  container: {
    height: 50,
    width: 'auto',
    maxWidth: '50%',
    minWidth: '25%',
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(144deg, rgba(2,0,36,1) 0%, rgba(121,9,90,1) 0%, rgba(95,53,126,1) 46%, rgba(0,212,255,1) 100%)',
    display: 'flex',
    alignItems: 'center',
    zIndex: 999,
    borderRadius: 20,
    border: 'white double 8px',
    pointerEvents: 'none',
    position: 'fixed',
    bottom: 24,
    right: 24,
  },
  indicator: (color) => ({
    backgroundColor: COLORS?.[color] || COLORS.NONE,
    borderRadius: 25,
    height: '2.5vh',
    width: '2.5vh',
    margin: '8px 5px 5px 10px',
    border: 'solid white 2px'
  }),
  message: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'white',
    fontSize: '2vh',
  }
}

const COLORS = {
  WARNING: '#ffbc5e',
  SUCCESS: '#6cff5e',
  ERROR: '#ff5e5e',
  NONE: '#c9c2c1'
}

function ReuseableComponent({ message, mode, open }) {
  const [isOn, setIsOn] = React.useState(false)
  let timeOutListener = () => {};
  React.useEffect(() => {

    if (open) {
      setIsOn(true);
      timeOutListener = setTimeout(() => {
        setIsOn(false); 
      }, 3000)
    }
    return () => timeOutListener()
  }, [open])

  return (
    isOn
      ?
      <div style={styles.container}>
        <span style={styles.indicator(mode)} />
        <span style={styles.message}>{message || 'No message'}</span>
      </div>
    :
      null
  );
}

export default ReuseableComponent;
