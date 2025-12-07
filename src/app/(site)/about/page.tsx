"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/components/about/Hero";
import IDGOverview from "@/components/about/IDGOverview";
import IDGSection from "@/components/about/IDGSection";
import Integration from "@/components/about/Integration";
import { idgDimensions } from "@/data/idg";

const narratives = {
  being: {
    title: "Being",
    body: "Being relates to relationship to self. It has a few skills that relate to this category: our inner compass, integrity and authenticity, openness and learning mindset, self-awareness, and presence.\n\nWhen it is regarding my inner compass it relates to who I am. I am someone that is born in Bangkok, Thailand and was adopted at the age of 2. I did not always have the easiest upbringing. This brought me a lot of trust issues because of a sort of anxiety of not being good enough. This formed my self-compass. I have been able to outgrow this eventually and I always grew to love sports — football, and later kickboxing.\n\nThere was always a voice talking in my head that I had to really achieve a lot of things and dream really big. As I matured I realized it was just a voice and that it is okay to enjoy life. During my last internship in Barcelona I experienced almost the opposite of enjoying life and not worrying about anything. This brought me eventually back to this internship in discovering what I really want. This process is shown in the difference between the Personal Development Plan and my growth now. I do have more clear ambitions today.\n\nIntegrity and authenticity were always vague words. I knew being integral was maybe connected to the 10 commandments or the 7 sins. But being authentic — what is it really? As a young adult, being who you truly are is not always the easiest thing, and I am still discovering this. But I can admit that being authentic is rather showing yourself, being brave enough to show yourself, rather than being perfect. In my blog I noted that in the first week I struggled with my position as an intern, which led to the realization that I struggled with being authentic.\n\nOpenness and a learning mindset sound like simple concepts, but I struggle a lot with openness and being honest at times — not because I am scared of the truth, but because of the reactions to the truth. I am trying to improve this even if my instinct says not to, to avoid difficult reactions. A learning mindset is something I always believed I had. I learn relatively fast; however, I have also never truly had to learn until the deadlines of the practice thesis and this portfolio. I discovered that learning genuinely interests me and is part of my identity.\n\nSelf-awareness is rooted in me as a person. I often knew what to develop in myself, but I admit that in the past year I might not have been as conscious of it as I was focused more on enjoying life. Now I am finding balance again after the conversation mentioned in the Critical Incidents.\n\nPresence is about how you present yourself to the world. As a strong presenter, I did not think about this much in the past. But this internship has exposed me to my weaknesses — not because of feedback on presenting, but because of realizing I needed to actively work on my own learning path. Now I am stepping away from presentation fear — which I never had — and focusing on being concise with wording and communicating messages clearly. This is the next step.",
    link: "/assignments/critical-incidents",
    linkText: "Explore Critical Incidents →"
  },
  thinking: {
    title: "Thinking",
    body: "This was always an underutilized skill for me. I have a level of intelligence that is average, but I never really thought about my thinking process. However, when I had to do research for the thesis and the sustainability scan it made me more conscious of my thinking processes.\n\nCritical thinking is one of the most important skills in my opinion with the rise of AI. Since I have been very involved with the rise of AI and follow a lot about it, I am realizing the importance of it. Conducting research and challenging myself to see limitations has really improved my critical-thinking skills. It is a skill set I want to continue developing.\n\nComplexity awareness is becoming more important. As I realized through research and business situations, complexity is rising everywhere. I used to always think in the most practical solution, but I have realized that really thinking about variables, interdependencies, and bilateral relationships can make a concept much clearer.\n\nThis relates to perspective skills — being able to view a problem from multiple perspectives. My mistake in the first sustainability scan submission was thinking only from the company's perspective. Going into academic journals helped me see more perspectives.\n\nHowever, when researching and applying insights, I still sometimes notice difficulty thinking in causal connections, which are important for sense-making. I realize that discussing and challenging myself is essential.\n\nLong-term orientation is something I used to misunderstand. It relates not only to business, but also politics, economics, and strategy. Learning about contingency theory helped me understand the deeper importance of long-term thinking.",
    link: "/assignments/midterm-pdp",
    linkText: "View Midterm Evaluation →"
  },
  relating: {
    title: "Relating",
    body: "As social beings, it is important to relate to others. Showing appreciation was always something I expressed in my direct environment. When my dad had an accident it made me realize how easily we take good times for granted — and how quickly things can change.\n\nFeeling connected to others was something I experienced strongly in my last internship where I had a very active social life. It brought me happiness, but I also learned the importance of balance. I can now see that human connection is one of the reasons for being.\n\nHumility is important because everyone is a student of life. I admit having an ego, and that caused me to limit my own growth. I realized this when I received critique at my internship related to certain aspects of my performance.\n\nEmpathy and compassion are things I naturally have. I care deeply about people, and being cold toward others feels wrong to me. However, this can sometimes result in giving others more than I can handle.",
    link: "/logbook/week/5",
    linkText: "Read Week 5 Logbook →"
  },
  collaborating: {
    title: "Collaborating",
    body: "Collaborating turns being with people into working with people — which is how the world is built.\n\nI notice that I have difficulty at times with communication, because it comes with a lot of expectations that I did not set clearly with my co-mentor, as described in the Critical Incidents. It made an impact on me and highlighted the importance of communicating what you think and what you need.\n\nCo-creation is essential — the new generation cannot do everything alone. Although it was not often used in my internship, I recognize that in my nature it is something I need to work on, as I tend to work alone and then bring things together.\n\nMy internship in Spain made me conscious of intercultural competences, meaning that Dutch directness does not always work. Sometimes indirectness and consideration for others' feelings is more important. Returning to the Dutch mindset again was an adjustment.\n\nTrust is important when collaborating. I find this difficult at times, but I am getting better. I am learning to move from \"do everything alone\" to working together where everyone contributes.\n\nMobilizing skills, in my perspective, are about nuance and compromise — vital when working together because disagreements will happen, but how you leave the conversation matters.",
    link: "/assignments/critical-incidents",
    linkText: "Explore Critical Incidents →"
  },
  acting: {
    title: "Acting",
    body: "All previously named competences should lead to Acting. This takes courage, creativity, perseverance, and optimism.\n\nTo me they are all interrelated. I am someone who can dedicate himself even when deadlines are tight — I persevere and find a way. Courage, I learned, is sometimes simply asking for help, which became a major lesson for me.\n\nDiscussing topics together boosts creativity. I used to think creativity was something you were born with, but it turns out differently.\n\nFinally, optimism — I relate to positivity and prefer to look for the positive side of things.",
    link: "/assignments/self-scan",
    linkText: "View Self-Scan →"
  }
};

const integrationQuote =
  "IDG helped me connect the dots: inner clarity fuels relational depth, which fuels collaboration, which gives courage a place to land.";

const integrationDescription =
  "The five dimensions stopped being a checklist and became a system. Being keeps me aligned, Thinking helps me frame, Relating earns trust, Collaborating moves groups, Acting turns momentum into outcomes.";

const constellationSkills = idgDimensions.flatMap((dimension) =>
  dimension.skills.map((skill) => ({ skill, dimension }))
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <ParallaxProvider>
        <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 space-y-24 md:space-y-32">
          <Hero />
          <IDGOverview dimensions={idgDimensions} />
          {idgDimensions.map((dimension, idx) => (
            <IDGSection key={dimension.key} dimension={dimension} narrative={narratives[dimension.key]} index={idx} />
          ))}
          <Integration
            quote={integrationQuote}
            description={integrationDescription}
            constellationSkills={constellationSkills}
          />
        </main>
      </ParallaxProvider>
    </div>
  );
}
