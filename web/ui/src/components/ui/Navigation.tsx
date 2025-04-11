import { NavItem } from "./NavItem.tsx";

export default function Navigation(props: {
    activeSection: string;
    setActiveSection: (section: string) => void;
}) {
    const premadeTweet = encodeURIComponent("Running RL Swarm on @gensynai testnet 🔥\n\nhttps://testnet.gensyn.ai")

    return (
        <nav class="w-64 bg-gensyn-brown text-gensyn-pink p-4 flex flex-col">
            <div class="flex items-center mb-8">
                <img class="h-8 mr-2" src="/images/logo.gif" alt="Gensyn logo" />
                <span class="text-xl font-bold">Gensyn SwarmUI</span>
            </div>
            
            <NavItem 
                active={props.activeSection === "dashboard"} 
                onClick={() => props.setActiveSection("dashboard")}
                icon="📊"
            >
                Dashboard
            </NavItem>
            
            <NavItem 
                active={props.activeSection === "jobs"} 
                onClick={() => props.setActiveSection("jobs")}
                icon="🔄"
            >
                Training Jobs
            </NavItem>
            
            <NavItem 
                active={props.activeSection === "leaderboard"} 
                onClick={() => props.setActiveSection("leaderboard")}
                icon="🏆"
            >
                Leaderboard
            </NavItem>
            
            <NavItem 
                active={props.activeSection === "gossip"} 
                onClick={() => props.setActiveSection("gossip")}
                icon="💬"
            >
                Network Gossip
            </NavItem>
            
            <div class="mt-auto pt-4 border-t border-gensyn-pink/30">
                <NavItem 
                    active={false}
                    onClick={() => window.open("https://github.com/gensyn-ai/rl-swarm", "_blank")}
                    icon="🔗"
                >
                    Join the Swarm
                </NavItem>
                
                <NavItem 
                    active={false}
                    onClick={() => window.open(`https://x.com/intent/tweet?text=${premadeTweet}`, "_blank")}
                    icon="🐦"
                >
                    Share on X
                </NavItem>
            </div>
        </nav>
    )
}