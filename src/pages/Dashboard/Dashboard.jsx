// import { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'

import { Helmet } from 'react-helmet-async'

import EmptyContent from './content/EmptyContent/EmptyContent'

import { Routes, Route } from 'react-router-dom'

import logoTrans from '../../assets/images/placeholder-logo.png'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'pink',
    },

    header: {
      display: 'flex',
    },

    // Logo
    logoContainer: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 160,
    },

    logo: {
      width: '100%',
      height: 'auto',
    },
  }),
  { name: 'Dashboard' }
)

const Dashboard = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className={classes.header}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logoTrans} alt="placeholder logo" />
        </div>
        DASHBOARD
      </div>
      <div>
        <Routes>
          <Route path="*" element={<EmptyContent />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard
