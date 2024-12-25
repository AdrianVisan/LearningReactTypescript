import ClipLoader from 'react-spinners/ClipLoader';

const override = { display: 'block', margin: '100px auto' };

function Spinner(input: { loading: boolean }) {
  const { loading } = input;
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}

export default Spinner;
