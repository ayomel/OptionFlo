import React, {useState, useEffect, useContext} from 'react'
import swal from 'sweetalert'
import {Redirect} from 'react-router'
import {FirebaseContext} from '../../context/auth'
import ResetPassword from './ResetPassword'

function getParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  var regexS = '[\\?&]' + name + '=([^&#]*)'
  var regex = new RegExp(regexS)
  var results = regex.exec(window.location.href)
  if (results == null) return ''
  else return decodeURIComponent(results[1].replace(/\+/g, ' '))
}

function VerifyEmail() {
  const {firebase, currentUser} = useContext(FirebaseContext)

  const [completed, setCompleted] = useState(false)
  const [home, setHome] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [resetPassword, setResetPassword] = useState(false)
  let mode
  let actionCode = getParameterByName('oobCode')

  useEffect(() => {
    if (signIn || home || resetPassword) return

    mode = getParameterByName('mode')

    var auth = firebase.auth

    switch (mode) {
      case 'verifyEmail': {
        auth
          .applyActionCode(actionCode)
          .then(() => {
            setCompleted(true)
            swal(
              'Success',
              'Your email has successfully been verified',
              'success'
            ).then(() => {
              setSignIn(true)
            })
          })
          .catch(e => {
            if (currentUser != null && currentUser.emailVerified) {
              swal(
                'Success',
                'Your email has successfully been verified',
                'success'
              ).then(() => {
                setSignIn(true)
              })
            } else if (firebase.user != null && firebase.user.emailVerified) {
              swal(
                'Success',
                'Your email has successfully been verified',
                'success'
              ).then(() => {
                setSignIn(true)
              })
            } else if (firebase.auth.currentUser != null && firebase.auth.currentUser.emailVerified) {
              swal(
                'Success',
                'Your email has successfully been verified',
                'success'
              ).then(() => {
                setSignIn(true)
              })
            } else if (!completed) {
              swal(
                'Error',
                'Invalid or expired code, please try verifying your email again. If you have already verified your email, then no futher action is needed.',
                'error'
              )

              setHome(true)
            }
            console.log(e)
          })
        break
      }
      case 'resetPassword': {
        auth
          .verifyPasswordResetCode(actionCode)
          .then(e => {
            setResetPassword(true)
          })
          .catch(e => {
            console.log(e)
            /*swal(
              'Error',
              'Invalid or expired code, please try resetting your passoword again. If you have already reset your password, then no futher action is needed.',
              'error'
            )*/
            setHome(true)
          })
        break
      }
    }
  })
  if (resetPassword) {
    return <ResetPassword actionCode={actionCode} firebase={firebase} />
  }
  if (home) {
    return <Redirect to="/" />
  } else if (signIn) {
    return <Redirect to="/login" />
  } else {
    return null
  }
}

export default VerifyEmail
