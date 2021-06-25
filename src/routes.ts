import { Router } from 'express'

import {CreateUserController} from "./controllers/CreateUserController"

const router = Router()

const createUserControlle = new CreateUserController()

router.post("/users", createUserControlle.handle)

export { router }