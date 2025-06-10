import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';

import SignInForm from './sign-in-form';
import SignUpForm from './sign-up-form';

const AuthTabsForm = () => {
	return (
		<Tabs defaultValue="sign-in" className="w-full">
			<TabsList className="bg-background mb-6">
				<TabsTrigger value="sign-in">Entrar</TabsTrigger>
				<TabsTrigger value="sign-up">Cadastrar</TabsTrigger>
			</TabsList>
			<TabsContent value="sign-in">
				<SignInForm />
			</TabsContent>
			<TabsContent value="sign-up">
				<SignUpForm />
			</TabsContent>
		</Tabs>
	);
};

export default AuthTabsForm;
