import bcrypt from "bcrypt"

export const hashPassword = async (pass) => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hashSync(pass, salt)
}
