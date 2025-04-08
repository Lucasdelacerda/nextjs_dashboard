import FluxoDigitalLogo from '@/app/ui/fluxo-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen pt-[20vh]">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col md:shadow-2xl md:shadow-black/40 rounded-2xl p-6 bg-white rounded-xl md:-mt-32">
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <FluxoDigitalLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-500">
          Email: user@nextmail.com <br />
          Senha: 123456
          </p>
        </div>
      </div>

    </main>
  );
}