export function StatCard(props: { title: string; value: string | number; icon: string }) {
    return (
        <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center justify-between">
                <div>
                    <div class="text-sm text-gray-500 uppercase">{props.title}</div>
                    <div class="text-2xl font-semibold mt-1">{props.value}</div>
                </div>
                <div class="text-3xl opacity-70">{props.icon}</div>
            </div>
        </div>
    )
}