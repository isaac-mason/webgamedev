import A from 'components/A'

const hathoraUrl = 'https://hathora.dev/?utm_source=webgamedev&utm_content=footer'

const Footer = () => (
  <footer className="nx-bg-gray-100 dark:nx-bg-neutral-900 nx-py-12 nx-text-gray-600">
    <div className="footer-promo-block">
      <style>
        {`
          footer {
            color: rgb(55, 65, 81);
          }
          .dark footer {
            color: rgb(226, 232, 240);
          }
          .footer-promo-block {
            text-align: center;  
            margin-bottom: 24px;
          }
            .footer-promo-block img {
              width: 170px;
              margin-bottom: 10px;
            }
            .hathora-white {
              display: none;
            }
            .hathora-black {
              display: inline-block;
            }
            .dark .hathora-white {
              display: inline-block;
            }
            .dark .hathora-black {
              display: none;
            }
          `}
      </style>
      <div>
        <a href={hathoraUrl} target="_blank" rel="noopener">
          <img alt="Hathora logo" className="hathora-black" src="/partnerships/hathora-black.png" />
          <img alt="Hathora logo" className="hathora-white" src="/partnerships/hathora-white.png" />
        </a>
      </div>
      <div>
        <div>
          Sponsored by{' '}
          <A href={hathoraUrl} rel="noopener">
            <b>Hathora</b>
          </A>
        </div>
        <div>Cloud Hosting for Multiplayer Games</div>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      Written by{' '}
      <A href="https://twitter.com/verekia" target="_blank" rel="noopener">
        🐦 Verekia
      </A>
      <br />
      <A href="https://mastodon.gamedev.place/@verekia" target="_blank" rel="noopener">
        🐘 Mastodon
      </A>{' '}
      •{' '}
      <A href="https://github.com/verekia" target="_blank" rel="noopener">
        🐙 GitHub
      </A>
    </div>
  </footer>
)

export default Footer
