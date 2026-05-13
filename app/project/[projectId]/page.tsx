"use client";

import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import { projects } from "../../data/projects";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.projectId as string;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previewImage, setPreviewImage] = useState<{
    image: string;
    description: string;
    currentIndex: number;
    gallery?: { image: string; description: string }[];
  } | null>(null);

  const project = projects.find((p) => p.slug === projectId);

  const openPreview = (
    gallery: { image: string; description: string }[],
    index: number,
  ) => {
    const item = gallery[index];
    setPreviewImage({
      image: item.image,
      description: item.description,
      gallery,
      currentIndex: index,
    });
  };

  const goToPreviewImage = (index: number) => {
    if (!previewImage?.gallery) return;
    const item = previewImage.gallery[index];
    setPreviewImage({
      ...previewImage,
      image: item.image,
      description: item.description,
      currentIndex: index,
    });
  };

  const nextPreviewImage = () => {
    if (!previewImage?.gallery) return;
    const nextIndex =
      (previewImage.currentIndex + 1) % previewImage.gallery.length;
    goToPreviewImage(nextIndex);
  };

  const prevPreviewImage = () => {
    if (!previewImage?.gallery) return;
    const prevIndex =
      (previewImage.currentIndex - 1 + previewImage.gallery.length) %
      previewImage.gallery.length;
    goToPreviewImage(prevIndex);
  };

  // Reset slide when project changes
  useEffect(() => {
    setCurrentSlide(0);
    window.scrollTo(0, 0);
  }, [projectId]);

  // Handle keyboard escape key for preview
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === projectId);
  const previousProject =
    projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1];
  const nextProject =
    projects[currentIndex === projects.length - 1 ? 0 : currentIndex + 1];

  const isLogoCollection = project.id === 6;
  const totalImages = project.images.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="#project"
        className="relative min-h-[60vh] flex items-center bg-zinc-900"
      >
        <div className="absolute inset-0 opacity-30">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </Link>

            <div className="text-zinc-400 tracking-wider mb-4 uppercase text-sm">
              {project.category}
            </div>
            <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl">
              {project.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Project Images - Logo Collections or Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            {isLogoCollection && project.logoCollections ? (
              <div className="space-y-16">
                {/* Logo Collections */}
                {project.logoCollections.map((collection, collectionIdx) => (
                  <motion.div
                    key={collectionIdx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * collectionIdx }}
                    className=" rounded-2xl overflow-hidden"
                  >
                    {/* Collection Header */}
                    <div className="p-8 pb-6 border-b border-zinc-200">
                      <h3 className="text-3xl mb-3">{collection.title}</h3>
                      <p className="text-zinc-600 text-lg">
                        {collection.description}
                      </p>
                    </div>

                    {/* Logo Collage - Different layouts for each collection */}
                    <div className="p-8">
                      {collectionIdx === 0 && (
                        /* Tech Startups - Hero + stacked cards */
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.8fr_1fr]">
                          <motion.div
                            className="relative aspect-[5/4] overflow-hidden rounded-lg bg-yellow-200 border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => openPreview(collection.logos, 0)}
                          >
                            <img
                              src={collection.logos[0].image}
                              alt={`${collection.title} logo 1`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </motion.div>
                          <div className="grid grid-cols-1 gap-4">
                            {collection.logos.slice(1).map((logo, idx) => (
                              <motion.div
                                key={idx}
                                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                onClick={() =>
                                  openPreview(collection.logos, idx + 1)
                                }
                              >
                                <img
                                  src={logo.image}
                                  alt={`${collection.title} logo ${idx + 2}`}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {collectionIdx === 1 && (
                        /* Food & Beverage - Asymmetric Layout */
                        <div className="grid grid-cols-3 gap-4">
                          <motion.div
                            className="col-span-2 row-span-2 relative aspect-square overflow-hidden rounded-lg bg-black border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => openPreview(collection.logos, 0)}
                          >
                            <img
                              src={collection.logos[0].image}
                              alt={`${collection.title} logo 1`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </motion.div>
                          {collection.logos.slice(1).map((logo, idx) => (
                            <motion.div
                              key={idx}
                              className="relative aspect-square overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.02 }}
                              onClick={() =>
                                openPreview(collection.logos, idx + 1)
                              }
                            >
                              <img
                                src={logo.image}
                                alt={`${collection.title} logo ${idx + 2}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {collectionIdx === 2 && (
                        /* Landscaping & Repair - Horizontal Strip */
                        <div className="grid grid-cols-3 gap-4">
                          {collection.logos.map((logo, idx) => (
                            <motion.div
                              key={idx}
                              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.02 }}
                              onClick={() => openPreview(collection.logos, idx)}
                            >
                              <img
                                src={logo.image}
                                alt={`${collection.title} logo ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {collectionIdx === 3 && (
                        /* Retail & Bar Services - Advanced mosaic layout */
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-8">
                          <motion.div
                            className="md:col-span-5 relative aspect-[4/3] overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => openPreview(collection.logos, 0)}
                          >
                            <img
                              src={collection.logos[0].image}
                              alt={`${collection.title} logo 1`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </motion.div>
                          <div className="md:col-span-3 grid gap-4">
                            {collection.logos[1] && (
                              <motion.div
                                className="relative aspect-[5/4] overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                onClick={() => openPreview(collection.logos, 1)}
                              >
                                <img
                                  src={collection.logos[1].image}
                                  alt={`${collection.title} logo 2`}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </motion.div>
                            )}

                            <div className="grid grid-cols-2 gap-4">
                              {collection.logos.slice(2, 4).map((logo, idx) => (
                                <motion.div
                                  key={idx}
                                  className="relative aspect-square overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer"
                                  whileHover={{ scale: 1.02 }}
                                  onClick={() =>
                                    openPreview(collection.logos, idx + 2)
                                  }
                                >
                                  <img
                                    src={logo.image}
                                    alt={`${collection.title} logo ${idx + 3}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6">
                {project.images.map((img, idx) => {
                  // Bento grid layout with different sizes
                  const bentoSizes = [
                    "lg:col-span-3 lg:row-span-2", // Large hero
                    "lg:col-span-2 lg:row-span-1", // Medium
                    "lg:col-span-1 lg:row-span-2", // Tall
                    "lg:col-span-2 lg:row-span-2", // Large square
                    "lg:col-span-1 lg:row-span-1", // Small
                    "lg:col-span-1 lg:row-span-1", // Small
                  ];
                  const sizeClass = bentoSizes[idx % bentoSizes.length];

                  return (
                    <div
                      key={idx}
                      className={`relative ${sizeClass} overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer group`}
                      onClick={() =>
                        openPreview(
                          project.images.map((img) => ({
                            image: img,
                          })),
                          idx,
                        )
                      }
                    >
                      <img src={img} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* Case Study Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl mb-4">Challenge</h3>
              <p className="text-zinc-700 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl mb-4">Solution</h3>
              <p className="text-zinc-700 leading-relaxed text-lg">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16 p-8 bg-zinc-50 rounded-lg"
          >
            <h3 className="text-2xl mb-4">Results</h3>
            <p className="text-zinc-700 leading-relaxed text-lg">
              {project.results}
            </p>
          </motion.div>

          {/* Technologies/Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 bg-zinc-900 text-white text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* External Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-8 border-t border-zinc-200"
          >
            <h3 className="text-2xl mb-6">View Project</h3>
            <div className="flex flex-wrap gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors inline-flex items-center gap-2 rounded-lg"
                >
                  Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors inline-flex items-center gap-2 rounded-lg"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {project.links.caseStudy && (
                <a
                  href={project.links.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-zinc-300 text-zinc-900 hover:border-zinc-900 transition-colors inline-flex items-center gap-2 rounded-lg"
                >
                  Case Study
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.links.behance && (
                <a
                  href={project.links.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-zinc-300 text-zinc-900 hover:border-zinc-900 transition-colors inline-flex items-center gap-2 rounded-lg"
                >
                  Behance
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.links.documentation && (
                <a
                  href={project.links.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-zinc-300 text-zinc-900 hover:border-zinc-900 transition-colors inline-flex items-center gap-2 rounded-lg"
                >
                  Documentation
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-16 px-6 lg:px-12 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-sm uppercase tracking-wider text-zinc-500 mb-12">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Previous Project */}
            <Link
              href={`/project/${previousProject.slug}`}
              className="group relative overflow-hidden bg-zinc-100 rounded-lg"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={previousProject.image}
                  alt={previousProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="uppercase tracking-wider">Previous</span>
                </div>
                <h4 className="text-white text-2xl mb-1 group-hover:translate-x-1 transition-transform">
                  {previousProject.title}
                </h4>
                <p className="text-white/80 text-sm">
                  {previousProject.category}
                </p>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              href={`/project/${nextProject.slug}`}
              className="group relative overflow-hidden bg-zinc-100 rounded-lg"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-end gap-2 text-white/70 text-sm mb-2">
                  <span className="uppercase tracking-wider">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <h4 className="text-white text-2xl mb-1 text-right group-hover:translate-x-1 transition-transform">
                  {nextProject.title}
                </h4>
                <p className="text-white/80 text-sm text-right">
                  {nextProject.category}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Image Preview Modal */}
      {previewImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setPreviewImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="max-h-[90vh] overflow-y-auto p-6">
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
                <img
                  src={previewImage.image}
                  alt="Preview"
                  className="w-full max-h-[80vh] object-contain bg-zinc-50 rounded-lg cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPreviewImage();
                  }}
                />
                <div className="flex flex-col justify-between rounded-lg border border-zinc-200 bg-white p-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
                      Preview description
                    </p>
                    <p className="text-lg text-zinc-800 leading-relaxed font-medium">
                      {previewImage.description}
                    </p>
                  </div>
                  {previewImage.gallery?.length > 1 && (
                    <div className="grid gap-3 mt-8 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevPreviewImage();
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 border border-zinc-300 text-zinc-900 rounded-full bg-white shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50"
                        aria-label="Previous logo"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <div className="text-center text-sm text-zinc-500">
                        Logo {previewImage.currentIndex + 1} of{" "}
                        {previewImage.gallery.length}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextPreviewImage();
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-zinc-900 text-white rounded-full shadow-sm hover:bg-zinc-800 transition"
                        aria-label="Next logo"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
