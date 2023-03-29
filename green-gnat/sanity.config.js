import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'green-gnat',

  projectId: 'uiwygtem',
  dataset: 'motorcycle-shop',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
