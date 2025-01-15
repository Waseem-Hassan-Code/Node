export interface UserData {
  username: string;
  email: string;
  phone: string;
  password: string;
  isActive: boolean;
}

export interface TokenData {
  token: string;
  refreshToken: string;
  expiresAt: Date;
  userId: string;
}
