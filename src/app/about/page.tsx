export default function Home() {
  return (
    <div className="grow w-full max-w-2xl container mx-auto font-[family-name:var(--font-spectral)]">
      <div className="flex flex-col gap-2">
        <h1 className="font-[family-name:var(--font-roboto-mono)] text-4xl px-3">
          About Me
        </h1>
        <p className="px-7 pt-10">
          Yo! Vergil1000 this side. I create apps, websites, and engaging
          content. Here, I share my recent projects and insights into my work.
        </p>
        <p className="px-7">
          I primarily use Next.js and will be sharing easy-to-implement
          components and templates related to it. Stay updated by subscribing
          below.
        </p>
        <p className="px-7">Thank you, and have a wonderful day! ^^</p>

        <div className="px-7 pt-5">
          <h2 className="text-xl font-[family-name:var(--font-roboto-mono)]">
            Connect with me on -
          </h2>
          <ul className="flex flex-col gap-1 pt-2 px-5">
            <li>
              <a
                href="https://discord.gg/kMdnrGGf3p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black hover:underline"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Vergil1000x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black hover:underline"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="mailto:koushikmallick1000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black hover:underline"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/koushik-mallick-1000x/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        {/*
        <div className="px-7 pt-5">
          <h2 className="text-xl font-[family-name:var(--font-roboto-mono)]">
            Subscribe -
          </h2>
          <p className="px-7 py-3">
            To get updates everytime I share a new blog or content!
          </p>
          <button className="ml-7 rounded-full px-3 py-1 border-2 border-black hover:bg-black hover:text-white active:underline transition-all">
            Subscribe
          </button>
        </div>
        */}
      </div>
    </div>
  );
}
