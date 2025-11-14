import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/UserResolver.js'
import { ProductResolver } from './resolvers/ProductResolver.js'

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [UserResolver, ProductResolver],
    emitSchemaFile: true,
    validate: true,
  })
} 