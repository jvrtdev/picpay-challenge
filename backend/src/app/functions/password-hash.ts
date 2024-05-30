import bcrypt from 'bcryptjs';

const saltRounds = 10;

export async function hashPassword(password: string ): Promise<string> {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPasswotd = await bcrypt.hash(password, salt);
  return hashedPasswotd;
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}