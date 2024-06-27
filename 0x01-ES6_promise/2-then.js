export default function handleResponseFromAPI(promise) {
/* eslint-disable no-unused-vars */
  return promise.then((result) => ({ status: 200, body: 'success' }))
    .catch((error) => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
/* eslint-enable no-unused-vars */
}
