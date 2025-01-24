import { FormProvider } from '@mobiux-labs/form-core';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div>
      <FormProvider>{props.children}</FormProvider>
    </div>
  );
};

export default Layout;
