'use client';

import { useForm } from 'react-hook-form';

import CustomFormField from '@/components/custom-form-field';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { Form } from '@/ui/form';

import CustomSubmitButton from './custom-submit-button';
import InputsContainer from './inputs-container';

const SignUpForm = () => {
	const form = useForm();
	const { handleSubmit, control } = form;

	const handleSignInSubmit = async () => {};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-primary">Pronto para organizar?</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={handleSubmit(handleSignInSubmit)}>
						<InputsContainer>
							<CustomFormField
								control={control}
								name=""
								label="Seu nome"
								placeholder="digite seu nome..."
							/>

							<CustomFormField
								control={control}
								name=""
								label="Seu email"
								placeholder="digite seu email..."
							/>

							<div className="flex items-center gap-4">
								<CustomFormField
									control={control}
									name=""
									label="Crie uma senha"
									placeholder="nova senha..."
								/>

								<CustomFormField
									control={control}
									name=""
									label="Confirme a senha"
									placeholder="confirme..."
								/>
							</div>
						</InputsContainer>

						<CustomSubmitButton buttonText="Criar Conta" />
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default SignUpForm;
