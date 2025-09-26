import './EmptyTasksResults.css'

function EmptyTasksResults({resultsText}) {

  return (
    <div className='empty-taskss'>
      <p className='text-vacioo'>No se encontro resultado para <strong>{resultsText}</strong></p>
    </div>
  );
};

export { EmptyTasksResults }