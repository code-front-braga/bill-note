import '@/styles/globals.css';

import { inter, newsreader } from '@/lib/fonts/fonts';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body
				className={`${newsreader.className} ${inter.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
