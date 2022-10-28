import React, { FC, PropsWithChildren, useCallback, useRef } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { useAppState } from '@hooks/useAppState';
import { AppState } from '@api/constants';
import { useStyles } from './content.styles';

export const Content: FC<PropsWithChildren> = ({ children }) => {
  const { root, animation } = useStyles();
  const state = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const key = useLocation().key;

  const handleAnimation = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove(animation);
  }, [animation]);

  const isInit = state === AppState.INIT;
  return (
    <div key={key} className={clsx(root, animation)} ref={ref} onAnimationEnd={handleAnimation}>
      {!isInit && children}
    </div>
  );
};
