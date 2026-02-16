import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { Award, GraduationCap } from 'lucide-react';

export default function FacultyHighlight() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative bg-muted/20">
                  <div className="relative overflow-hidden h-full flex items-center justify-center">
                    <img
                      src="/A45-5f8f0319-88ec-4cfd-a752-a7d9f1f80724.png"
                      alt="Dr. Annapurna P Patil"
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                  
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Dr. Annapurna P Patil
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Dean of Academics, DSCE
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      Senior ACM Member
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    As the Dean of Academics at Dayananda Sagar College of Engineering and a Senior ACM Member, 
                    Dr. Annapurna P Patil brings extensive experience and leadership to our student chapter. 
                    Her guidance and mentorship have been instrumental in shaping the academic and professional 
                    development of our members.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
