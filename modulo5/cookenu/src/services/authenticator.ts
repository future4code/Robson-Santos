import { config } from "dotenv"
import { sign, verify } from "jsonwebtoken"
import { authenticatorData } from '../types'

config()

const { JWT_KEY } = process.env

export const generateToken = (
  payload: authenticatorData
): string => sign(
  payload,
  JWT_KEY!,
  {expiresIn: '1h'}
)

export const getTokenData = (
  token: string
): authenticatorData | null => {
  try {
    const { id } =verify(token, JWT_KEY!) as authenticatorData

    return { id }
  } catch (error) {
    return null
  }
}