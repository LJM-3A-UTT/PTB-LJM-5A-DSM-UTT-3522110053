import { CONTAINER_CLASSNAME } from '~/constants'
import facebook from '~/assets/social/facebook-white.svg'
import twiiter from '~/assets/social/twitter-white.svg'
import instagram from '~/assets/social/instagram-white.svg'
import app_store from '~/assets/store/app-store.svg'
import play_store from '~/assets/store/play-store.svg'
import windows_store from '~/assets/store/windows-store.svg'

export function Footer() {
  return (
    <footer className="flex-shrink mt-6 bg-neutral-800">
      <section className={`${CONTAINER_CLASSNAME} py-8 flex flex-col  gap-4`}>
        <ul className="flex flex-wrap gap-2 text-sm text-neutral-300">
          <li>Terminos y Condiciones</li>
          <span>|</span>
          <li>oliticas De Privacidad</li>
          <span>|</span>
          <li>Soporte Tecnico</li>
          <span>|</span>
        </ul>
        <p className="text-sm text-neutral-300">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </p>
        <section className="flex flex-col flex-wrap items-center justify-between gap-4 mt-8 sm:flex-row">
          <div className="flex flex-col gap-4 sm:flex-row">
            <img alt="" className="w-9 h-9" src={facebook} />
            <img alt="" className="w-9 h-9" src={twiiter} />
            <img alt="" className="w-9 h-9" src={instagram} />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <img alt="" className="w-24 h-24" src={app_store} />
            <img alt="" className="w-24 h-24" src={play_store} />
            <img alt="" className="w-24 h-24" src={windows_store} />
          </div>
        </section>
      </section>
    </footer>
  )
}
