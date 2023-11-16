import React from 'react';
import nProgress from 'nprogress';
import { Button, EyeIcon, Input, NotEyeIcon } from '../dashboard/common';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useNotify, useUser } from '../../hooks';
import { SIGN_IN } from '@/graphql/mutation';
import { useMutation } from '@apollo/client';

export default function LoginForm() {
  // states
  const [email, setEmail] = React.useState('');
  const [inputType, setInputType] = React.useState('password');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [message, setMessage] = React.useState('');
  // hooks
  const router = useRouter();
  const notify = useNotify();
  const [user, setUser] = useUser();
  // mutations
  const [signIn] = useMutation(SIGN_IN);

  // login Function
  const onSubmit = async () => {
    try {
      nProgress.start();
      setDisabled(true);
      if (!email) {
        notify('Debe ingresar su correo', 'error');
        return;
      }
      if (!password) {
        notify('Debe ingresar su contraseña', 'error');
        return;
      }
      const { data } = await signIn({
        variables: {
          data: {
            email,
            password,
          },
        },
      });
      if (data) {
        if (data?.signIn?.user?.userType === 'superadmin') {
          setUser(data?.signIn?.user);
          notify('Se ha iniciado sesión con éxito!', 'success');
          router.push('/dashboard');
        } else {
          setMessage('Para ingresar, debes ser usuario admin');
        }
      }
    } catch (err) {
      notify(err, 'error');
    } finally {
      setDisabled(false);
      nProgress.done();
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-y-3">
      <div className="sm:w-2/3 w-10/12 rounded-lg bg-bg-100 shadow px-10 py-12 flex flex-col items-center gap-y-10">
        <div className="flex flex-col items-center">
          <img alt="" src="/logo/logo-blue.png" className="w-40" />
        </div>
        <div className="flex flex-col gap-y-5 w-full">
          <Input
            label="Correo"
            placeholder="Ingrese su correo..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Contraseña"
            type={inputType}
            value={password}
            className="xl:text-base sm:text-sm text-xs md:h-auto h-8"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            rightIcon={
              showPassword ? (
                <button
                  type="button"
                  onClick={() => {
                    setInputType('password');
                    setShowPassword(false);
                  }}
                >
                  <EyeIcon className="w-5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setInputType('text');
                    setShowPassword(true);
                  }}
                >
                  <NotEyeIcon className="w-5" />
                </button>
              )
            }
          />
        </div>
        {message && <p className="text-danger-300 text-lg">{message}</p>}
        <Button
          disabled={disabled}
          className="w-full bg-primary-400"
          onClick={() => onSubmit()}
        >
          Ingresar
        </Button>
      </div>
      <p className="sm:text-primary-400 text-white font-semibold text-sm">
        © Bud, 2023
      </p>
    </div>
  );
}
