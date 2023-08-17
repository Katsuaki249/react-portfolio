export function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className='relative p-4 text-center'>
        <h2 className="relative text-blue-900 font-bold z-10">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Tenho x projetos executados e gostaria que o proximo seja o seu.
        </p>

        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40" />
      </div>

      <div className="relative mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Vinicius Shiroma
              </span>
            </p>

            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    idade:
                  </td>
                  <td>25</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>
                    <a
                      href="tel:+5519989273876"
                      className="underline hover:text-blue-800"
                    >
                      +55 (19) 9 8927-3876
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a
                      href="mailto:vinicius.katsuaki13@hotmail.com"
                      className="underline hover:text-blue-800"
                    >
                      vinicius.katsuaki13@hotmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://goo.gl/maps/db3x6dg9p66o1jY57"
                      className="underline hover:text-blue-800"
                    >
                      Paulínia - SP
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(https://media.licdn.com/dms/image/C4E03AQFkMszP4BKLIg/profile-displayphoto-shrink_800_800/0/1647459239412?e=1697068800&v=beta&t=1qRPrtTR_mnHr5GsmcRixIhgyFAkGAOXESSQVkcpoEs)] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56">
            </div>
        </div>
      </div>
    </section>
  )
}
