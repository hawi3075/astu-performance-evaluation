// components/DownloadResultCard.tsx
const DownloadResultCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Download Result</h2>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors duration-200">
        Download Result
      </button>
    </div>
  );
};

export default DownloadResultCard;
