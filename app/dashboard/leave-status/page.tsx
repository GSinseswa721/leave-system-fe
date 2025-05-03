'use client';

import { 
  Card, CardContent, Typography, 
  Box, Stepper, Step, StepLabel, 
  Chip, Button, Avatar, List, 
  ListItem, ListItemText, Divider
} from '@mui/material';
import { 
  Check as CheckIcon,
  HourglassEmpty as PendingIcon,
  Cancel as RejectedIcon,
  FileCopy as DocumentIcon
} from '@mui/icons-material';

type LeaveStatus = 'pending' | 'approved' | 'rejected';

interface LeaveApplication {
  id: number;
  type: string;
  startDate: string;
  endDate: string;
  status: LeaveStatus;
  submittedDate: string;
  processedDate?: string;
  comments?: string;
  document?: string;
}

export default function LeaveStatusPage() {
  // Sample data - replace with actual API calls
  const applications: LeaveApplication[] = [
    {
      id: 1,
      type: 'PTO',
      startDate: '2023-06-10',
      endDate: '2023-06-15',
      status: 'approved',
      submittedDate: '2023-05-25',
      processedDate: '2023-05-28',
      comments: 'Enjoy your time off!'
    },
    {
      id: 2,
      type: 'Sick',
      startDate: '2023-07-01',
      endDate: '2023-07-03',
      status: 'pending',
      submittedDate: '2023-06-28',
      document: 'medical-certificate.pdf'
    },
    {
      id: 3,
      type: 'Compassionate',
      startDate: '2023-05-01',
      endDate: '2023-05-05',
      status: 'rejected',
      submittedDate: '2023-04-28',
      processedDate: '2023-04-29',
      comments: 'Please provide additional documentation'
    }
  ];

  const getStatusIcon = (status: LeaveStatus) => {
    switch (status) {
      case 'approved': return <CheckIcon color="success" />;
      case 'rejected': return <RejectedIcon color="error" />;
      default: return <PendingIcon color="warning" />;
    }
  };

  const getStatusLabel = (status: LeaveStatus) => {
    switch (status) {
      case 'approved': return 'Approved';
      case 'rejected': return 'Rejected';
      default: return 'Pending Approval';
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        My Leave Applications
      </Typography>
      
      <List sx={{ width: '100%' }}>
        {applications.map((app, index) => (
          <Card key={app.id} variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">
                  {app.type} Leave
                </Typography>
                <Chip
                  label={getStatusLabel(app.status)}
                  icon={getStatusIcon(app.status)}
                  variant="outlined"
                />
              </Box>
              
              <Typography>
                <strong>Dates:</strong> {app.startDate} to {app.endDate}
              </Typography>
              <Typography>
                <strong>Submitted:</strong> {app.submittedDate}
              </Typography>
              
              {app.processedDate && (
                <Typography>
                  <strong>Processed:</strong> {app.processedDate}
                </Typography>
              )}
              
              {app.document && (
                <Button
                  startIcon={<DocumentIcon />}
                  sx={{ mt: 1 }}
                >
                  View Document
                </Button>
              )}
              
              {app.comments && (
                <>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2">Manager Comments:</Typography>
                  <Typography>{app.comments}</Typography>
                </>
              )}
              
              <Box sx={{ mt: 2 }}>
                <Stepper orientation="vertical" activeStep={app.status === 'pending' ? 1 : 2}>
                  <Step>
                    <StepLabel>Submitted on {app.submittedDate}</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>
                      {app.status === 'pending' ? 'Under Review' : `Processed on ${app.processedDate}`}
                    </StepLabel>
                  </Step>
                  {app.status !== 'pending' && (
                    <Step>
                      <StepLabel>{getStatusLabel(app.status)}</StepLabel>
                    </Step>
                  )}
                </Stepper>
              </Box>
            </CardContent>
          </Card>
        ))}
      </List>
      
      <Button 
        variant="contained" 
        href="/leave-application"
        sx={{ mt: 2 }}
      >
        New Leave Application
      </Button>
    </Box>
  );
}