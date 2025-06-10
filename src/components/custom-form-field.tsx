import React from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/ui/form';
import { Input } from '@/ui/input';

interface CustomFormFieldProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label: string;
	ref?: React.Ref<HTMLInputElement>;
	disabled?: boolean;
	placeholder: string;
}

const CustomFormField = <T extends FieldValues>({
	control,
	name,
	label,
	ref,
	disabled,
	placeholder,
}: CustomFormFieldProps<T>) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="relative">
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							{...field}
							ref={ref}
							disabled={disabled}
							placeholder={placeholder}
						/>
					</FormControl>

					<FormMessage className="absolute -bottom-5 text-red-500" />
				</FormItem>
			)}
		/>
	);
};

export default CustomFormField;
