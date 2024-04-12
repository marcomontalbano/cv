import { h } from 'preact'
import { NetlifyCMSContent } from '../netlify-cms'
import ItemsWithCompany from './ItemsWithCompany'
import Profile from './Profile'
import Section from './Section'
import Skill from './Skill'

type Props = {
  url: string
  data: NetlifyCMSContent
}

function sortDesc<T extends { endDate?: string; startDate: string }>(
  items: T[],
): T[] {
  return items.sort((a, b) => {
    if (a.endDate && b.endDate) {
      return new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
    }

    if (a.endDate) {
      return new Date(b.startDate).getTime() - new Date(a.endDate).getTime()
    }

    if (b.endDate) {
      return new Date(b.endDate).getTime() - new Date(a.startDate).getTime()
    }

    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  })
}

const App = ({ data }: Props): h.JSX.Element => (
  <div className="container">
    <Profile profile={data.profile} />
    <ItemsWithCompany
      items={sortDesc(data.experiences)}
      title="Work Experiences"
    />
    <ItemsWithCompany items={sortDesc(data.courses)} title="Courses" />
    <Skill skill={data.skill} />
    <Section>
      <div style={{ marginTop: '50px' }}>
        In compliance with the GDPR and the Italian Legislative Decree no. 196
        dated 30/06/2003, I hereby authorize you to use and process my personal
        details contained in this document
      </div>
    </Section>
  </div>
)

export default App
