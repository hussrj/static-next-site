// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ExternalComponent } = initSchema(schema);

export {
  ExternalComponent
};