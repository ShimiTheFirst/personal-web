import * as React from 'react'

import { APP_CONFIG } from '-config/app.config'
import { Image } from '-ui/Image'
import { formatPhone } from '-utils/format/formatPhone'

import emailSign from '../../../../public/images/email-black.png'
import language from '../../../../public/images/language.png'
import location from '../../../../public/images/location.png'
import phone from '../../../../public/images/phone.png'
import profilePicture from '../../../../public/images/profile.png'
import qrCode from '../../../../public/images/qr-code-code.svg'
import qrCv from '../../../../public/images/qr-code-cv.svg'
import qrIn from '../../../../public/images/qr-code-in.svg'
import { NON_TECH_SKILLS } from '../data/nonTechSkills'
import { TECH_SKILLS } from '../data/techSkills'
import { CVText } from './components/CVText'
import { FooterItem } from './components/FooterItem'
import { HeaderLine } from './components/HeaderLine'
import { Section } from './components/Section'
import { SummarySkill } from './components/SummarySkill'
import { TechStackLine, TechStackSkill } from './components/TechStack'
import { TimelineRecord } from './components/TimelineRecord'
import { CV_COMPACT_PAGE_STYLES } from './page.css'

const STYLES = CV_COMPACT_PAGE_STYLES

const {
  REACT,
  TYPESCRIPT,
  GRAPHQL,
  STORYBOOK,
  NEXT_JS,
  REACT_NATIVE,
  CHAKRA_UI,
  STYLED_COMPONENTS,
  VANILLA_EXTRACT,
  REACT_CONTEXT,
  XSTATE,
  VS_CODE,
  GIT,
  ESLINT,
  SENTRY,
} = TECH_SKILLS

const { FIGMA, NOTION, YOUTRACK, BITBUCKET } = NON_TECH_SKILLS

const CVCompact: React.FC = () => {
  return (
    <article className={STYLES.page}>
      <header className={STYLES.header}>
        <div className={STYLES.headerContent}>
          <hgroup>
            <h1 className={STYLES.h1}>Martin Štěpánek</h1>
            <h2 className={STYLES.h2}>Frontend vývojář</h2>
          </hgroup>

          <div className={STYLES.infoContainer}>
            <HeaderLine icon={emailSign} iconDescription={`email sign`}>
              <a href={`mailto:${APP_CONFIG.email}`} className={STYLES.link}>
                {APP_CONFIG.email}
              </a>
            </HeaderLine>
            {APP_CONFIG.phone && (
              <HeaderLine icon={phone} iconDescription={`phone icon`}>
                <a href={`tel:${APP_CONFIG.phone}`} className={STYLES.link}>
                  {formatPhone(APP_CONFIG.phone)}
                </a>
              </HeaderLine>
            )}
            <HeaderLine icon={location} iconDescription={`location pin icon`}>
              Pardubice <span className={STYLES.remoteLabel}>/ remote</span>
            </HeaderLine>
            <HeaderLine icon={language} iconDescription={`speak bubble with language signs`}>
              čeština, angličtina
            </HeaderLine>
          </div>
        </div>

        <Image src={profilePicture} alt={`profile picture`} className={STYLES.profilePicture} />
      </header>

      <main className={STYLES.content}>
        <section className={STYLES.summary}>
          <SummarySkill skill={TYPESCRIPT} />
          <SummarySkill skill={REACT} />

          <div className={STYLES.summaryItemYears}>
            <strong className={STYLES.yearCount}>5</strong>
            <span className={STYLES.summaryItemText}>let</span>
          </div>

          <SummarySkill skill={GRAPHQL} />
          <SummarySkill skill={STORYBOOK} />
        </section>

        <Section title={`Profil vývojáře`}>
          <CVText>
            Moje priority jsou robustnost, udržitelnost a čitelnost kódu. Neřídím se striktně DRY
            principem, spíše se snažím mít <em>single source of truth</em>. A rád píši komentáře,
            protože je to podle mě nejudržitelnější forma dokumentace.
          </CVText>
          <CVText>
            Většina mých zkušeností je z jednoho malého týmu. To také znamená, že umím pracovat jak
            samostatně, tak v rámci kolektivu. Pracoval jsem spíše na dlouhodobě udržovaných
            dynamických webových a mobilních aplikacích.
          </CVText>
          <CVText>
            Kromě samotného vývoje jsem často sestavoval zadání pro sebe i ostatní, mentoroval
            juniornější členy týmu, koordinoval vývoj a snažil se mít přesah do produktu. Také jsem
            někdy připravoval UX/UI návrhy, i když ty byly v mém podání vždy spíše praktické než
            kreativní.
          </CVText>
        </Section>

        <Section title={`Tech stack`}>
          <TechStackLine label={`Core`}>
            <TechStackSkill skill={TYPESCRIPT} />
            <TechStackSkill skill={REACT} />
            <TechStackSkill skill={NEXT_JS} />
            <TechStackSkill skill={REACT_NATIVE} />
          </TechStackLine>

          <TechStackLine label={`Styling`}>
            <TechStackSkill skill={CHAKRA_UI} />
            <TechStackSkill skill={STYLED_COMPONENTS} />
            <TechStackSkill skill={VANILLA_EXTRACT} />
            <TechStackSkill skill={STORYBOOK} />
          </TechStackLine>

          <TechStackLine label={`State`}>
            <TechStackSkill skill={GRAPHQL} />
            <TechStackSkill skill={REACT_CONTEXT} />
            <TechStackSkill skill={XSTATE} />
          </TechStackLine>

          <TechStackLine label={`DX`}>
            <TechStackSkill skill={VS_CODE} />
            <TechStackSkill skill={GIT} />
            <TechStackSkill skill={ESLINT} />
            <TechStackSkill skill={SENTRY} />
          </TechStackLine>

          <TechStackLine label={`Other`}>
            <TechStackSkill skill={FIGMA} />
            <TechStackSkill skill={NOTION} />
            <TechStackSkill skill={BITBUCKET} />
            <TechStackSkill skill={YOUTRACK} />
          </TechStackLine>
        </Section>

        <Section title={`O mně`}>
          <CVText>
            Mám rád ve věcech systém a pořádek. Snažím se být upřímný, férový a transparentní. Rád
            řeším problémy nejen ve vývoji. Baví mě podílet se na věcech, které zlepšují něčí život.
          </CVText>
        </Section>

        <Section title={`Zkušenosti`} className={STYLES.timelineSection}>
          <div className={STYLES.timeline}>
            <TimelineRecord
              title={`speedlo`}
              subtitle={` / speedlopro / deepvision`}
              interval={`03/2019 - 08/2023`}
            >
              <CVText>
                Postupný posun z junior na senior vývojáře. Samostatná práce na základě obecnějších
                zadání, převzetí vedoucí role. Rozšiřování a vedení malého frontend týmu. Koordinace
                produktu a vývoje, Návrh FE architektury, zlepšování DX.
              </CVText>
              <CVText>
                Zaměřením firmy byla podpora restauračních podniků. Pracoval jsem na administračních
                aplikacích pro klienty, objednávacích aplikacích pro zákazníky klientů i interních
                aplikacích usnadňujících procesy firmy.
              </CVText>
              <CVText>
                Konkrétně šlo například o aplikaci pro správu restaurace (příjem objednávek,
                nastavení nabídky, statistiky), několik objednávacích aplikací (rozpoznání podniku
                podle URL nebo konkrétního stolu podle QR) nebo mobilní aplikaci pro rozvozce
                (přiřazení objednávky, přesun mezi stavy, doručení zákazníkovi).
              </CVText>
            </TimelineRecord>

            <TimelineRecord title={`HARPAGON Software`} interval={`01/2018 - nyní`}>
              <CVText>
                Samostatná práce na tabletové aplikaci pro obchodní zástupce (nabídka produktů,
                vytváření objednávek, offline režim). Další drobné webové projekty. Nárazové
                vytížení, spíše o víkendech.
              </CVText>
            </TimelineRecord>

            <hr className={STYLES.separator} />

            <TimelineRecord title={`Univerzita Pardubice`} interval={`09/2012 - 06/2018`}>
              <CVText>
                Dokončené bakalářské i navazující magisterské studium oboru Informační technologie
                na Fakultě elektrotechniky a informatiky.
              </CVText>
            </TimelineRecord>
          </div>
        </Section>
      </main>

      <footer className={STYLES.footer}>
        <FooterItem
          image={qrCv}
          label={`Více informací`}
          imageDescription={`QR code with link to more detailed CV`}
          link={APP_CONFIG.cvUrl}
        />
        <FooterItem
          image={qrIn}
          label={`LinkedIn profil`}
          imageDescription={`QR code with link to LinkedIn profile`}
          link={APP_CONFIG.linkedInUrl}
        />
        <FooterItem
          image={qrCode}
          label={`Ukázka kódu`}
          imageDescription={`QR code with link to code example`}
          link={APP_CONFIG.codeExampleUrl}
        />
      </footer>
    </article>
  )
}

export default CVCompact
