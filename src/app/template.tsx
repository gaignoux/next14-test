"use client";

import { PropsWithChildren } from "react";
import { formBuilderPropsMapping, Mapper } from "@base/lib/form-engine.mapper";
import { BolttechThemeProvider } from "@bolttech/frontend-foundations";
import { FormProvider } from "@bolttech/form-engine";
import { bolttechTheme } from "@bolttech/default-theme";

export default function Template({ children }: PropsWithChildren) {
  return (
    <BolttechThemeProvider theme={bolttechTheme}>
      <FormProvider mapper={Mapper} propsMapping={formBuilderPropsMapping}>
        {children}
      </FormProvider>
    </BolttechThemeProvider>
  );
}
