import React from "react"
import PropTypes from 'prop-types'

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
    borderRadius: 50,
    height: '1.4em',
    width: '1.9em',
    margin: '0px 5px 0px 10px',
    border: 'solid white 2px'
  }),
  message: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'white',
    fontSize: '.9em',
    width: '-webkit-fill-available',
    textAlign: 'left',
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

// Colors for different status.
const COLORS = {
  WARNING: '#ffbc5e',
  SUCCESS: '#6cff5e',
  ERROR: '#ff5e5e',
  NONE: '#c9c2c1'
}

// Base component with default parameter values.
function SnackBar({
  action,
  message,
  mode,
  open,
  style,
  actionLabel= 'Okay',
  className = 'alert',
  bottom = true,
  right = true,
  timeout = 3000,
}) {

  const [isOn, setIsOn] = React.useState(false)

  React.useEffect(() => {
    let id = NaN
    if (open) {
      setIsOn(true)

      // Creating timeout listener for removal of component.
      id = setTimeout(() => {
        setIsOn(false)
      }, timeout)
    }

    // Clearing timeout to avoid memory leak.
    return () => clearTimeout(id)
  }, [open, timeout])

  // Validating the required props
  if (isOn && message?.length > 0 && (mode?.toUpperCase() === 'SUCCESS' || mode?.toUpperCase() === 'ERROR' || mode?.toUpperCase() === 'WARNING') && !isNaN(timeout)) {
    return (
      // Container, Overrides CSS otherwise applies default inline CSS.
      <div className={className} style={Object.assign({}, styles.container(bottom, right), style?.containerStyle || {})}>
        {/* Status indicator, Overrides CSS otherwise applies default inline CSS. */}
        <span style={styles.indicator(mode?.toUpperCase())} />
        {/* Message, Overrides CSS otherwise applies default inline CSS. */}
        <span style={Object.assign({}, styles.message, style?.textStyle || {})}>
          {message || 'No message'}
        </span>
        {(typeof action === 'function' && actionLabel?.length < 25)
          &&
          <button
              style={Object.assign({}, styles.actionButton, style?.buttonStyle || {})}
              onClick={(e) => { e.preventDefault(); action(e); }}
            >
              {actionLabel}
          </button>
        }
      </div>
    )
  }
  // Closed snackbar value or invalid props
  return null
}

SnackBar.propTypes = {
  action: PropTypes.func,
  actionLabel: PropTypes.string,
  bottom: PropTypes.bool,
  className: PropTypes.string,
  right: PropTypes.bool,
  style: PropTypes.object,
  timeout: PropTypes.number,

  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf(['WARNING', 'SUCCESS', 'ERROR']).isRequired,
}

export default SnackBar;
