import { Router } from 'express'

import {CreateUserController} from "./controllers/CreateUserController"
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticate } from './middlewares/ensureAuthenticate'
import { ListUserSenderComplimentsController } from './controllers/ListUsersenderComplimentsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListTagController } from './controllers/ListTagController'
import { ListUsersController } from './controllers/ListUsersControlle'
const router = Router()

const createUserControlle = new CreateUserController()
const createTagController = new CreateTagController()
const authenticate = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSenderComplimentsController = new ListUserSenderComplimentsController()

const listUserreceiveComplimentsController = new ListUserReceiveComplimentsController()

const listTags = new ListTagController()
const listUsers = new ListUsersController()

router.post("/users", createUserControlle.handle)
router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle)
router.post('/login', authenticate.handle)
router.post('/compliments', ensureAuthenticate, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticate, listUserSenderComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticate, listUserreceiveComplimentsController.handle)

router.get("/tags",ensureAuthenticate, listTags.handle)
router.get("/users",ensureAuthenticate, listUsers.handle)

export { router }