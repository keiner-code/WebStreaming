
export type Data = {
  title: string
  img: string
  description: string
}

export interface Streaming {
  id: string
  image: string
  title: string
  provider: string
  description: string
  duration: string
  renewal: boolean //renovacion
  price: number
}

export interface createStreamingDto extends Omit<Streaming, 'id'> {}

export type Alert = {
  title: string
  type: string
  body: string
  icon: string
  show: boolean
}

export interface User {
  id: string
  name: string
  lastName: string
  email: string
  password: string
  rol: string
  money: number
}
export interface Profile {
  name: string
  lastName: string
  rol: string
  email: string
  token: string
  money: number
  id: string
  idUser: string
}

export interface createUserDto extends Omit<User, 'id'> {}

export interface SaleAccount {
  title: string
  cliente: string
  correo: string
  clave: string
  pinPerfil: string
  fechaInicial: string
  fechaFinaliza: string
  nota: string
  IdUser: string
  nameUser: string
  price: number
  state: string
}

export interface Message {
  name: string
  message: string
  time: string
}
export interface ChatUser {
  idUser: string
  name: string
}


export interface createSaleAccountDto extends Omit<SaleAccount, 'id'> {}
