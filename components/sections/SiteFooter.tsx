import { Icon } from "@/components/ds/Icon";
import { EMAIL, footCols, socials } from "@/lib/content";
import { FooterWordmark } from "./FooterWordmark";
import { SubscribeForm } from "./SubscribeForm";

const social =
  "inline-flex size-10 items-center justify-center rounded-full text-on-dark-muted transition-colors duration-150 ease-[ease] hover:bg-white/[.08] hover:text-on-dark";

// Each column opens under a thin rule, as on langchain.com. The owner asked for that footer exactly, so these
// rules are a deliberate exception to the no-hairline house style. taste-skill-ignore
const column = "flex flex-col gap-5 border-t border-white/[.1] pt-8"; // taste-skill-ignore

/** The footer, after langchain.com: four columns, the name at full width as a lit wordmark, then a status line. */
export function SiteFooter() {
  return (
    <footer className="oe-glow-footer overflow-hidden">
      <div className="oe-page pt-[clamp(72px,8vw,128px)] pb-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-10">
          {footCols.map((col) => (
            <nav key={col.title} aria-label={col.title} className={column}>
              <h2 className="oe-subtitle m-0 text-on-dark">{col.title}</h2>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="oe-small inline-flex min-h-8 items-center text-on-dark-muted! no-underline transition-colors duration-150 ease-[ease] hover:text-on-dark! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={column + " col-span-2 lg:col-span-1"}>
            <h2 id="ft-news" className="oe-subtitle m-0 text-on-dark">
              Get new notes by email
            </h2>
            <SubscribeForm labelledBy="ft-news" />
            <div className="flex justify-end gap-1">
              <a href={`mailto:${EMAIL}`} aria-label="Email" className={social}>
                <Icon name="mail" size={18} />
              </a>
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} rel="me noopener" className={social}>
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[clamp(48px,6vw,88px)]">
          <FooterWordmark />
        </div>

        <div className="mt-[clamp(24px,3vw,40px)] flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <span className="oe-small inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="ft-dot size-2 rounded-full bg-blue-soft" />
            Open to new conversations
          </span>
          <span className="oe-small">© 2026 Mohammed Omer Ejaz · omerejaz.com</span>
        </div>
      </div>
    </footer>
  );
}
