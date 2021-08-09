import React from "react";

const styles = {
  container: {
    height: 50,
    width: 'auto',
    maxWidth: '50%',
    minWidth: '25%',
    background: 'linear-gradient(144deg, rgba(2,0,36, .7) 0%, rgba(121,9,90,.7) 0%, rgba(95,53,126,.7) 46%, rgba(0,212,255,.7) 100%)',
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

function ReuseableComponent({ message, mode, open, timeout = 3000 }) {
  const [isOn, setIsOn] = React.useState(false)
  const [timeOutListener, setListener] = React.useState(() => {});
  React.useEffect(() => {

    if (open) {
      setIsOn(true);
      let unsubscribe = setTimeout(() => {
        setIsOn(false); 
      }, timeout)
      setListener(unsubscribe)
    }
    return () => timeOutListener()
  }, [open, timeOutListener, timeout])

  return (
    isOn
      ?
      <div style={styles.container}>
        <span style={styles.indicator(mode)} />
        <span style={styles.message}>{message || 'Default message'}</span>
      </div>
    :
      null
  );
}

export default ReuseableComponent;
