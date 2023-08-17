import { FaQuoteLeft } from "react-icons/fa";

export function Testimonials() {
  return (
    <section className="container mx-auto max-w-4xl p-4 pt-8">
      <div className="relative mb-4 p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold">
          <span className="mr-2 font-headline text-3xl text-gray-800">
            Depoimentos de
          </span>
          <span className="font-handwriting text-4xl text-blue-800">
            Clientes
          </span>
        </h2>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400" />
      </div>
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque
            consequatur accusamus earum blanditiis ipsum neque beatae veniam
            corporis numquam iste recusandae esse aspernatur asperiores eum,
            eligendi quod velit molestiae.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="https://source.unsplash.com/random/100x100/?person"
            alt="Pessoa"
          />
          <div className="flex items-center divide-x-2 devide-gray-200">
            <div className="pr-3 font-medium text-gray-900">Pessoa</div>
            <div className="pl-3 text-sm font-light text-gray-500">
              Empresa.com
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
