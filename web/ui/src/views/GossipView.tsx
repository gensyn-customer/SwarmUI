import Gossip from "../components/Gossip"

export default function GossipView() {
    return (
        <div class="bg-white rounded-lg shadow p-6">
            <h2 class="font-semibold text-lg mb-4">Swarm Network Gossip</h2>
            <div class="h-[calc(100vh-240px)] overflow-auto" id="gossip-container">
                <Gossip />
            </div>
        </div>
    )
}