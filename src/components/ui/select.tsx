import { Circle, CircleCheck } from 'lucide-react';

export function Select({
  name,
  id,
  defaultValue,
  options,
}: React.ComponentProps<'select'> & { options: string[] }) {
  return (
    <>
      {/* <label htmlFor='pet-select'>{label}</label> */}
      <select
        name='pets'
        id='pet-select'
        size={6}
        className='w-full focus:bg-accent-red'
        // default value from db
        defaultValue={'system'}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className='my-2 px-4 py-2 text-md bg-dark-12 rounded-md'
          >
            <span aria-hidden='true'>🐔</span>
            <span>{option == defaultValue ? <CircleCheck /> : <Circle />}</span>
            <span className='pr-2'>{option}</span>
          </option>
        ))}
      </select>
    </>
  );
}
