import { H1, P } from '@/components/ui/typography';
import Image from 'next/image';
import background_home from '../../public/background_home.jpeg';
import LoginForm from '../components/login-form';

export default async function LoginPage() {
  return (
    <div className='px-4 py-12 h-dvh flex flex-col gap-2 justify-end relative'>
      <Image
        alt='Background'
        src={background_home}
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        className='object-cover opacity-10 -z-10'
      />
      <H1 className='text-center text-accent-red'>
        Dungeon & Dragons <br /> Digital Game Companion
      </H1>
      <P className='text-center pb-6'>
        Create and manage your D&D characters and NPCs right on your device.
      </P>
      <LoginForm />
    </div>
  );
}
