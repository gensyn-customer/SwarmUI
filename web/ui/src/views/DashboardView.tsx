import { For } from "solid-js";
import Rewards from "../components/Rewards";
import Gossip from "../components/Gossip";
import { StatCard } from "../components/ui/StatCard";
import { StatusBadge } from "../components/ui/StatusBadge";

interface DashboardViewProps {
    stats: {
        jobsRunning: number;
        jobsQueued: number;
        nodesActive: number;
        averageConvergence: string;
        gnsBurned: number;
        currentRound: number | undefined;
        currentStage: number | undefined;
    };
}

export default function DashboardView(props: DashboardViewProps) {
    const recentJobs = [
        { id: "job-1", name: "GRPO-Qwen2", status: "Training", type: "Fine-tuning", startTime: "2025-04-10 14:32", progress: 78, instance: "n1-standard-8" },
        { id: "job-2", name: "CodeLLM-7B", status: "Queued", type: "Pre-training", startTime: "Pending", progress: 0, instance: "n1-standard-16" },
        { id: "job-3", name: "DeepSeek-Math", status: "Complete", type: "Fine-tuning", startTime: "2025-04-09 08:15", progress: 100, instance: "n1-standard-8" },
    ];

    return (
        <>
            {/* Stats Overview */}
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <StatCard title="Active Jobs" value={props.stats.jobsRunning} icon="⚡" />
                <StatCard title="Queued Jobs" value={props.stats.jobsQueued} icon="⏱️" />
                <StatCard title="Active Nodes" value={props.stats.nodesActive} icon="🖥️" />
                <StatCard title="Avg. Convergence" value={props.stats.averageConvergence} icon="🔄" />
                <StatCard title="GNS Burned" value={props.stats.gnsBurned} icon="🔥" />
                <StatCard title="Current Round" value={props.stats.currentRound ?? "N/A"} icon="🔁" />
                <StatCard title="Current Stage" value={props.stats.currentStage ?? "N/A"} icon="📊" />
            </div>

            {/* Recent Jobs */}
            <div class="bg-white rounded-lg shadow mb-6 overflow-hidden">
                <div class="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                    <h2 class="font-semibold text-lg">Recent Training Jobs</h2>
                    <button class="text-sm text-gensyn-brown hover:underline">
                        View all jobs
                    </button>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th class="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th class="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th class="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th class="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Started</th>
                                <th class="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                                <th class="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <For each={recentJobs}>
                                {job => (
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap font-medium">{job.name}</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <StatusBadge status={job.status} />
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">{job.type}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.startTime}</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div 
                                                    class={`h-full ${job.status === 'Complete' ? 'bg-green-500' : 'bg-gensyn-brown'}`}
                                                    style={{ width: `${job.progress}%` }}
                                                ></div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                                            <button class="text-gensyn-brown hover:underline mr-3">Details</button>
                                            {job.status !== 'Complete' && (
                                                <button class="text-red-600 hover:underline">Stop</button>
                                            )}
                                        </td>
                                    </tr>
                                )}
                            </For>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Charts & Metrics */}
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 w-full">
                <div class="bg-white rounded-lg shadow p-0 overflow-hidden"> {/* Remove padding */}
                    <div class="h-64 w-full">
                        <Rewards />
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow p-0 overflow-hidden"> {/* Remove padding */}
                    <div class="h-64 w-full overflow-auto" id="gossip-container">
                        <Gossip />
                    </div>
                </div>
            </div>
        </>
    );
}
