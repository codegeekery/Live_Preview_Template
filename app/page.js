
import Image from "next/image"
import Link from "next/link"
import { RiTwitterXLine, RiTiktokLine } from "react-icons/ri"
import { TfiFacebook } from "react-icons/tfi"
import { BsInstagram } from "react-icons/bs"

export default function Home() {

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className=" translate-y-5">
          <div className="flex flex-col justify-center text-center">
            <span className=" lg:text-6xl md:text-3xl text-2xl">JAMIE MCFLY IS A</span>
            <span className="lg:text-6xl md:text-3xl text-2xl font-bold">DESIGNER IN NYC</span>
          </div>
          <div className="lg:flex items-center justify-center p-4 md:grid md:grid-cols-2">
            <div className="flex justify-center mr-4">
              <Image src={'/Faces.jpg'} alt="Picture of the author" width={300} height={300} className="w-full" />
            </div>
            <div className="w-[500px]">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <br></br>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <br></br>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <br></br>
              <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <br></br>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex justify-center p-4">
                <ul className="p-2">
                  <h2 className="font-bold">ARTICLES</h2>
                  <li>Creative Mornings</li>
                  <li>Open Design Initiative</li>
                  <li>When Design Goes Wrong</li>
                  <li>Design It. Build It.</li>
                </ul>

                <ul className="p-2">
                  <h2 className=" font-bold">BOOKS</h2>
                  <li>Design Matters</li>
                  <li>Why We Build Things</li>
                  <li>Designing from Scratch</li>
                  <li>Achieving Greatness</li>
                </ul>
              </div>
              <div className="flex items-center p-2 gap-3">
                <RiTwitterXLine size={20} />
                <TfiFacebook size={20} />
                <BsInstagram size={20} />
                <RiTiktokLine size={20} />
              </div>
              <footer>
                <p>&copy; codegeekery {new Date().getFullYear()}</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
