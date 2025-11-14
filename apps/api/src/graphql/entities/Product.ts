import { ObjectType, Field, ID, Int, Float } from 'type-graphql'

@ObjectType()
export class Product {
  @Field(() => ID)
  id!: string

  @Field(() => String)
  name!: string

  @Field(() => String, { nullable: true })
  description?: string | null

  @Field(() => Float)
  price!: number

  @Field(() => String)
  category!: string

  @Field(() => String, { nullable: true })
  imageUrl?: string | null

  @Field(() => Boolean)
  inStock!: boolean

  @Field(() => Float, { nullable: true })
  rating?: number | null

  @Field(() => Date)
  createdAt!: Date

  @Field(() => Date)
  updatedAt!: Date
}

