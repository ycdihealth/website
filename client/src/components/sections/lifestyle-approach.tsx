import { Dumbbell, TrendingDown, Zap, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import blueberryImage from "@assets/noblueberrycounting_1764894130208.png";

const goals = [
  {
    icon: Zap,
    label: "More Energy",
  },
  {
    icon: TrendingDown,
    label: "Lose Weight",
  },
  {
    icon: Scale,
    label: "Break Plateaus",
  },
  {
    icon: Dumbbell,
    label: "Feel Strong",
  }
];

export function LifestyleApproach() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Fat Loss, Muscle Gain, Motivation… <br />
              <span className="text-primary">Whatever You Need</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {goals.map((goal, i) => (
                <div key={i} className="flex items-center gap-3 bg-background p-4 rounded-xl shadow-sm border border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <goal.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{goal.label}</span>
                </div>
              ))}
            </div>

            <div className="hidden md:block pt-4">
               <img 
                src={blueberryImage} 
                alt="Cute blueberries saying No Blueberry Counting" 
                className="w-48 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed flex flex-col h-full justify-center">
            <div>
              <p className="first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:text-primary first-letter:mr-2 float-left">
                W
              </p>
              <p>
                hether you want more energy, to lose weight, to break a plateau, or to finally feel strong again, I’ve got you. My approach? <strong>Lifestyle changes over extremes.</strong>
              </p>
              <p>
                Counting macros can help short-term, but nobody wants to spend the rest of their life logging every blueberry.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-2xl border-l-4 border-accent italic text-foreground/80 shadow-sm">
              "You’ll learn the fundamentals that lead to lasting results - without needing to obsess over an app."
            </div>

            <div className="pt-4">
              <Button asChild size="xl" className="w-full md:w-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg text-lg h-16 px-8">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  I’m Ready for No More Blueberry Counting
                </a>
              </Button>
            </div>
            
            <div className="md:hidden pt-4 flex justify-center">
               <img 
                src={blueberryImage} 
                alt="Cute blueberries saying No Blueberry Counting" 
                className="w-48"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
