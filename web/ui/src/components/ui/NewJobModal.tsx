export default function NewJobModal(props: {
    onClose: () => void;
    onSubmit: () => void;
}) {
    return (
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-semibold">Create New Training Job</h2>
                    <button onClick={() => props.onClose()} class="text-gray-500 hover:text-gray-700">
                        ✕
                    </button>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Job Name</label>
                        <input type="text" class="w-full border border-gray-300 rounded p-2" />
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Model Type</label>
                        <select class="w-full border border-gray-300 rounded p-2">
                            <option>GRPO-Qwen</option>
                            <option>DeepSeek-Math</option>
                            <option>Vicuna-7B</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Instance Type</label>
                        <select class="w-full border border-gray-300 rounded p-2">
                            <option>n1-standard-4</option>
                            <option>n1-standard-8</option>
                            <option>n1-standard-16</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Training Steps</label>
                        <input type="number" class="w-full border border-gray-300 rounded p-2" value="1000" />
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Learning Rate</label>
                        <input type="number" class="w-full border border-gray-300 rounded p-2" value="0.0001" step="0.0001" />
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                        <select class="w-full border border-gray-300 rounded p-2">
                            <option>High</option>
                            <option selected>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Advanced Configuration (Optional)</label>
                    <textarea class="w-full border border-gray-300 rounded p-2 h-24" placeholder="Enter JSON configuration"></textarea>
                </div>
                
                <div class="flex justify-end mt-6">
                    <button 
                        onClick={() => props.onClose()}
                        class="border border-gray-300 px-4 py-2 rounded mr-2 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={() => props.onSubmit()}
                        class="bg-gensyn-brown text-gensyn-pink px-4 py-2 rounded hover:bg-opacity-90"
                    >
                        Create Job
                    </button>
                </div>
            </div>
        </div>
    )
}