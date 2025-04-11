import { ParentProps } from "solid-js"
import Navigation from "../components/ui/Navigation"
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"

export default function MainLayout(props: {
    activeSection: string;
    setActiveSection: (section: string) => void;
    showNewJobForm: () => void;
    stats: any;
    children: any;
}) {
    return (
        <div class="flex h-screen bg-[#f8f8f8]">
            {/* Left Navigation */}
            <Navigation 
                activeSection={props.activeSection}
                setActiveSection={props.setActiveSection}
            />

            {/* Main Content */}
            <div class="flex-1 overflow-y-auto">
                <Header 
                    title={getTitle(props.activeSection)}
                    stats={props.stats}
                    onNewJob={props.showNewJobForm}
                />

                {/* Main Content Area */}
                <div class="p-6">
                    {props.children}
                </div>
                
                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

function getTitle(section: string): string {
    switch (section) {
        case "dashboard": return "Dashboard";
        case "jobs": return "Training Jobs";
        case "leaderboard": return "Leaderboard";
        case "gossip": return "Network Gossip";
        default: return "Gensyn SwarmUI";
    }
}