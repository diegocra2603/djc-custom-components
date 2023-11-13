import './MyLabel.css';

export interface MyLabelProps {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label Size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalized 
     */
    allCaps?: boolean;
    /**
     * Color 
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'
    /**
     * Font Color Text
     */
    fontColor?: string;
    /**
     * Back Ground Color
     */
    backgroundColor?: string;
}

export const MyLabel = ({ label, size = 'normal', allCaps = false, color = 'text-primary', fontColor = 'black', backgroundColor = 'transparent' }: MyLabelProps) => {
    return (
        <span className={`${size} ${color}`} style={{ color: fontColor, backgroundColor }}>{allCaps ? label.toUpperCase() : label}</span>
    )
}
