interface ITabItem {
    children: React.ReactNode;
    onClick: () => void;
    active: boolean;
    ariaSelected: boolean;
    role: string;
}

export type { ITabItem };