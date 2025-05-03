// src/app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import { 
  Grid, Card, CardContent, Typography, 
  Button, Avatar, Chip, LinearProgress,
  Dialog, DialogTitle, DialogContent, 
  DialogActions, TextField, MenuItem, 
  Stack, Box
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Add, FileUpload, CalendarToday, People } from '@mui/icons-material';

type LeaveType = 'PTO' | 'Sick' | 'Maternity' | 'Compassionate';
type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';

interface LeaveBalance {
  type: LeaveType;
  total: number;
  used: number;
  remaining: number;
}

interface TeamMemberOnLeave {
  id: number;
  name: string;
  avatar: string;
  leaveType: LeaveType;
  endDate: string;
}

interface LeaveRequest {
  id: number;
  startDate: string;
  endDate: string;
  type: LeaveType;
  status: LeaveStatus;
}

export default function DashboardPage() {
  // State for modal
  const [open, setOpen] = useState(false);
  const [leaveType, setLeaveType] = useState<LeaveType>('PTO');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [reason, setReason] = useState('');
  const [document, setDocument] = useState<File | null>(null);

  // Sample data
  const leaveBalances: LeaveBalance[] = [
    { type: 'PTO', total: 20, used: 5, remaining: 15 },
    { type: 'Sick', total: 10, used: 2, remaining: 8 },
    { type: 'Maternity', total: 90, used: 0, remaining: 90 },
    { type: 'Compassionate', total: 5, used: 1, remaining: 4 }
  ];

  const teamOnLeave: TeamMemberOnLeave[] = [
    { id: 1, name: 'John Doe', avatar: '', leaveType: 'PTO', endDate: '2023-06-15' },
    { id: 2, name: 'Jane Smith', avatar: '', leaveType: 'Sick', endDate: '2023-06-20' }
  ];

  const upcomingRequests: LeaveRequest[] = [
    { id: 1, startDate: '2023-06-10', endDate: '2023-06-12', type: 'PTO', status: 'Approved' },
    { id: 2, startDate: '2023-07-01', endDate: '2023-07-05', type: 'PTO', status: 'Pending' }
  ];

  const handleSubmitLeave = () => {
    // Submit logic here
    console.log({ leaveType, startDate, endDate, reason, document });
    setOpen(false);
  };

  return (
    <div className="p-4">
      <Typography variant="h4" gutterBottom>
        Employee Dashboard
      </Typography>

      {/* Quick Actions */}
      <Box sx={{ mb: 4 }}>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpen(true)}
          sx={{ mr: 2 }}
        >
          Request Leave
        </Button>
        <Button
          variant="outlined"
          startIcon={<CalendarToday />}
          sx={{ mr: 2 }}
        >
          View Calendar
        </Button>
        <Button
          variant="outlined"
          startIcon={<People />}
        >
          Team View
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Leave Balances */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                My Leave Balances
              </Typography>
              {leaveBalances.map((balance) => (
                <Box key={balance.type} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>
                      {balance.type} <Chip label={`${balance.remaining} days left`} size="small" />
                    </Typography>
                    <Typography>
                      {balance.used}/{balance.total} days
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(balance.used / balance.total) * 100}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Team On Leave */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Team Members On Leave
              </Typography>
              <Stack spacing={2}>
                {teamOnLeave.map((member) => (
                  <Box key={member.id} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={member.avatar} sx={{ mr: 2 }} />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography>{member.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.leaveType} • Until {new Date(member.endDate).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Chip label={member.leaveType} size="small" />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Leave Requests */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                My Upcoming Leave
              </Typography>
              <Grid container spacing={2}>
                {upcomingRequests.map((request) => (
                  <Grid item xs={12} sm={6} key={request.id}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography>
                            {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()}
                          </Typography>
                          <Chip 
                            label={request.status} 
                            color={
                              request.status === 'Approved' ? 'success' : 
                              request.status === 'Rejected' ? 'error' : 'warning'
                            }
                            size="small"
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {request.type} Leave
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Leave Request Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Request Leave</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                select
                label="Leave Type"
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value as LeaveType)}
                fullWidth
              >
                <MenuItem value="PTO">Personal Time Off (PTO)</MenuItem>
                <MenuItem value="Sick">Sick Leave</MenuItem>
                <MenuItem value="Maternity">Maternity Leave</MenuItem>
                <MenuItem value="Compassionate">Compassionate Leave</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Reason"
                multiline
                rows={4}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                component="label"
                variant="outlined"
                startIcon={<FileUpload />}
                fullWidth
              >
                Upload Supporting Document
                <input
                  type="file"
                  hidden
                  onChange={(e) => setDocument(e.target.files?.[0] || null)}
                />
              </Button>
              {document && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected: {document.name}
                </Typography>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={handleSubmitLeave}
            disabled={!startDate || !endDate}
          >
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}