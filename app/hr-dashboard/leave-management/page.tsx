'use client'
import { useState } from 'react'
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import { Add } from '@mui/icons-material'

export default function LeaveManagement() {
  const [activeTab, setActiveTab] = useState(0)

  const leaveTypes = [
    { name: 'Annual Leave', defaultDays: 20, carryOver: 5 },
    { name: 'Sick Leave', defaultDays: 10, carryOver: 0 },
    { name: 'Personal Leave', defaultDays: 5, carryOver: 0 }
  ]

  return (
    <div className="p-8">
      <Typography variant="h4" gutterBottom>
        Leave Management
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)}>
          <Tab label="Leave Types" />
          <Tab label="Policies" />
          <Tab label="Balances" />
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <Paper className="p-4">
          <div className="flex justify-between mb-4">
            <Typography variant="h6">Leave Types</Typography>
            <Button startIcon={<Add />} variant="contained">
              Add Leave Type
            </Button>
          </div>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Leave Type</TableCell>
                <TableCell>Default Days</TableCell>
                <TableCell>Carry Over Limit</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaveTypes.map((type, index) => (
                <TableRow key={index}>
                  <TableCell>{type.name}</TableCell>
                  <TableCell>{type.defaultDays}</TableCell>
                  <TableCell>{type.carryOver}</TableCell>
                  <TableCell>
                    <Button size="small" color="primary">Edit</Button>
                    <Button size="small" color="error">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}

      {/* Add other tab contents */}
    </div>
  )
}
