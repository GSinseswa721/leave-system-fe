'use client';

import { useState } from 'react';
import { 
  Stepper, Step, StepLabel, Button, Typography, 
  Card, CardContent, TextField, MenuItem, 
  Box, Chip, LinearProgress, Alert
} from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';

type LeaveType = 'PTO' | 'Sick' | 'Maternity' | 'Compassionate';

export default function LeaveApplicationPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [leaveType, setLeaveType] = useState<LeaveType>('PTO');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [document, setDocument] = useState<File | null>(null);
  const [documentError, setDocumentError] = useState('');

  // Sample leave balances
  const leaveBalances = {
    PTO: { total: 20, used: 5, remaining: 15, carryForward: 5 },
    Sick: { total: 10, used: 2, remaining: 8 },
    Maternity: { total: 90, used: 0, remaining: 90 },
    Compassionate: { total: 5, used: 1, remaining: 4 }
  };

  const steps = ['Select Leave Type', 'Enter Details', 'Review & Submit'];

  const handleNext = () => {
    // Validate current step before proceeding
    if (activeStep === 1 && leaveType === 'Sick' && !document) {
      setDocumentError('Medical certificate is required for sick leave');
      return;
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Submit logic here
    console.log({ leaveType, startDate, endDate, reason, document });
    // Redirect to status page after submission
    window.location.href = '/leave-status';
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Select Leave Type
            </Typography>
            <TextField
              select
              label="Leave Type"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value as LeaveType)}
              fullWidth
              margin="normal"
            >
              <MenuItem value="PTO">Personal Time Off (PTO)</MenuItem>
              <MenuItem value="Sick">Sick Leave</MenuItem>
              <MenuItem value="Maternity">Maternity Leave</MenuItem>
              <MenuItem value="Compassionate">Compassionate Leave</MenuItem>
            </TextField>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Leave Balance</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography sx={{ width: 100 }}>{leaveType}</Typography>
                <Box sx={{ flexGrow: 1, mx: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={(leaveBalances[leaveType].used / leaveBalances[leaveType].total) * 100}
                    sx={{ height: 8 }}
                  />
                </Box>
                <Typography>
                  {leaveBalances[leaveType].remaining}/{leaveBalances[leaveType].total} days
                </Typography>
              </Box>
              
              {leaveType === 'PTO' && leaveBalances.PTO.remaining > leaveBalances.PTO.carryForward && (
                <Alert severity="warning">
                  Only {leaveBalances.PTO.carryForward} days can be carried forward to next year
                </Alert>
              )}
            </Box>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Leave Details
            </Typography>
            <TextField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="End Date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Reason"
              multiline
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              fullWidth
              margin="normal"
              required={leaveType !== 'PTO'}
            />
            
            {leaveType === 'Sick' && (
              <>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<UploadIcon />}
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Upload Medical Certificate
                  <input
                    type="file"
                    hidden
                    accept=".pdf,.jpg,.png"
                    onChange={(e) => {
                      setDocument(e.target.files?.[0] || null);
                      setDocumentError('');
                    }}
                    required
                  />
                </Button>
                {document && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Selected: {document.name}
                  </Typography>
                )}
                {documentError && (
                  <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                    {documentError}
                  </Typography>
                )}
              </>
            )}
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Review Your Application
            </Typography>
            <Card variant="outlined" sx={{ mb: 3 }}>
              <CardContent>
                <Typography><strong>Leave Type:</strong> {leaveType}</Typography>
                <Typography><strong>Dates:</strong> {startDate} to {endDate}</Typography>
                <Typography><strong>Reason:</strong> {reason || 'N/A'}</Typography>
                {document && (
                  <Typography><strong>Document:</strong> {document.name}</Typography>
                )}
              </CardContent>
            </Card>
            
            <Alert severity="info" sx={{ mb: 3 }}>
              Your request will be reviewed by your manager. You'll receive a notification once processed.
            </Alert>
          </>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <Card>
        <CardContent>
          {getStepContent(activeStep)}
          
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
            )}
            {activeStep === steps.length - 1 ? (
              <Button variant="contained" onClick={handleSubmit}>
                Submit Application
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}