import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobType from '../api/types/JobType';
import JobSubmission from '../api/types/JobSubmission';

type AddJobParams = { addJobSubmit: (job: JobSubmission) => void };

function AddJob(params: AddJobParams) {
  const { addJobSubmit } = params;

  const [title, setTitle] = useState('');
  const [type, setType] = useState(JobType.FullTime);
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    const newJob: JobSubmission = {
      title,
      type,
      description,
      location: '',
      salary: '',
      company: {
        contactEmail: '',
        contactPhone: '',
        name: '',
        descrition: '',
      },
    };

    addJobSubmit(newJob);

    toast.success('Job Added');

    return navigate('/jobs');
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2">
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value as JobType)}>
                <option value={JobType.FullTime}>Full-Time</option>
                <option value={JobType.PartTime}>Part-Time</option>
                <option value={JobType.Remote}>Remote</option>
                <option value={JobType.Internship}>Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Writes Code"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddJob;
