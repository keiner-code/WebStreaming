export type Data = {
  title: string,
  img: string,
  description: string
}

export interface Streaming {
  id: string,
  image: string,
  title: string,
  provider: string,
  description: string,
  duration: string,
  renewal: boolean, //renovacion
  price: number
}

export interface createStreamingDto extends Omit<Streaming, 'id'> {}


export type Alert = {
  title: string,
  type: string,
  body: string,
  icon: string,
  show: boolean
}

export interface User{
  id: string,
  name: string,
  lastName: string,
  email: string,
  password: string,
  rol: string
}
export interface Profile{
  name: string,
  lastName: string,
  rol: string,
  email: string,
  token: string
}

export interface createUserDto extends Omit<User, 'id'> {}