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
