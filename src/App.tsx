import { Outlet } from 'react-router-dom'

import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      height: '100vh',
      width: '100vw',
      gridTemplate: `
        "top" auto
        "content" 1fr
        "bottom" auto
        / auto
      `,

      backgroundColor: 'pink',
    },

    // Grid Panels
    gridPanel: {
      // backgroundColor: theme.palette.common.white,
      // border: '1px solid #ff652f',
      // padding: theme.spacing(3),
      display: 'flex',
      justifyContent: 'center',
    },

    topGridPanel: {
      gridArea: 'top',
    },

    contentGridPanel: {
      gridArea: 'content',
      display: 'flex', // grid exterior, flex interior
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      minHeight: '100%',
      minWidth: '100%',
      // padding: theme.spacing(3), // padding will show container background color
      // background: theme.palette.primary.gradient,
    },

    bottomGridPanel: {
      gridArea: 'bottom',
    },
  }),
  { name: 'App' }
)

const App = (props: any) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={clsx(classes.gridPanel, classes.topGridPanel)}>TOP</div>
      <div className={clsx(classes.gridPanel, classes.contentGridPanel)}>
        <Outlet />
      </div>
      <div className={clsx(classes.gridPanel, classes.bottomGridPanel)}>BOTTOM</div>
    </div>
  )
}

export default App
