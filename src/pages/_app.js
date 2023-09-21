import '@/styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend"


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
    <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
    </DndProvider>
  </Auth0Provider>
  )
}
