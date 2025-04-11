export default function Header(props: {
    title: string;
    stats: any;
    onNewJob: () => void;
}) {
    return (
        <header class="bg-white p-4 border-b border-gray-200 flex justify-between items-center shadow-sm">
            <h1 class="uppercase text-xl font-medium">
                {props.title}
            </h1>
            
            <div class="flex items-center">
                <div class="mr-4 text-sm bg-gensyn-brown/10 py-1 px-3 rounded-full">
                    Round: {props.stats.currentRound} / Stage: {props.stats.currentStage}
                </div>
                <button 
                    onClick={props.onNewJob}
                    class="bg-gensyn-brown text-gensyn-pink px-4 py-2 rounded hover:bg-opacity-90"
                >
                    Create Training Job
                </button>
            </div>
        </header>
    )
}