import PropTypes from 'prop-types'; // Import PropTypes for validation
import { useMutation } from '@apollo/client';
import { DELETE_DINING_TABLE } from '../graphql/mutations';



function DeletionFeature({ id, onDeleted, setStatus }) {
  const [deleteDiningTable] = useMutation(DELETE_DINING_TABLE, {
    onCompleted: () => {
      setStatus('success'); // Set status to success on completion
      onDeleted(); // Notify parent component of successful deletion
    },
    onError: (error) => {
      setStatus(`error: ${error.message}`); // Set status to error if something goes wrong
    }
  });

  const handleDelete = async () => {
    setStatus('loading'); // Set status to loading when delete action starts
    try {
      await deleteDiningTable({ variables: { id } });
    } catch (error) {
      console.error("Failed to delete dining table:", error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}


// Add prop types for validation
DeletionFeature.propTypes = {
    id: PropTypes.string.isRequired, // 'id' must be a string and is required
    onDeleted: PropTypes.func.isRequired, // 'onDeleted' must be a function and is required
    setStatus: PropTypes.func.isRequired, // Add prop type validation for setStatus
};

export default DeletionFeature;

