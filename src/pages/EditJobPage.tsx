import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Job from '../api/types/Job';
import { FormEvent, useState } from 'react';
import JobType from '../api/types/JobType';
import { useShowNotification } from '../hooks/useShowNotification';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

type EditJobParams = { updateJobSubmit: (job: Job) => void };

function EditJobPage(params: EditJobParams) {
  const { updateJobSubmit } = params;
  const { id } = useParams();
  const job = useLoaderData<Job>();

  const [title, setTitle] = useState<string>(job.title);
  const [type, setType] = useState<JobType>(job.type);
  const [location, setLocation] = useState<string>(job.location);
  const [description, setDescription] = useState<string>(job.description);
  const [salary, setSalary] = useState<string>(job.salary);
  const [companyName, setCompanyName] = useState<string>(job.company.name);
  const [companyDescription, setCompanyDescription] = useState<string>(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState<string>(
    job.company.contactEmail
  );
  const [contactPhone, setContactPhone] = useState<string>(
    job.company.contactPhone
  );

  const showNotification = useShowNotification();

  const navigate = useNavigate();

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    const jobNotFound = id === undefined || job === undefined || job === null;
    if (jobNotFound) {
      return navigate(`/not-found`);
    }

    const updatedJob: Job = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateJobSubmit(updatedJob);

    showNotification.info('Job Updated');

    navigate(`/jobs/${id}`);
  };

  return (
    <Box bgcolor={'secondary.light'} paddingY={6}>
      <Box
        bgcolor="common.white"
        maxWidth="md"
        marginX="auto"
        borderRadius={2}
        paddingX={3}
        paddingY={4}>
        <Box
          component="form"
          onSubmit={submitForm}
          sx={{ '& .MuiTextField-root': { m: 1 } }}>
          <Typography
            variant="h4"
            fontWeight={'bold'}
            align="center"
            marginBottom={2}>
            Edit Job
          </Typography>

          <TextField
            label="Job Type"
            required
            select
            fullWidth
            value={type}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setType(event.target.value as JobType);
            }}>
            <MenuItem value={JobType.FullTime}>Full-Time</MenuItem>
            <MenuItem value={JobType.PartTime}>Part-Time</MenuItem>
            <MenuItem value={JobType.Remote}>Remote</MenuItem>
            <MenuItem value={JobType.Internship}>Internship</MenuItem>
          </TextField>

          <TextField
            label="Job Listing Name"
            required
            fullWidth
            value={title}
            placeholder="eg. Writes Code"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
            }}
          />

          <TextField
            label="Description"
            fullWidth
            value={description}
            multiline
            rows={4}
            placeholder="Add any job duties, expectations, requirements, etc"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value);
            }}
          />

          <TextField
            label="Salary"
            required
            select
            fullWidth
            value={salary}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSalary(event.target.value as JobType);
            }}>
            <MenuItem value="Under $50K">Under $50K</MenuItem>
            <MenuItem value="$50K - 60K">$50K - 60K</MenuItem>
            <MenuItem value="$60K - 70K">$60K - 70K</MenuItem>
            <MenuItem value="$70K - 80K">$70K - 80K</MenuItem>
            <MenuItem value="$80K - 90K">$80K - 90K</MenuItem>
            <MenuItem value="$90K - 100K">$90K - 100K</MenuItem>
            <MenuItem value="$100K - 125K">$100K - 125K</MenuItem>
            <MenuItem value="$125K - 150K">$125K - 150K</MenuItem>
            <MenuItem value="$150K - 175K">$150K - 175K</MenuItem>
            <MenuItem value="$175K - 200K">$175K - 200K</MenuItem>
            <MenuItem value="Over $200K">Over $200K</MenuItem>
          </TextField>

          <TextField
            label="Location"
            required
            fullWidth
            value={location}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setLocation(event.target.value);
            }}
          />

          <Typography variant="h5" margin={2}>
            Company Info
          </Typography>

          <TextField
            label="Company Name"
            fullWidth
            value={companyName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCompanyName(event.target.value);
            }}
          />

          <TextField
            label="Description"
            fullWidth
            value={companyDescription}
            multiline
            rows={4}
            placeholder="What does your company do?"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCompanyDescription(event.target.value);
            }}
          />

          <TextField
            label="Contact Email"
            fullWidth
            required
            type="email"
            value={contactEmail}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContactEmail(event.target.value);
            }}
          />

          <TextField
            label="Contact Phone"
            fullWidth
            value={contactPhone}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContactPhone(event.target.value);
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 2,
              fontWeight: 'bold',
              padding: 1,
              margin: 1,
            }}>
            Edit Job
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EditJobPage;
