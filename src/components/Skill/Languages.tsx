import { h, Fragment } from 'preact';
import Section from '../Section';

type Props = {
    languages: Language[];
};

const Languages = ({ languages }: Props): h.JSX.Element => (
    <Fragment>
        <Section sidebar="Other languages">
            <table style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <td rowSpan={2}> </td>
                        <td colSpan={2}>UNDERSTANDING</td>
                        <td colSpan={2}>SPEAKING</td>
                        <td>WRITING</td>
                    </tr>
                    <tr>
                        <td>Listening</td>
                        <td>Reading</td>
                        <td>
                            Spoken
                            <br />
                            interaction
                        </td>
                        <td>
                            Spoken
                            <br />
                            production
                        </td>
                        <td> </td>
                    </tr>
                </thead>
                <tbody>
                    {languages.map((language) => (
                        <tr key={language.name}>
                            <td className="col-title">{language.name.toUpperCase()}</td>
                            <td>{language.listening}</td>
                            <td>{language.reading}</td>
                            <td>{language.spokenInteraction}</td>
                            <td>{language.spokenProduction}</td>
                            <td>{language.writing}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Section>
    </Fragment>
);

export default Languages;
