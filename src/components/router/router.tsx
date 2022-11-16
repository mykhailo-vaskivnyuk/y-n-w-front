import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Palette } from '@components/palette/palette';
import { Main } from '@components/views/main/main';
import { Redirect } from '@components/router/redirect';
import { Login } from '@components/views/account/login/login';
import { Logout } from '@components/views/account/logout/logout';
import { Confirm } from '@components/views/account/confirm/confirm';
import { Restore } from '@components/views/account/restore/restore';
import { About } from '@components/views/about/about';
import { Account } from '@components/views/account/account/account';
import { Overmail } from '@components/views/account/overmail/overmail';
import { Signup } from '@components/views/account/signup/signup';
import { Mail } from '@components/views/mail/mail';
import { NotFound } from '@components/views/not.found/not.found';
import { NetCreate } from '@components/views/net/create/create';
import { Net } from '@components/views/net/net/net';
import { NetEnter } from '@components/views/net/net.enter/net.enter';
import { NetComeout } from '@components/views/net/net.comeout/net.comeout';
import { NetLeave } from '@components/views/net/net.leave/net.leave';
import { RelativeRoutesMap } from './constants';

export const Router: FC = () => {
  return (
    <>
      <Redirect />
      <Routes>
        <Route path={RelativeRoutesMap.INDEX} element={<Main />} />
        <Route path={RelativeRoutesMap.ABOUT} element={<About />} />
        <Route path={RelativeRoutesMap.ACCOUNT.INDEX}>
          <Route path="" element={<Account />} />
          <Route path={RelativeRoutesMap.ACCOUNT.SIGNUP} element={<Signup />} />
          <Route path={RelativeRoutesMap.ACCOUNT.LOGIN} element={<Login />} />
          <Route path={RelativeRoutesMap.ACCOUNT.LOGOUT} element={<Logout />} />
          <Route path={RelativeRoutesMap.ACCOUNT.OVERMAIL} element={<Overmail />} />
          <Route path={RelativeRoutesMap.ACCOUNT.CONFIRM} element={<Confirm />} />
          <Route path={RelativeRoutesMap.ACCOUNT.RESTORE} element={<Restore />} />
        </Route>
        <Route path={RelativeRoutesMap.NET.INDEX}>
          <Route path="" element={<Net />} />
          <Route path={RelativeRoutesMap.NET.CREATE} element={<NetCreate />} />
          <Route path={RelativeRoutesMap.NET.ENTER} element={<NetEnter />} />
          <Route path={RelativeRoutesMap.NET.COMEOUT} element={<NetComeout />} />
          <Route path={RelativeRoutesMap.NET.LEAVE} element={<NetLeave />} />
        </Route>
        <Route path={RelativeRoutesMap.PALETTE} element={<Palette />} />
        <Route path={RelativeRoutesMap.MAIL} element={<Mail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
