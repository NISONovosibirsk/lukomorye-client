import axios from 'axios';
import { ReactElement, useEffect } from 'react';
import { QuizLayout } from '../../components';
import { NextPageWithLayout } from '../_app';

interface Props {
    name: string;
    id: number;
}

const QuizSlug: NextPageWithLayout<Props> = props => {

    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get('quizMock.json').then(response => {
                    console.log(response.data.quizes)
                });
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);


    return (
        <div>
            <div>ID: {props.name}</div>
            <div>NAME: {props.name}</div>
        </div>
    );
};

QuizSlug.getLayout = function getLayout(page: ReactElement) {
    return <QuizLayout>{page}</QuizLayout>;
};

export default QuizSlug;
