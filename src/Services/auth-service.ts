import User from "./../DataBase/Model/User/User";
import { UserData } from "./../Interfaces/User";

async function createUser(userData: UserData) {
  try {
    const user = await User.create({
      username: userData.username,
      email: userData.email,
      password: userData.password,
      phone: userData.phone,
      isActive: userData.isActive,
    });
    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export default createUser;
