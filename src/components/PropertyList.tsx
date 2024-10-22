import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';

export const PropertyList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="title" />
      <TextField source="location" />
      <TextField source="property_type" />
      <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="rooms" />
      <NumberField source="bathrooms" />
      <DateField source="created_at" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);