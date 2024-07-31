// service/collaborators.ts

const users = [
  { id: 7, name: 'John Doe', email: 'john@example.com' },
  { id: 1, name: 'Mario Aldana', email: 'a@gmail.com' },
  { id: 2, name: 'Mateo Lux', email: 'b@gmail.com' },
  { id: 3, name: 'Alejandro Gomez', email: 'c@gmail.com' },
  { id: 4, name: 'Mariana Castillo', email: 'd@gmail.com' },
  { id: 5, name: 'Alejandra Alvarez', email: 'e@gmail.com' },
  { id: 6, name: 'Nombre extra', email: 'f@hotmail.com' },
]

export function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users)
    }, 500) // Simulate network delay
  })
}

export function getUserById(id: number): Promise<User | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.find((user) => user.id === id))
    }, 500) // Simulate network delay
  })
}

export function updateUser(updatedUser: User): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = users.findIndex((user) => user.id === updatedUser.id)
      if (index !== -1) {
        users[index] = updatedUser
        resolve(updatedUser)
      } else {
        reject(new Error('User not found'))
      }
    }, 500) // Simulate network delay
  })
}
