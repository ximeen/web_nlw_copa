import Image from "next/image";
import phone from "../assets/phones.png";
import Logo from "../assets/logo.svg";
import userAvatars from "../assets/userAvatar.png";
import iconCheck from "../assets/iconCheck.svg";

interface HomeProps {
  pools: number;
  users: number,
  guesses: number
}

export default function Home(props: HomeProps) {
  return (
    <div className="lg:max-w-6xl md:max-w-xs max-w-[210px] lg:h-screen mx-auto lg:grid lg:grid-cols-2 items-center ">
      <main>
        <Image src={Logo} alt="Logo da nlw copa" className="mt-10 flex items-center justify-center"/>

        <h1 className="mt-16 text-white font-bold lg:text-5xl text-2xl leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-2">
          <Image src={userAvatars} alt="Imagem dos avatares dos usuarios" />

          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">{props.users} </span>
            pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-4 lg:gap-2 flex-col lg:flex-row">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border-b-gray-600 text-sm focus:outline-none focus:border-nlwYellow-500 focus:ring-1 focus:ring-nlwYellow-500 invalid:border-pink-500 invalid:text-rose-600
            focus:invalid:border-rose-500 focus:invalid:ring-rose-500 text-gray-100"
            type="text"
            required
            placeholder="Qual nome do seu bolão?"
          />

          <button
            type="submit"
            className="bg-nlwYellow-500 rounded px-6 py-4 text-black-700 font-bold text-sm uppercase"
          >
            Crie um bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-200">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div className=" mt-10 border-t-[1px] border-gray-600 flex justify-between pt-10 ">
          <div className="flex gap-6">
            <Image src={iconCheck} alt="Icone de check" />

            <div className="flex flex-col">
              <span className="font-bold text-gray-100 text-xl">+ {props.pools}</span>
              <span className="text-gray-100">Bolões criados </span>
            </div>
          </div>

          <div className="border-r-[1px] border-gray-600"></div>

          <div className="flex gap-6" >
            <Image src={iconCheck} alt="Icone de check" />

            <div className="flex flex-col">
              <span className="font-bold text-gray-100 text-xl">+{props.guesses}</span>
              <span className="text-gray-100">Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={phone}
        alt="Dois celulares mostrando previw do nlw copa"
        quality={100}
        className="mt-10"
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const responseUsers = await fetch("http://localhost:3333/users/count");
  const users = await responseUsers.json();


  const responseCount = await fetch("http://localhost:3333/pools/count");
  const count = await responseCount.json();

  const responseGuesses = await fetch("http://localhost:3333/guesses/count");
  const guesses = await responseGuesses.json();

  return {
    props: {
      users: users.users,
      pools: count.count,
      guesses: guesses.guesses,
    },
  };


};

