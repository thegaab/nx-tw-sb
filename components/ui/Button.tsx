import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ label, variant = 'primary' }: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded font-semibold';
  const variantStyles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return <button className={`${baseStyles} ${variantStyles}`}>{label}</button>;
};