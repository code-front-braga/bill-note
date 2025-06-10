'use client';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/ui/button';

const GoogleSubmitButton = () => {
	return (
		<Button
			variant="outline"
			className="text-primary flex w-full items-center justify-between"
		>
			Google
			<FcGoogle />
		</Button>
	);
};

export default GoogleSubmitButton;
