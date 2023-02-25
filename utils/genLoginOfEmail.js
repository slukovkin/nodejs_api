export const genLoginOfEmail = (email) => {
  return email.match(/^([\w ]+)/gms).toString()
}