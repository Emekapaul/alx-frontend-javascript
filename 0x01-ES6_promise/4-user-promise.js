export default function signUpUser(firstName, lastName) {
  const pro = Promise.resolve({ firstName: `${firstName}`, lastName: `${lastName}` });
  return pro;
}
