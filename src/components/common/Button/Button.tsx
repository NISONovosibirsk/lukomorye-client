import styles from './Button.module.scss';

interface Props {
    title: string;
    width?: string;
    height?: string;
    margin?: string;
    isDisabled?: boolean;
    onClick?: () => void;
    type?: string;
}

const Button: React.FC<Props> = ({
    title,
    width,
    height,
    margin,
    isDisabled,
    onClick,
    type,
}) => {
    const handleType = () => {
        switch (type) {
            case 'red':
                return styles.red;
            case 'hollow':
                return styles.hollow;
            default:
                break;
        }
    };

    return (
        <button
            className={`${styles.button} ${handleType()}`}
            style={{ width: width, margin: margin, height: height }}
            disabled={isDisabled}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
