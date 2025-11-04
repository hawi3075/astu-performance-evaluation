// components/PeerEvaluationForm.tsx
const PeerEvaluationForm: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Peer Evaluation</h2>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 w-full">
        Select Peer
      </button>
    </div>
  );
};

export default PeerEvaluationForm;
