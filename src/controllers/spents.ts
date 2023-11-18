import { Request, Response } from 'express'
import { ISpent } from '../interfaces'
import { prisma } from '../app'

const getSpents = async (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    message: 'Get spents',
  })
}

const createSpent = async (req: Request, res: Response) => {
  const spent: ISpent = req.body

  const { name, amount, description, user } = spent

  const userInDB = await prisma.user.findUnique({
    where: {
      mail: user,
    },
  })

  if (!userInDB) {
    return res.status(400).json({
      message: 'User not found',
    })
  }

  prisma.$disconnect()

  const newSpent = await prisma.spent.create({
    data: {
      name,
      amount,
      description,
      user,
    },
  })

  prisma.$disconnect()

  res.status(201).json({
    message: 'Spent created',
    data: newSpent,
  })
}

export { getSpents, createSpent }
