export const oktaConfig = {
    clientId: '0oa8z7parzcpGzQgJ5d7',
    issuer: 'https://dev-60609419.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scope: ['openId', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}