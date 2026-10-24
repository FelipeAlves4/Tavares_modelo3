import { PageIntro } from '../components/ui/PageIntro'
import { ContactForm } from '../components/ui/ContactForm'
export default function Contact() { return <><PageIntro number="05 / CONTATO" title={<>Vamos conversar<br/>sobre o <em>próximo passo.</em></>} text="Conte um pouco sobre a sua ideia. Este formulário é demonstrativo e não envia informações para um servidor."/><main className="shell contact-page"><ContactForm/></main></> }
