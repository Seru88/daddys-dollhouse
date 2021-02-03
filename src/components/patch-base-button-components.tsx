import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';

import RouterLink from './RouterLink';

export interface GatsbyProps {
  to?: string;
}

export default function patchButtonBaseComponent<P extends ButtonProps>(
  BaseButtonComponent: React.ComponentType<P>
) {
  return React.forwardRef<HTMLButtonElement, P & GatsbyProps>((props, ref) => {
    const { to, ...buttonProps } = props;
    const component = to ? RouterLink : `button`;

    return (
      <BaseButtonComponent
        component={component}
        ref={ref}
        to={to}
        {...(buttonProps as P)}
      />
    );
  });
}
