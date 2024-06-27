export default function uploadPhoto(filename) {
  const pro = Promise.reject(new Error(`${filename} cannot be processed`));
  return pro;
}
