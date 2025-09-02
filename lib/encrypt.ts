import { hash as bcryptHash, compare as bcryptCompare } from "bcrypt-ts-edge";

// Hash a password
export const hash = async (plainPassword: string): Promise<string> => {
  return await bcryptHash(plainPassword, 10); // 10 salt rounds
};

// Compare a password
export const compare = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcryptCompare(plainPassword, hashedPassword);
};
