import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ breakpoints, palette, vars, mixins }) => ({
    root: {
      ...mixins.size('100%'),
      position: 'fixed',
      margin: '0 auto',
      zIndex: vars.zIndex.modal,
      '&.closing': {
        '& $modal': {
          transform: 'translateY(-100%)',
        },
        '& $backdrop': {
          opacity: 0,
        },
      },
      [breakpoints.maxWidth]: {
        width: vars.width.maxWidth,
      },
    },

    '@global': {
      '@keyframes modal': {
        from: {
          transform: 'translateY(-100%)',
        },
        to: {
          transform: `translateY(calc(60px + ${vars.gap.main}))`,
        },
      },
      '@keyframes backdrop': {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
    },

    backdrop: {
      ...mixins.size('100%'),
      backgroundColor: `${palette.bg.dark}${vars.opacityA.medium}`,
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 1,
      visibility: 'visible',
      animationName: 'backdrop',
      animationDuration: vars.transition.L,
      transitionProperty: 'opacity',
      transitionDuration: vars.transition.normal,
      transitionTimingFunction: vars.cubicBezier.easeInCirc,
      '&:focus': {
        outline: 'none',
      },
    },

    modal: {
      maxHeight: 'calc(100% - 124px)',
      transform: `translateY(calc(60px + ${vars.gap.main}))`,
      background: palette.bg.main,
      margin: `0 ${vars.gap.main}`,
      borderRadius: vars.radius.main,
      overflow: 'auto',
      animationName: 'modal',
      animationDuration: vars.transition.L,
      transitionProperty: 'transform',
      transitionDuration: vars.transition.normal,
      transitionTimingFunction: vars.cubicBezier.easeInCirc,
      [breakpoints.minHeight]: {
        maxHeight: 'calc(100% - 84px)',
      },
    },

    /* custom modal elements */
    content: {},

    closeBtn: {
      position: 'absolute',
      top: 16,
      right: 24,
      color: palette.font.dark,
      cursor: 'pointer',
    },
  }),
  { name: 'Modal' },
);
