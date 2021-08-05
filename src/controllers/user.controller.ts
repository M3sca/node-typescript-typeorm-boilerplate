import { User } from "../models/user.model";
import dbConnect from "../utils/dbConnect";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export async function userSave(
  user: IUser,
): Promise<User> {

  await dbConnect();

  let new_user = new User();
  new_user.firstName = user.firstName;
  new_user.lastName = user.lastName;
  new_user.email = user.email;
  new_user.save();  
  return new_user;
}

export async function userGetAll(): Promise<User[]> {
  let connection = await dbConnect();
  const repository = connection.getRepository(User);
  return await repository.find();
}