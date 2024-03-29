'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.post('/user', 'UserController.store')
Route.post('/sessions', 'SessionController.store')
Route.post('/passwords', 'ForgotPasswordController.store')