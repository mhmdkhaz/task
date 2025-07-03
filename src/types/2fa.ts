// types/2fa.types.ts
export interface AuthPayload {
  email: string;
  password: string;
}

export interface CodePayload extends AuthPayload {
  code: string;
}

export interface HandleTwoFactorPayload {
  email: string;
  code: string;
}

export interface QRCodeResponse {
  qrCode: string;
  secret: string;
}

export interface RecoveryCodesResponse {
  codes: string[];
}

export interface TwoFactorStatusResponse {
  enabled: boolean;
}

export interface ApiResponse {
  message: string;
  data?: any;
  token?: string;
}
