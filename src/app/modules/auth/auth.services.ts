
import jwt from 'jsonwebtoken';
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { user_role } from "./auth.constant";
import { isPasswordMatched } from "./auth.utiles";
import config from '../../config';

const register = async (payload: TUser): Promise<any> => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new Error('user already exists');
  }

  // set user role
  payload.role = user_role.user;

  // create new user
  const createNewUser = await User.create(payload);
  return createNewUser;
};

const loginUser = async (payload: TUser) => {

    const user = await User.findOne({ email: payload.email }).select('+password');
    // console.log(user);
    if (!user) {
      throw new Error('User not found');
    }
    if (user.status === 'blocked') {
      throw new Error('User is blocked');
    }
    const passwordMatch = await isPasswordMatched(
      payload.password,
      user.password,
    );
    if (!passwordMatch) {
      throw new Error('Password not matched');
    }
    const jwtPayload = {
      email: user.email,
      role: user.role,
      id:user._id,
      
    };
    // console.log(jwtPayload);
    // console.log(jwtPayload.id);
  
  
  
  
    const accessToken = jwt.sign(
      jwtPayload,
      config.JWT_ACCESS_SECRET as string, 
      {
        expiresIn: config.JWT_ACCESS_EXPIRES_IN, 
        // console.log('JWT_ACCESS_EXPIRES_IN:', config.JWT_ACCESS_EXPIRES_IN);
  
      },
    );
    // console.log("toke is:",accessToken);
  
    const refreshToken = jwt.sign(
      jwtPayload,
      config.JWT_REFRESH_SECRET as string,
      {
        expiresIn: config.JWT_REFRESH_EXPIRES_IN,
      //   console.log('JWT_REFRESH_EXPIRES_IN:', config.JWT_REFRESH_EXPIRES_IN);
  
      },
    );
  
    return {
      user,
      accessToken,
      refreshToken,
    };
    // return {
    //     user,
    //   accessToken: `Bearer ${accessToken}`,
    //   refreshToken: `Bearer ${refreshToken}`,
    // };
  };

export const AuthService = {
  register,
  loginUser
};
