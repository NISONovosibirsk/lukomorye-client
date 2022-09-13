import { useAppSelector } from '../../../hooks/redux';
import styles from './Modal.module.scss';

interface Props {
    children: React.ReactNode;
    onClose: () => void;
    width?: string;
    height?: string;
}

const Modal: React.FC<Props> = ({ children, onClose, height, width }) => {
    const { modal } = useAppSelector(state => state.statusReducer);

    return (
        <div
            className={`${styles.modal} ${modal && styles.open}`}
            onMouseDown={onClose}
        >
            <div
                className={styles.modalContent}
                onMouseDown={e => e.stopPropagation()}
                style={{ height: `${height}`, width: `${width}` }}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
