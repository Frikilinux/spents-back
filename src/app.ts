import 'dotenv/config'
import { Server } from './models/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const server = new Server()

server.listen()

export { prisma }
