import { Fragment, h } from 'preact'
import { Skill } from '../../netlify-cms'
import Markdown from '../Markdown'
import Section from '../Section'
import Languages from './Languages'

type Props = {
  skill: Skill
}

const Component = ({ skill }: Props): h.JSX.Element => (
  <div className="avoid-page-break-inside">
    <Section sidebarHasTitle sidebar="Personal Skills" />
    <Section sidebar="Native language">
      {skill.nativeLanguage.join(', ')}
    </Section>
    <Languages languages={skill.languages} />
    <Section sidebar="Driving licence">
      {skill.drivingLicense.join(', ')}
    </Section>
    <Section sidebar="Skills">
      <Markdown markdown={skill.skills} />
    </Section>
  </div>
)

export default Component
