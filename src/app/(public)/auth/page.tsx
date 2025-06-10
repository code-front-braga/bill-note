import { Check } from 'lucide-react';

import AuthTabsForm from './components/auth-tabs-form';

const AuthPage = () => {
	return (
		<section className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex flex-col justify-center gap-2 md:justify-start">
					<h1 className="font-newsreader flex items-center gap-2 text-lg">
						<div className="bg-primary text-primary-foreground flex size-6 items-center justify-center self-baseline rounded-md">
							<Check size={16} color="#f0f0f0" strokeWidth={4} />
						</div>
						<div>
							Abitus Contas
							<p className="font-inter border-primary border-r-2 pr-1 text-xs">
								Seu controle, seu hábito, sua paz.
							</p>
						</div>
					</h1>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="h-110 w-full max-w-sm">
						<AuthTabsForm />
					</div>
				</div>
			</div>
			<div className="bg-primary relative hidden lg:block">
				<img
					src="/peace.svg"
					alt="Image"
					className="absolute inset-0 h-full w-full object-contain"
				/>
				<p className="text-background font-newsreader absolute top-1/2 left-6 w-64 text-2xl">
					Seu hábito de pagar em dia, simplificando sua{' '}
					<span className="uppercase">vida</span>.
				</p>
			</div>
		</section>
	);
};

export default AuthPage;
