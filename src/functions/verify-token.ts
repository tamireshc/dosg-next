import { jwtVerify } from "jose"
import { TextEncoder } from "util"

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false
  try {
    await jwtVerify(token, new TextEncoder().encode("string de segurança"), {
      algorithms: ["HS256"]
    })
    return true

  } catch (error) {
    return false
  }
}
//continua no comentário do middleware