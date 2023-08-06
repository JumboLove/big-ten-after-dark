import {codeInput} from '@sanity/code-input'
import {documentInternationalization} from '@sanity/document-internationalization'
import {visionTool} from '@sanity/vision'
import {sanitySchemaTypes, translatedSanitySchemaTypes} from 'content-models'
import {defineConfig} from 'sanity'
import {netlifyTool} from 'sanity-plugin-netlify'
import {deskTool} from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'Big 10 After Dark',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    netlifyTool(),
    codeInput(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'es', title: 'Spanish'},
      ],
      schemaTypes: translatedSanitySchemaTypes,
    }),
  ],

  schema: {
    types: sanitySchemaTypes,
  },
})
