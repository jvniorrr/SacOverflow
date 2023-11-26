import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { readUser } from '@/lib/actions';

import { Suspense } from 'react';
import Loader from './loading';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
	metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
	title: 'CAMEL - Cloud Asset Management Enhanced Launcher',
	description:
		'A project management tool for organziaiton structure pertaining to property management.',
	keywords: [
		'project management',
		'project',
		'camel',
		'camel services',
		'cloud asset management enhanced launcher',
		'NextJS',
	],
	authors: [
		{
			name: 'SacOverflow',
			url: 'https://github.com/hashemJaber/SacOverflow',
		},
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://camel.services/',
		title: 'CAMEL',

		siteName: 'CAMEL',
		description: 'A project management tool for property management.',

		images: [
			{
				url: 'https://apqmqmysgnkmkyesdrnn.supabase.co/storage/v1/object/public/profile-avatars/wyncoservices.png',
				width: 800,
				height: 600,
			},
		],
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// get supabase client
	const {
		data: { user },
	} = await readUser();

	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar session={user || undefined} />
				<Suspense fallback={<Loader />}>{children}</Suspense>
			</body>
		</html>
	);
}
