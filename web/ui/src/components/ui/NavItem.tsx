export function NavItem(props: { active: boolean; onClick: () => void; icon: string; children: any }) {
    return (
        <button 
            class={`flex items-center w-full text-left mb-2 p-2 rounded ${props.active ? 'bg-gensyn-pink/20' : 'hover:bg-gensyn-pink/10'}`}
            onClick={props.onClick}
        >
            <span class="mr-2">{props.icon}</span>
            <span>{props.children}</span>
        </button>
    )
}