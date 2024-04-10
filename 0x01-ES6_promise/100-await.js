import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  if (photo && user) {
    return {
      photo: photo,
      user: user
    }
  } else {
    return {
      photo: null,
      user: null
    }
  }
}
