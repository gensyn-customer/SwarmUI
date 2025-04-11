export default function JobsView() {
    return (
        <div class="bg-white rounded-lg shadow p-6">
            <h2 class="font-semibold text-lg mb-4">All Training Jobs</h2>
            <p class="text-gray-500 mb-8">Manage all your training jobs from this dashboard.</p>
            
            <div class="flex justify-between mb-4">
                <div class="relative">
                    <input 
                        type="text" 
                        placeholder="Search jobs..." 
                        class="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gensyn-brown/50"
                    />
                    <span class="absolute left-3 top-2.5">🔍</span>
                </div>
                
                <div>
                    <button class="border border-gray-300 px-4 py-2 rounded mr-2 hover:bg-gray-50">Filter</button>
                </div>
            </div>
            
            {/* Jobs table would go here */}
            <div class="text-center py-12 text-gray-500">
                Add your job management table here
            </div>
        </div>
    )
}