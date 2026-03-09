import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { auth } from '@/app/api/auth/[...nextauth]/route'
import AnalyticsDashboard from '@/components/analytics-dashboard'

export default async function AdminAnalytics() {
  const session = await getServerSession(auth)

  if (!session) {
    redirect('/admin/login')
  }

  return <AnalyticsDashboard />
}