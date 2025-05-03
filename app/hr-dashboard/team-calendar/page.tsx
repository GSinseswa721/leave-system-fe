'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import FullCalendar to avoid SSR issues
const FullCalendar = dynamic(() => import('@fullcalendar/react'), {
  ssr: false
})

import { Paper, Chip, Dialog, Button, TextField, Select, MenuItem, Typography } from '@mui/material'

export default function TeamCalendar() {
  const [showEventModal, setShowEventModal] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const departments = ['IT', 'HR', 'Finance', 'Marketing']
  const events = [
    { 
      title: 'John - Annual Leave',
      start: '2024-01-15',
      end: '2024-01-20',
      color: '#4CAF50',
      department: 'IT'
    },
    // Add more events as needed
  ]

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <Typography variant="h4">Team Calendar</Typography>
        <div className="space-x-2">
          {departments.map(dept => (
            <Chip
              key={dept}
              label={dept}
              onClick={() => setSelectedDepartment(dept)}
              color={selectedDepartment === dept ? 'primary' : 'default'}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>

      <Paper className="p-4">
        <FullCalendar
          plugins={[
            // Import plugins dynamically
            require('@fullcalendar/daygrid').default,
            require('@fullcalendar/interaction').default
          ]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          events={events.filter(event => 
            selectedDepartment === 'all' || event.department === selectedDepartment
          )}
          eventClick={(info) => {
            setShowEventModal(true)
          }}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
          }}
        />
      </Paper>

      {/* Event Modal */}
      <Dialog 
        open={showEventModal} 
        onClose={() => setShowEventModal(false)}
        maxWidth="sm"
        fullWidth
      >
        {/* Add modal content */}
      </Dialog>
    </div>
  )
}
