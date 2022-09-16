export interface JButtonProps {
    text: string;
    className: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    type: 'filled' | 'outlined';
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'default';
    disable: boolean,
    onClick: CallableFunction
}