import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { useState } from 'react';
import member1 from '@/assets/member-1.jpg';
import member2 from '@/assets/member-2.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const galleryImages = [
  {
    id: 1,
    src: heroBg,
    alt: "ACM Workshop Session",
    title: "AI/ML Workshop",
    description: "Students engaged in hands-on machine learning session"
  },
  {
    id: 2,
    src: member1,
    alt: "Hackathon Team",
    title: "Hackathon 2024",
    description: "Teams collaborating during 24-hour coding marathon"
  },
  {
    id: 3,
    src: member2,
    alt: "Tech Talk",
    title: "Industry Expert Session",
    description: "Guest speaker discussing future of computing"
  },
  {
    id: 4,
    src: heroBg,
    alt: "Programming Contest",
    title: "Competitive Programming",
    description: "Inter-college programming competition in progress"
  },
  {
    id: 5,
    src: member1,
    alt: "Team Meeting",
    title: "Chapter Meeting",
    description: "ACM executive team planning upcoming events"
  },
  {
    id: 6,
    src: member2,
    alt: "Awards Ceremony",
    title: "Recognition Ceremony",
    description: "Celebrating achievements of ACM members"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Event <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments from our workshops, competitions, and community gatherings.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Reveal>
            <Card 
              key={image.id}
              className="glass-card card-3d hover:shadow-3d transition-all duration-500 cursor-pointer animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative group">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </Card>
            </Reveal>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <Card className="glass-card max-w-4xl max-h-[90vh] overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <Reveal>
          <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Photos Captured</div>
            </CardContent>
          </Card>
          </Reveal>
          <Reveal delayMs={100}>
          <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Events Documented</div>
            </CardContent>
          </Card>
          </Reveal>
          <Reveal delayMs={200}>
          <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Memories Created</div>
            </CardContent>
          </Card>
          </Reveal>
          <Reveal delayMs={300}>
          <Card className="glass-card card-3d hover:shadow-3d transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Years of History</div>
            </CardContent>
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}