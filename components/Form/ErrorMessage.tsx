import { useFormContext, FormState } from 'react-hook-form';
import classNames from 'classnames';

interface FormErrors {
  [key: string]: {
    message: string;
  };
}

export function ErrorMessage({
  className,
  name,
}: {
  className?: string;
  name: string;
}) {
  const {
    formState: { errors },
  }: { formState: FormState<FormErrors> } = useFormContext();

  const errorMessage: any = errors?.[name]?.message;

  return (
    <>
      {errorMessage && (
        <div className={classNames('text-red-500 py-1 text-sm', className)}>
          {errorMessage}
        </div>
      )}
    </>
  );
}
