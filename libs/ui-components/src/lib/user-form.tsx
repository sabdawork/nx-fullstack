'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

// Define Zod schema
const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  age: z.union([z.string().regex(/^\d+$/, 'Must be a number'), z.literal('')]).optional(),
});

type UserFormData = z.infer<typeof userSchema>;
const defaultValues: UserFormData = { name: '', email: '', age: '' };

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  const onSubmit = (data: UserFormData) => {
    toast.success(`Hello ${data.name}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium leading-relaxed">Name</label>
        <input {...register('name')} className="input input-info" />
        {errors.name && (
          <p className="text-red-500 text-sm leading-relaxed">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium leading-relaxed">Email</label>
        <input {...register('email')} type="email" className="input input-info" />
        {errors.email && (
          <p className="text-red-500 text-sm leading-relaxed">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium leading-relaxed">Age (optional)</label>
        <input {...register('age')} type="text" className="input input-info" />
        {errors.age && <p className="text-red-500 text-sm leading-relaxed">{errors.age.message}</p>}
      </div>

      <button type="submit" className="btn btn-info">
        Submit
      </button>
    </form>
  );
}
