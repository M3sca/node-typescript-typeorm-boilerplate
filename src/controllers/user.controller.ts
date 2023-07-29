import { getDataSource } from "../lib/database/dataSource";
import { User } from "../models/user.model";


export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export async function userSave(
  user: IUser,
): Promise<User> {

  await getDataSource();

  let newUser = new User();
  newUser.firstName = user.firstName;
  newUser.lastName = user.lastName;
  newUser.email = user.email;
  newUser.save();  
  return newUser;
}

export async function userGetAll(): Promise<User[]> {
  let connection = await getDataSource();
  const repository = connection.getRepository(User);
  return await repository.find();
}