import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
} from 'react-admin';

export const PropertyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" multiline rows={3} />
      <NumberInput source="price" />
      <TextInput source="location" />
      <TextInput source="property_type" />
      <NumberInput source="rooms" />
      <NumberInput source="bathrooms" />
      <DateInput source="created_at" />
    </SimpleForm>
  </Create>
);