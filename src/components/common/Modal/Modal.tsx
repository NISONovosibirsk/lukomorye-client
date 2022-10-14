import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import styles from './Modal.module.scss';

interface Props {
    children: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
    const { modal } = useAppSelector(state => state.statusReducer);

    useEffect(() => {
        modal
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    }, [modal]);

    return (
        <div
            className={`${styles.modal} ${modal && styles.open}`}
            onMouseDown={onClose}
        >
            <div
                className={`${styles.modalContent} ${modal && styles.open}`}
                onMouseDown={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
