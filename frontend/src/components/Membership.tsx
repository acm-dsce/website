import { ExternalLink, Gift, FileText, Phone, CheckCircle2, ArrowRight, Sparkles, Star, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

const benefits = [
  {
    category: 'Learning & Development',
    items: [
      'ACM Skills Bundle Add-On — unlimited access to thousands of online books, video courses, interactive sandboxes, practice labs, and AI-enabled tools',
      'ACM Digital Library Premium — full-text articles from all ACM publications and bibliographic data from major publishers in computing',
      'Full-year subscription to Communications of the ACM (print & online)',
      'Full-year subscription to XRDS: Crossroads, ACM\'s Student Magazine',
    ],
  },
  {
    category: 'Networking & Career',
    items: [
      'Access to ACM\'s Career & Job Center with targeted job opportunities',
      'Join one or more of ACM\'s 37 Special Interest Groups (SIGs)',
      'Become part of a global network of nearly 100,000 dedicated computing professionals',
      'Participation in ACM Distinguished Speakers Program (DSP)',
    ],
  },
  {
    category: 'Publications & News',
    items: [
      'MemberNet — ACM\'s quarterly member newsletter',
      'Student Quick Takes — quarterly newsletter for students',
      'TechNews — tri-weekly email IT news digest',
      'CareerNews — twice monthly career news digest',
      'ACM Queue — online magazine for practicing software engineers',
    ],
  },
  {
    category: 'Discounts & Perks',
    items: [
      'Discounts on ACM journals, magazines, books, and conferences',
      'Exclusive subscription pricing on ACM Books series',
      'Free email forwarding address with high-quality spam filtering',
      'Special discounts through ACM\'s Insurance and Discounts Programs',
      'Member pricing for Article Processing Charges (APCs) for Open Access publication',
    ],
  },
];

const steps = [
  {
    number: '01',
    title: 'Register on ACM',
    description: 'Click the button below to visit the official ACM student membership registration page and complete the signup process.',
  },
  {
    number: '02',
    title: 'Make the Payment',
    description: 'Complete the membership fee payment on the ACM portal. Save the payment receipt as a PDF.',
  },
  {
    number: '03',
    title: 'Send Receipt & Join Group',
    description: 'Send the PDF of your payment receipt to the WhatsApp number below. You\'ll be added to the official ACM DSCE WhatsApp group.',
  },
];

export default function Membership() {
  return (
    <section className="relative py-20 px-6 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute inset-0 bg-vignette"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Become an <span className="gradient-text">ACM Member</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the world's largest computing society and unlock exclusive benefits for your career and learning.
          </p>
        </Reveal>

        {/* DSCE Reimbursement Highlight — the big selling point */}
        <Reveal>
          <div className="relative mb-16 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-50"></div>
            <div className="relative px-8 py-10 md:px-12 md:py-14 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Exclusive to DSCE
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                50% Reimbursement on Membership Fee
              </h3>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-2">
                DSCE ACM Student Chapter reimburses <strong>half of your membership fee</strong> — a benefit not available at any other college chapter.
              </p>
              <p className="text-white/70 text-sm">
                This is our way of investing in your growth as a computing professional.
              </p>
            </div>
          </div>
        </Reveal>

        {/* How to Join — Steps */}
        <Reveal className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            How to <span className="gradient-text">Join</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.number} delayMs={i * 100}>
                <Card className="glass-card h-full relative overflow-hidden group hover:shadow-3d transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-5xl font-extrabold text-primary/15 mb-4">{step.number}</div>
                    <h4 className="text-lg font-bold text-foreground mb-3">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Register CTA */}
        <Reveal className="mb-16">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-bold mb-3">Ready to Register?</h4>
                <p className="text-muted-foreground mb-6">
                  Click below to go to the official ACM Student Membership registration page. The process takes just a few minutes.
                </p>
                <a
                  href="https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-glow hover:scale-[1.02]">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Register on ACM
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        {/* Send Receipt — Important Highlight */}
        <Reveal className="mb-16">
          <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                  <Star className="w-3 h-3" />
                  Important — Don't Skip This
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-3">Send Your Receipt & Join the Group</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  After completing your ACM membership registration, save the payment receipt as a <strong className="text-foreground">PDF</strong> and send it via WhatsApp to the number below. This serves as your <strong className="text-foreground">proof of membership</strong> and you'll be added to the official <strong className="text-foreground">ACM DSCE WhatsApp group</strong>.
                </p>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  Your <strong className="text-foreground">50% reimbursement</strong> will be processed later by the chapter.
                </p>
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-background border border-border">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span className="text-lg font-bold text-foreground tracking-wide">+91 99807 14075</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Benefits Grid */}
        <Reveal className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Membership <span className="gradient-text">Benefits</span>
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Here's what you get as an ACM Student Member.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((group, i) => (
            <Reveal key={group.category} delayMs={i * 80}>
              <Card className="glass-card h-full hover:shadow-3d transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Gift className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{group.category}</h4>
                  </div>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Join hundreds of students worldwide who are shaping the future of computing.
            </p>
            <a
              href="https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-primary hover:opacity-90 text-white px-10 py-6 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-glow hover:scale-[1.02]">
                Become a Member Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
