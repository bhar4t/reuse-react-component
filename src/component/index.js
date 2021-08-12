import React from "react";

const styles = {
  container: (bottom, right) => ({
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
    [bottom ? 'bottom' : 'top']: 24,
    [right ? 'right' : 'left']: 24,
  }),
  indicator: (color) => ({
    backgroundColor: COLORS?.[color] || COLORS.NONE,
    borderRadius: 25,
    height: 16,
    width: 20,
    margin: '8px 5px 5px 10px',
    border: 'solid white 2px'
  }),
  message: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'white',
    fontSize: '2vh',
    width: '-webkit-fill-available'
  },
  actionButton: {
    margin: '0px 8px',
    alignSelf: 'center',
    justifySelf: 'end',
    backgroundColor: 'black',
    color: 'white',
    pointerEvents: 'auto',
    padding: 4,
    borderRadius: 4,
    border: 'solid white 2px'
  }
}

const COLORS = {
  WARNING: '#ffbc5e',
  SUCCESS: '#6cff5e',
  ERROR: '#ff5e5e',
  NONE: '#c9c2c1'
}

function SnackBar({
  message,
  mode,
  open,
  className = 'alert',
  timeout = 3000,
  action,
  actionLabel= 'Okay',
  bottom = true,
  right = true,
  style
}) {

  const [isOn, setIsOn] = React.useState(false)
  let id = NaN;

  React.useEffect(() => {
    if (open) {
      setIsOn(true)
      id = setTimeout(() => {
        setIsOn(false)
      }, timeout)
    }
    return () => clearTimeout(id)
  }, [open, timeout])

  if (isOn && message?.length > 0 && (mode.toUpperCase() === 'SUCCESS' || mode.toUpperCase() === 'ERROR' || mode.toUpperCase() === 'WARNING') && !isNaN(timeout)) {
    return (
      <div className={className} style={Object.assign({}, styles.container(bottom, right), style?.containerStyle || {})}>
        <span style={styles.indicator(mode.toUpperCase())} />
        <span style={Object.assign({}, styles.message, style?.textStyle || {})}>
          {message || 'No message'}
        </span>
        {typeof action === 'function' && actionLabel?.length < 25
          ?
            <button
                style={Object.assign({}, styles.actionButton, style?.buttonStyle || {})}
                onClick={(e) => { e.preventDefault(); action(e); }}
              >
                {actionLabel}
              </button>
            :
              null}
      </div>
    )
  } 
  return null
}

export default SnackBar;
