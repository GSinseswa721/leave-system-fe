
'use client'
import { Card, Grid, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { 
  EventNote, 
  People, 
  Settings, 
  Assessment,
  Notifications,
  CalendarMonth
} from '@mui/icons-material'

export default function HRDashboard() {
  const menuItems = [
    {
      title: 'Leave Management',
      description: 'Manage leave types and policies',
      icon: <EventNote />,
      href: '/hr-dashboard/leave-management'
    },
    {
      title: 'Team Calendar',
      description: 'View team leave calendar',
      icon: <CalendarMonth />,
      href: '/hr-dashboard/team-calendar'
    },
    {
      title: 'User Management',
      description: 'Manage roles and permissions',
      icon: <People />,
      href: '/hr-dashboard/users'
    },
    {
      title: 'Reports',
      description: 'Generate and export reports',
      icon: <Assessment />,
      href: '/hr-dashboard/reports'
    },
    {
      title: 'Notifications',
      description: 'Manage alerts and notifications',
      icon: <Notifications />,
      href: '/hr-dashboard/notifications'
    },
    {
      title: 'Settings',
      description: 'System configuration',
      icon: <Settings />,
      href: '/hr-dashboard/settings'
    }
  ]

  return (
    <div className="p-8">
      <Typography variant="h4" gutterBottom>
        HR Dashboard
      </Typography>
      
      <Grid container spacing={3} className="mt-4">
        {menuItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <Link href={item.href} className="no-underline">
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <div>
                    <Typography variant="h6" color="primary">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}