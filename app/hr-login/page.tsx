'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Link from 'next/link'

export default function HRLoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Bypass with default credentials
    setTimeout(() => {
      router.push('/hr-dashboard')
    }, 500) // Small delay to show loading state
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">HR Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email" 
              required
              defaultValue="hr@example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required 
                defaultValue="hr123"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm pr-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <Link href="/hr-signup" className="text-blue-600 hover:text-blue-800">
            New HR? Sign up here
          </Link>
        </div>
      </div>
    </main>
  )
}
