import { Inter, Newsreader } from 'next/font/google';

const newsreader = Newsreader({
	subsets: ['latin'],
	weight: ['400', '700'],
});

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] });

export { inter, newsreader };
