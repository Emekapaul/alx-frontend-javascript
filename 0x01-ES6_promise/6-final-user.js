import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((responses) => {
      const allResponse = [];
      responses.forEach((response) => {
        if (response.status === 'fulfilled') {
          allResponse.push({
            status: response.status,
            value: response.value,
          });
        } else {
          allResponse.push({
            status: response.status,
            value: `${response.reason}`,
          });
        }
      });
      return allResponse;
    });
}
