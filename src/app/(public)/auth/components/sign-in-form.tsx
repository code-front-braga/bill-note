'use client';

import { useForm } from 'react-hook-form';

import CustomFormField from '@/components/custom-form-field';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/ui/card';
import { Form } from '@/ui/form';
import { Separator } from '@/ui/separator';

import CustomSubmitButton from './custom-submit-button';
import GoogleSignInForm from './google-sign-in-form';
import InputsContainer from './inputs-container';

const SignInForm = () => {
	const form = useForm();
	const { handleSubmit, control } = form;

	const handleSignInSubmit = async () => {};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-primary">Entre para organizar.</CardTitle>
				<CardDescription>Faça o seu login agora mesmo!</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={handleSubmit(handleSignInSubmit)}>
						<InputsContainer>
							<CustomFormField
								control={control}
								name=""
								label="Seu email"
								placeholder="digite seu email..."
							/>

							<CustomFormField
								control={control}
								name=""
								label="Sua senha"
								placeholder="digite sua senha..."
							/>
						</InputsContainer>

						<CustomSubmitButton buttonText="Entrar" />
					</form>
				</Form>
			</CardContent>

			<CardFooter className="flex-col">
				<div className="relative w-full">
					<span className="bg-background text-muted-foreground/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs">
						Ou
					</span>
					<Separator className="bg-primary/20" />
				</div>

				<div className="mt-8 w-full space-y-2">
					<p className="text-muted-foreground text-xs">Entre com o Google</p>
					<GoogleSignInForm />
				</div>
			</CardFooter>
		</Card>
	);
};

export default SignInForm;
