import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { useNavigate } from 'react-router-dom';

type Role = 'admin' | 'customer' | undefined;

const withPermission =
  (roles: Role[], redirectTo: string) =>
  (Component: FC<any>) =>
  (props: any) => {
    const auth = useSelector((state: RootState) => ({
      profile: state.authentication.profile
    }));

    const navigate = useNavigate();

    useEffect(() => {
      if (auth.profile?.role === undefined || !roles.includes(auth.profile?.role)) {
        navigate(redirectTo);
      }
    }, [auth.profile?.role, navigate, roles, redirectTo]);

    return (
      auth.profile?.role !== undefined && roles.includes(auth.profile?.role)
        ? <Component {...props} />
        : null
    );
  };

export default withPermission;
