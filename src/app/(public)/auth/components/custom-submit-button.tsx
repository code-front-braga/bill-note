import { Button } from '@/ui/button';

const CustomSubmitButton = ({ buttonText }: { buttonText: string }) => {
	return (
		<Button type="submit" variant="link" className="mt-6">
			{buttonText}
		</Button>
	);
};

export default CustomSubmitButton;
