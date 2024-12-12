"use client";
import { FlashText } from "@/components/flashText";
import Hero from "@/components/sections/heroSection";
import Image from "next/image";
import photo from "@/public/Group 8618.png";
import Card, { CardProps } from "@/components/card";
import Explore from "@/public/explore.jpg";
import Flexibility from "@/public/flexibility.png";
import Decision from "@/public/decision.png";
import Adaptability from "@/public/adabtibilitate.png";
import Complezity from "@/public/complexity.png";
import Wasting from "@/public/wasting.png";
import BadLogic from "@/public/badlogic.png";
import Footer from "@/components/footer";

export default function Home() {
  const advantages: CardProps[] = [
    {
      title: "Flexibilitate ridicată",
      imageURL: Flexibility,
      description:
        "Poate fi aplicat la o gamă largă de probleme, cum ar fi combinatorică, jocuri, optimizare, și rezolvarea puzzle-urilor.",
    },
    {
      title: "Explorare",
      imageURL: Explore,
      description:
        "Garantează găsirea unei soluții (dacă aceasta există) prin testarea tuturor posibilităților.",
    },
    {
      title: "Util pentru probleme decizionale",
      imageURL: Decision,
      description:
        "Este potrivit pentru probleme care necesită un răspuns „da” sau „nu” (ex.: se poate sau nu se poate rezolva problema?).",
    },
    {
      title: "Optimizare prin euristici",
      description:
        "Poate fi îmbunătățit folosind euristici sau tehnici precum „pruning” pentru a reduce numărul de căi explorate.",
      imageURL: Adaptability,
    },
  ];

  const disadvantages: CardProps[] = [
    {
      title: "Complexitate ridicată",
      imageURL: Complezity,
      description:
        "În cel mai rău caz, complexitatea este exponențială (O(b^d), unde b este ramificația și d adâncimea), ceea ce îl face ineficient pentru probleme mari.",
    },
    {
      title: "Consumul de resurse",
      imageURL: Wasting,
      description:
        "Folosește multă memorie și timp datorită apelurilor recursive și stocării stărilor.",
    },
    {
      title: "Dependență de constrângeri",
      imageURL: BadLogic,
      description:
        "Performanța depinde foarte mult de cât de bine sunt definite constrângerile și condițiile de validare.",
    },
  ];

  return (
    <main className="">
      <Hero />

      <div className=" w-full p-20 flex flex-col gap-20" id="smt">
        <div className="flex flex-col gap-8 font-semibold text-xl">
          <FlashText title="Ce este Backtracking?" />

          <div className="w-full h-24 border-2 border-[#05ABE1] flex items-center justify-center rounded text-2xl font-semibold text-[#05ABE1]">
            <p>
              Backtracking este o tehnică algoritmică generală care explorează
              toate combinațiile posibile pentru a rezolva o problemă
              computațională.
            </p>
          </div>

          <p>
            Backtracking este o metodă algoritmică utilizată pentru a rezolva
            probleme prin explorarea tuturor soluțiilor posibile într-un mod
            sistematic. Principiul de bază constă în încercarea de a construi o
            soluție pas cu pas, revenind (backtracking) la o etapă anterioară
            atunci când o alegere se dovedește incorectă sau inutilă.
          </p>

          <p>
            Este frecvent utilizată în probleme precum generarea combinațiilor,
            rezolvarea labirinturilor, Sudoku, și alte probleme de tip puzzle,
            unde se poate naviga un „arbore al deciziilor” pentru a găsi o
            soluție validă.
          </p>
        </div>

        <div className="flex flex-col gap-8 font-semibold text-xl">
          <FlashText title="Ce este Backtracking?" />

          <p>
            Backtracking-ul este o metodă pas cu pas de rezolvare a problemelor.
            Procesul începe prin alegerea unei soluții parțiale și verificarea
            validității acesteia. Dacă soluția respectivă duce la un impas sau
            nu este corectă, algoritmul „face un pas înapoi” (backtrack) și
            încearcă o altă opțiune. Pașii principali ai backtracking-ului:
          </p>

          <div className="">
            <p>Pașii principali ai backtracking-ului:</p>
            <li>Explorare: Alege o cale sau o posibilitate.</li>
            <li>
              Testează dacă soluția curentă este validă. Retragere: Dacă soluția
              nu
            </li>
            <li>
              Verificare: funcționează, revino la pasul anterior și încearcă
              altă opțiune
            </li>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image src={photo} alt="backtracking explained" />
          </div>
        </div>

        <div className="flex flex-col gap-8 font-semibold text-xl">
          <FlashText title="De ce este important Backtracking-ul?" />
          <p>
            Backtracking este o tehnică esențială în informatică datorită
            versatilității și eficienței sale în rezolvarea problemelor
            complexe. Aceasta joacă un rol crucial în diverse domenii, stând la
            baza multor algoritmi și aplicații practice.
          </p>
          <p>
            <strong>Eficiență în Explorarea Soluțiilor</strong>
            <br />
            Backtracking permite explorarea sistematică a tuturor
            posibilităților, fără a le analiza pe toate simultan. Prin
            optimizări precum <strong>pruning</strong> (taierea soluțiilor
            invalide), timpul de căutare este redus semnificativ. Este o
            alternativă mult mai eficientă decât abordările brute force, care
            necesită mult mai multe resurse.
          </p>
          <div className="">
            <p>
              <strong>Aplicații practice:</strong>
            </p>
            <li>
              Crearea de boți inteligenți pentru jocuri de masă, precum șahul.
            </li>
            <li>
              Rezolvarea labirinturilor și puzzle-urilor, cum ar fi problema
              N-Regine.
            </li>
            <li> Rutare în rețele.</li>

            <li>Decriptare.</li>
          </div>
        </div>

        <div className="flex flex-col gap-8 font-semibold text-xl">
          <FlashText title="Avantajele Backtracking-ul" />
          <div className="w-full flex flex-row justify-center gap-9">
            {advantages.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                imageURL={item.imageURL}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 font-semibold text-xl">
          <FlashText title="Dezantajele Backtracking-ul" />
          <div className="w-full flex flex-row justify-center gap-9">
            {disadvantages.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                imageURL={item.imageURL}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
