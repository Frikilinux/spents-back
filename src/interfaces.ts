interface IUser {
  name: string
  age: number
  mail: string
}

interface ISpent {
  name: string
  amount: number
  description?: string
  user: string
  status: boolean
}

export { IUser, ISpent }
