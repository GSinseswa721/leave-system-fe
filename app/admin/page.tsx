export default function AdminDashboard() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Leave Requests */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Leave Requests</h2>
          <p className="text-gray-600">No pending requests</p>
        </div>

        {/* Employee Management */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Employee Management</h2>
          <p className="text-gray-600">Total Employees: 0</p>
        </div>
        
        {/* Department Overview */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Departments</h2>
          <p className="text-gray-600">Active Departments: 0</p>
        </div>

        {/* System Settings */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
          <p className="text-gray-600">System Configuration</p>
        </div>
      </div>
    </main>
  )
}
