export function StatusBadge(props: { status: string }) {
    const getStatusStyles = () => {
        switch (props.status) {
            case 'Training': return 'bg-yellow-100 text-yellow-800';
            case 'Queued': return 'bg-gray-100 text-gray-800';
            case 'Complete': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }
    
    return (
        <span class={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}>
            {props.status}
        </span>
    )
}