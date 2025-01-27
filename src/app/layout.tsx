import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
	title: 'CAMEL - Cloud Asset Management Enhanced Launcher',
	description:
		'A project management tool for organziaiton structure pertaining to property management.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />

				{children}
			</body>
		</html>
	);
}
