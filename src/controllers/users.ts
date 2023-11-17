import { Request, Response } from 'express'
import { IUser } from '../interfaces'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getUsers = async (req: Request, res: Response) => {

  const users = await prisma.user.findMany()

  prisma.$disconnect()

  res.status(200).json({
    message: 'Get users',
    data : users
  })
}

const createUser = async (req: Request, res: Response) => {
  const user: IUser = req.body

  console.log(req.body);
  
  const { age, mail, name } = user

  const userInDB = await prisma.user.findUnique({
    where: {
      mail,
    },
  })

  if (userInDB) {
    return res.status(400).json({
      message: 'User already exists',
    })
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      age,
      mail,
    },
  })

  prisma.$disconnect()

  res.status(201).json({
    code: 201,
    message: 'User created successfully',
    user: newUser,
  })
}

export { getUsers, createUser }
