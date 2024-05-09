'use client';

import { schema } from '@base/schemas/form.schema';
import { Form } from '@bolttech/form-engine';
import { ReactElement } from 'react';

export default function Page(): ReactElement {
  return (
    <Form schema={schema} onData={console.log} />
  );
}
