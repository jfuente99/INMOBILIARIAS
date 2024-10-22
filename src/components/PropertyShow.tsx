import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  DateField,
} from 'react-admin';

export const PropertyShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="description" />
      <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
      <TextField source="location" />
      <TextField source="property_type" />
      <NumberField source="rooms" />
      <NumberField source="bathrooms" />
      <DateField source="created_at" />
    </SimpleShowLayout>
  </Show>
);