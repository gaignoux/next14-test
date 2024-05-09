"use client";

import { InputFormField } from "@base/lib/form-engine.fields";
import { schema } from "@base/schemas/form.schema";
import { useForm, TFormValues, Form } from "@bolttech/form-engine";
import { Box } from "@bolttech/frontend-foundations";
import { ReactElement } from "react";

export default function Page(): ReactElement {
  useForm({
    id: "input-test",
    // onData(data: TFormValues) {
    //   console.log(data);
    // },
  });
  return (
    <Box className="flex flex-column ph-xl gap-s">
      <Form id="input-test" schema={schema} />
      <InputFormField
        formId="input-test"
        label="Write anything"
        name="input_three"
        variant="border"
        formatters={{
          ON_FIELD_CHANGE: {
            upperCase: true,
          },
        }}
        validations={{
          ON_FIELD_CHANGE: {
            required: true,
          },
        }}
        errorMessages={{
          required: "Required field",
        }}
      />
    </Box>
  );
}
