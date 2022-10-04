import { ChangeEvent, useEffect, useState } from 'react';

interface Validation {
    value: string | number;
}

export const useValidation = (value: any, validations: any) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value < validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
            }
        }
    }, [value]);

    return {
        isEmpty,
        minLengthError,
    };
};
