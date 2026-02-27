export interface UserClaims {
  sub: string;
  email?: string;
  [key: string]: unknown;
}
