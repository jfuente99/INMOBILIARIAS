import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { PropertyList } from './components/PropertyList';
import { PropertyEdit } from './components/PropertyEdit';
import { PropertyCreate } from './components/PropertyCreate';
import { PropertyShow } from './components/PropertyShow';
import { Home } from 'lucide-react';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="properties"
      list={PropertyList}
      edit={PropertyEdit}
      create={PropertyCreate}
      show={PropertyShow}
      icon={Home}
    />
  </Admin>
);

export default App;