import AssignmentHero from "@/components/layout/AssignmentHero";
import Section from "@/components/layout/Section";
import PageWrapper from "@/components/layout/PageWrapper";
import CoreQuadrantTheoryCard from "@/components/ui/CoreQuadrantTheoryCard";
import QuadrantSlider, { QuadrantSlide } from "@/components/ui/QuadrantSlider";
import ReflectionCard from "@/components/ui/ReflectionCard";
import FutureRoadmap from "@/components/ui/FutureRoadmap";
import {
  currentCompetencies,
  currentAttitudes,
  ofmanQuadrant,
  ofmanReflection,
  developmentNeeds,
  futureVisionIntro,
  roadmapSteps,
} from "@/data/selfScan";

export default function SelfScanPage() {
  const slides: QuadrantSlide[] = ofmanQuadrant.map((item) => ({
    title: item.name,
    items: {
      coreQuality: item.coreQuality,
      pitfall: item.pitfall,
      challenge: item.challenge,
      allergy: item.allergy,
    },
  }));
  return (
    <div className="min-h-screen bg-gray-50">
      <AssignmentHero
        title="Self-Scan & Future Vision"
        subtitle="Assignment 1"
        description="A core-based reflection on my current competencies, attributes, and development path."
      />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <PageWrapper>
          <Section>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-lg leading-8 text-gray-600">
                This task evaluated from the foundation of my personal development process. It combines self-scan with using Ofman's core quadrants and defines what my future looks like from now. Core Quadrants are included along with my long-term goals.
              </p>
            </div>
          </Section>

          <Section withSeparator>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Current Competencies & Attitudes</h3>
              <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Current Competencies</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {currentCompetencies.map((competency, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg text-sm font-medium">
                      {competency}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Current Attitudes</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {currentAttitudes.map((attitude, idx) => (
                    <span key={idx} className="px-4 py-2 bg-green-100 text-green-900 rounded-lg text-sm font-medium">
                      {attitude}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section withSeparator>
          <CoreQuadrantTheoryCard />
        </Section>

        <Section withSeparator>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Ofman Quadrant Analysis</h3>
            <p className="text-gray-600">Exploring my core competencies and attitudes</p>
          </div>
          <QuadrantSlider slides={slides} />
        </Section>

        <Section withSeparator>
          <ReflectionCard title="What This Quadrant Reveals About Me">
            {ofmanReflection.trim()}
          </ReflectionCard>
        </Section>

        <Section withSeparator>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Development Needs</h3>
            <p className="text-gray-600">Areas I aim to strengthen</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {developmentNeeds.map((need, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{need.name}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{need.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section withSeparator>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Inner Development Goals</h3>
                <p className="mt-1 text-sm text-[#345cff] font-medium">Theoretical Foundation</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Inner Development Goals (IDGs) are a science-based universal describing 23 capabilities, skills and qualities necessary in achieving the SDGs. They emphasize personal growth, well-being for the environment and beyond for societal transformation.
            </p>
            <p className="text-xs text-gray-500 mb-4">Source: IDG Initiative (2022). Inner Development Goals: Background, method, and the IDG framework. Stockholm: Ekskäret Foundation.</p>
            
            <div className="flex flex-wrap gap-2">
              <div className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-medium">Being – Relationship to Self</div>
              <div className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">Thinking – Cognitive Skills</div>
              <div className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium">Relating – Caring for Others and the World</div>
              <div className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium">Collaborating – Social Skills</div>
              <div className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium">Acting – Enabling Change</div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">My Life in 2030</h3>
            <p className="text-gray-600">{futureVisionIntro.trim()}</p>
          </div>
          <FutureRoadmap steps={roadmapSteps} />
        </Section>
      </PageWrapper>
      </div>
    </div>
  );
}
