interface OAuthConfig {
  domain: string;
  scope: string[];
  redirectSignIn: string;
  redirectSignOut: string;
  responseType: 'code' | 'token'; // Specify allowed response types
}

interface AWSMobileConfig {
  aws_project_region: string;
  aws_cognito_identity_pool_id: string;
  aws_cognito_region: string;
  aws_user_pools_id: string;
  aws_user_pools_web_client_id: string;
  oauth: OAuthConfig;
}

const awsmobile: AWSMobileConfig = {
  aws_project_region: "eu-north-1",
  aws_cognito_identity_pool_id: "eu-north-1:6770b834-6810-400d-b833-42efdb67362e",
  aws_cognito_region: "eu-north-1",
  aws_user_pools_id: "eu-north-1_nwF4de95O",
  aws_user_pools_web_client_id: "7cfak0359hri04si2vhq92p6e6",
  oauth: {
    domain: "app-with-google-auth-local.auth.eu-north-1.amazoncognito.com",
    scope: ["email", "openid"],
    redirectSignIn: "http://localhost:5173/",
    redirectSignOut: "http://localhost:5173/",
    responseType: "code"
  }
};

export default awsmobile;
