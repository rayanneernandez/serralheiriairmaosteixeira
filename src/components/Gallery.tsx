import React, { useState } from "react";
import portagiroImg from "../img/portagiro.jpeg";  
import portaImg from "../img/porta.jpeg";
import portafrenteImg from "../img/portafrente.png";
import portabanheiroImg from "../img/portabanheiro.png";
import portacormadeiraImg from "../img/portacormadeira.png";
import armariopiaImg from "../img/armariopia.png";
import armariopia2Img from "../img/armariopia2.jpeg";
import aluminiobrancoImg from "../img/aluminiobranco.png";
import vidrosvarandaImg from "../img/vidrosvaranda.png";
import caixaImg from "../img/caixa.jpg";
import janelaImg from "../img/janela.jpeg";
import janelamercadoImg from "../img/janelamercado.png";
import escadaImg from "../img/escada.jpeg";
import escada2Img from "../img/escada2.jpeg";
import portaoImg from "../img/portao.jpeg";
import variosvidrosImg from "../img/variosvidros.jpeg";

interface Project {
  id: number;
  category: string | string[]; // Agora aceita string ou array de strings
  image: string;
  description?: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("todos");

  const projects: Project[] = [
    {
      id: 1,
      category: "Aluminio",
      image: escadaImg,
      description: "Estrutura em aluminio fachada cortina",
    },
    {
      id: 2,
      category: "Aluminio",
      image: escada2Img,
      description: "Estrutura em aluminio fachada cortina",
    },
    {
      id: 3,
      category: "Aluminio",
      image: portaoImg,
      description: "Portão de aluminio branco",
    },
    {
      id: 4,
      category: "Aluminio",
      image: portaImg,
      description: "Pintura amadeirado",
    },
    {
      id: 5,
      category: "Aluminio",
      image: janelaImg,
      description: "Janela de Aluminio",
    },
    {
      id: 6,
      category: "Blindex",
      image: portabanheiroImg,
      description: "Box blindex",
    },
    {
      id: 7,
      category: "Aluminio",
      image: portafrenteImg,
      description: "Portão de giro, lambril duplo",
    },
    {
      id: 8,
      category: "Aluminio",
      image: portacormadeiraImg,
      description: "Pintura amadeirado",
    },
    {
      id: 9,
      category: "Aluminio", 
      image: armariopiaImg,
      description: "Armário de Pia - Aluminio",
    },
    {
      id: 10,
      category: "Aluminio",
      image: armariopia2Img,
      description: "Armário de Pia - Aluminio",
    },
    {
      id: 11,
      category: "Aluminio",
      image: aluminiobrancoImg,
      description: "Alumínio branco, brilho e bronze",
    },
    {
      id: 12,
      category: "Vidro",
      image: vidrosvarandaImg,
      description: "Vidros temperados varanda",
    },
    {
      id: 13,
      category: ["Aluminio", "Vidro"], // exemplo de múltiplas categorias
      image: caixaImg,
      description: "Caixa para receber encomendas - Aluminio e Vidro",
    },
    {
      id: 14,
      category: "Aluminio",
      image: janelamercadoImg,
      description: "Estrutura de Aluminio - Janela de mercado",
    },
    {
      id: 15,
      category: "Aluminio",
      image: portagiroImg,
      description: "Porta de giro de lambril - Aluminio",
    },
    {
      id: 16,
      category: "Vidro",
      image: variosvidrosImg,
      description: "Vidros temperados",
    },
  ];

  const categories = [
    "todos",
    "Aluminio",
    "Vidro",
    "Blindex",
  ];

  const filteredProjects =
    activeCategory === "todos"
      ? projects
      : projects.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeCategory)
            : p.category === activeCategory
        );

  return (
    <section id="projetos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Nossos Projetos</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.description}
                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
              />
              {project.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-sm">
                  {project.description}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal de imagem ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Projeto ampliado"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
