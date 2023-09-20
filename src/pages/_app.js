import '@/styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react';


const domain = 'dev-gg6d0y0ixkvbznbp.us.auth0.com';
const clientId = 'OkpRG8wdsbARJ0D9ZPg6vSyko7BsImJx'; 

export default function App({ Component, pageProps }) {
  return (
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{
          redirect_uri: 'http://localhost:3000'
        }}
  >
    <Component {...pageProps} />
  </Auth0Provider>
  )
}
