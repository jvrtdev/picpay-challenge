import jwt from 'jsonwebtoken';


const secretKey: any = process.env.SECRET_KEY;

export function generateToken(payload: object, expiresIn: string | number = '1h'): string {
  const token = jwt.sign(payload, secretKey, {expiresIn});
  return token;
}

export function verifyToken(token: string): Object | null {
  try{
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch(error) {
    return null
  }
}