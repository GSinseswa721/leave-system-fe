'use client'; // Essential for client components

import { useState } from 'react';
import { 
  Button,
  TextField,
  MenuItem,
  Card,
  Typography,
  Box
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export default function ApplyLeavePage() {
  const [leaveType, setLeaveType] = useState('PTO');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ leaveType, startDate, endDate });
    // Add submission logic here
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            New Leave Application
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <TextField
              select
              label="Leave Type"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              fullWidth
              margin="normal"
              required
            >
              <MenuItem value="PTO">Personal Time Off</MenuItem>
              <MenuItem value="Sick">Sick Leave</MenuItem>
              <MenuItem value="Maternity">Maternity Leave</MenuItem>
              <MenuItem value="Compassionate">Compassionate Leave</MenuItem>
            </TextField>

            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              slotProps={{ textField: { fullWidth: true, required: true, margin: 'normal' } }}
            />

            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              slotProps={{ textField: { fullWidth: true, required: true, margin: 'normal' } }}
            />

            <Button 
              type="submit" 
              variant="contained" 
              fullWidth
              sx={{ mt: 3 }}
              disabled={!startDate || !endDate}
            >
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}