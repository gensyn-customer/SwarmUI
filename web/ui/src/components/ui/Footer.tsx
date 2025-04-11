export default function Footer() {
    return (
        <footer class="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
            <div class="flex justify-center items-center space-x-4">
                <a href="https://gensyn.ai" target="_blank" rel="noopener noreferrer" class="hover:text-gensyn-brown">Gensyn Website</a>
                <span>|</span>
                <a href="https://github.com/gensyn-ai/rl-swarm" target="_blank" rel="noopener noreferrer" class="hover:text-gensyn-brown">GitHub</a>
                <span>|</span>
                <a href="https://x.com/gensynai" target="_blank" rel="noopener noreferrer" class="hover:text-gensyn-brown">Twitter</a>
            </div>
            <div class="mt-2">Gensyn &copy; 2025 | All rights reserved</div>
        </footer>
    )
}