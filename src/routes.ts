import { Router } from 'express'

import {CreateUserController} from "./controllers/CreateUserController"
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
const router = Router()

const createUserControlle = new CreateUserController()
const createTagController = new CreateTagController()
const authenticate = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post("/users", createUserControlle.handle)
router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/login', authenticate.handle)
router.post('/compliments', createComplimentController.handle)

export { router }