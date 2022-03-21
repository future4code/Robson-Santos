export type authenticatorData = {
  id: string
}

export type user = {
  id: string,
  name: string,
  email: string,
  password: string
}

export type recipe = {
  id: string,
  title: string,
  description: string,
  createdAt: string,
  authorId: string
}

export const userTableName = 'cookenu_users'
export const recipesTableName = 'cookenu_recipes'