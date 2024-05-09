import { Input } from "@bolttech/atoms-input";
import { asFormField } from "@bolttech/form-engine";
import { formBuilderPropsMapping } from "@base/lib/form-engine.mapper";

const InputFormField = asFormField<React.ComponentProps<typeof Input>>({
  Comp: Input,
  propsMapping: formBuilderPropsMapping.input,
});

export { InputFormField };
