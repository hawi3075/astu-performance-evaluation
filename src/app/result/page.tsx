export default function ResultPage() {
  return (
    <main className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold text-black mb-4">My Performance Result</h1>
        <p className="text-black">
          Your performance evaluation score is <span className="font-bold">85%</span>.
        </p>
      </div>
    </main>
  );
}
