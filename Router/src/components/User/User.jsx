import { useParams } from 'react-router-dom';

export default function User() {
  // Extract the id parameter
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
}