import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const upPhoto = await uploadPhoto();
    const ctUser = await createUser();
    return {
      photo: upPhoto,
      user: ctUser,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
