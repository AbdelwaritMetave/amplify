import { CognitoUserPool } from "amazon-cognito-identity-js";

const pooldata = {
  UserPoolId: "us-east-1_tAaSCLom6",
  ClientId: "2oiq17ht546npe9nf7rsi2g0jn",
};

export default new CognitoUserPool(pooldata);
