import { Provider } from 'next-auth/client';
import Layout from '@/Components/Layout/Layout';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
