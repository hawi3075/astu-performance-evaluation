import Link from 'next/link';
import Layout from '../../components/Layout';

const EvaluationFormPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <Link href="/employees" className="text-sm text-blue-600 hover:underline">
            &larr; Back to Home
          </Link>
          <span className="text-sm font-semibold text-gray-700">
            Adama Science and Technology University
          </span>
        </header>

        {/* Form Title */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">
            ADAMA SCIENCE AND TECHNOLOGY UNIVERSITY
          </h1>
          <p className="text-md text-gray-600">Civil Service Job Evaluation Form</p>
        </div>

        {/* Employee Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { id: 'employeeName', label: 'Employee Name' },
            { id: 'dept', label: 'Department' },
            { id: 'rank', label: 'Rank' },
          ].map((field) => (
            <div key={field.id} className="flex flex-col">
              <label htmlFor={field.id} className="text-sm text-gray-700 mb-1">
                {field.label}:
              </label>
              <input
                type="text"
                id={field.id}
                className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none px-1 py-1"
              />
            </div>
          ))}
        </div>

        {/* Evaluation Table */}
        <div className="overflow-x-auto border border-gray-300 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-600">No</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-600">Recorded Tasks</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-600">Max Point</th>
                <th colSpan={4} className="px-3 py-2 text-center text-xs font-semibold text-gray-600">Rank</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-600">Average Point</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                {[1, 2, 3, 4].map((n) => (
                  <th key={n} className="px-3 py-2 text-center text-xs font-semibold text-gray-600">{n}</th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((row) => (
                <tr key={row}>
                  <td className="px-3 py-2 text-center text-sm text-gray-700">{row}</td>
                  <td className="px-3 py-2 text-sm text-gray-700"></td>
                  <td className="px-3 py-2 text-sm text-gray-700"></td>
                  {[1, 2, 3, 4].map((col) => (
                    <td key={col} className="px-3 py-2 text-center text-sm text-gray-700">
                      <input type="text" className="w-12 border-b-2 border-gray-300 text-center focus:border-blue-500 focus:outline-none" />
                    </td>
                  ))}
                  <td className="px-3 py-2 text-center text-sm text-gray-700"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Totals */}
        <div className="flex flex-col sm:flex-row justify-end items-end space-y-4 sm:space-y-0 sm:space-x-8 mt-6">
          {[
            { id: 'totalRank', label: 'Total Rank' },
            { id: 'averagePoint', label: 'Average Point' },
          ].map((field) => (
            <div key={field.id} className="flex items-center">
              <label htmlFor={field.id} className="text-sm font-semibold text-gray-700 mr-2">{field.label}:</label>
              <input
                type="text"
                id={field.id}
                className="w-24 border-b-2 border-gray-300 text-center focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EvaluationFormPage;
