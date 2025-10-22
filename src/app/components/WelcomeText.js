"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const TextsImgs = [
  { id: 1, text: "art-life", img: "/assets/art-life.svg" },
  { id: 2, text: "magazine", img: "/assets/magazine.svg" },
  { id: 3, text: "podcast", img: "/assets/podcast.svg" },
  { id: 4, text: "authors", img: "/assets/authors.svg" },
];

const WelcomeText = ({ text }) => {
  // procura no array pelo texto recebido
  const item = TextsImgs.find((el) => el.text === text);

  // caso não encontre, evita erro
  if (!item) return <p>Imagem não encontrada para "{text}"</p>;

  
  return (
    <div className="py-8 overflow-hidden">
        <motion.div
        initial={{ y: 180 }}
        whileInView={{  y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}>
            <Image
            src={item.img}
            alt={item.text}
            width={1458}
            height={206}
            className="w-full h-auto"
            />
        </motion.div>    
    </div>
  );
};

export default WelcomeText;
