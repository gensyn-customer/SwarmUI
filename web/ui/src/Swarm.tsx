import { createSignal } from "solid-js"
import { useSwarm } from "./SwarmContext"
import MainLayout from "./layouts/MainLayout"
import DashboardView from "./views/DashboardView"
import LeaderboardView from "./views/LeaderboardView"
import GossipView from "./views/GossipView"
import JobsView from "./views/JobsView"
import NewJobModal from "./components/ui/NewJobModal"

export default function Swarm() {
    const ctx = useSwarm()
    const [activeSection, setActiveSection] = createSignal("dashboard")
    const [showNewJobForm, setShowNewJobForm] = createSignal(false)

    // Sample stats data that would come from your API
    const stats = {
        jobsRunning: 2,
        jobsQueued: 5,
        nodesActive: ctx.nodesConnected() || 0,
        averageConvergence: "1h 43m",
        gnsBurned: 512.4,
        currentRound: ctx.currentRound(),
        currentStage: ctx.currentStage()
    }

    return (
        <MainLayout 
            activeSection={activeSection()}
            setActiveSection={setActiveSection}
            showNewJobForm={() => setShowNewJobForm(true)}
            stats={stats}
        >
            {activeSection() === "dashboard" && <DashboardView stats={stats} />}
            {activeSection() === "jobs" && <JobsView />}
            {activeSection() === "leaderboard" && <LeaderboardView />}
            {activeSection() === "gossip" && <GossipView />}

            {showNewJobForm() && (
                <NewJobModal 
                    onClose={() => setShowNewJobForm(false)} 
                    onSubmit={() => {
                        // Handle job submission
                        setShowNewJobForm(false)
                    }}
                />
            )}
        </MainLayout>
    )
}
