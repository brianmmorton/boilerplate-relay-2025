import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/providers/auth-provider'

export function HomePage() {
  const { user } = useAuth()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-foreground">
          Welcome to Boilerplate App
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          This is a boilerplate application for a highly scalable application. It uses GraphQL, TypeGraphQL, Relay, React, and Typescript. For database, it uses supabase, which you can swap for others and implement custom authentication and other solutions, but was used here for ease of implementation.
        </p>
        
        <div className="flex justify-center space-x-4">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button size="lg">Go to Dashboard</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button size="lg">Get Started</Button>
              </Link>
            </>
          )}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl text-primary-foreground">🏠</span>
            </div>
            <h3 className="text-xl font-semibold">GraphQL</h3>
            <p className="text-muted-foreground">
              GraphQL is used for the API. It is a query language for APIs that allows you to query the data you need, and nothing more.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl text-primary-foreground">👥</span>
            </div>
            <h3 className="text-xl font-semibold">TypeGraphQL</h3>
            <p className="text-muted-foreground">
              TypeGraphQL is used for the API. It is a library that allows you to create a GraphQL API with TypeScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 