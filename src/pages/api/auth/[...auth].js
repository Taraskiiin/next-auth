import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '/utils/auth';

import { connectToDatabase } from '/utils/db';

export default NextAuth({
	providers: [
		Providers.Credentials({
			session: { jwt: true },
			credentials: {
				async authorize(credentials) {
					const client = await connectToDatabase();
					const userCollection = client.db().collection('users');
					const user = await userCollection.findOne({
						email: credentials.email,
					});
					if (!user) {
						client.close();
						throw new Error('wrong email or password');
					}
					const isValid = await verifyPassword(
						credentials.password,
						user.password
					);
					if (!isValid) {
						client.close();
						throw new Error('wrong email or password');
					}
					client.close();
					return { email: user.email };
				},
			},
		}),
	],
});
