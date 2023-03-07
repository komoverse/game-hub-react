export interface LoginSocmedDto {
  provider: string;
  token: string;
  otp?: string;
}

export interface WalletsDto {
  account: string;
  chain: {
    id: number;
    unsupported: boolean;
  };
  connector: {
    options: {
      appLogoUrl: string;
    };
    ready: boolean;
  };
}

export interface LoginDto {
  komo_username: string;
  password: string;
  otp?: number | string;
  remember_me?: boolean;
}
