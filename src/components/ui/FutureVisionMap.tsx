interface FutureVisionMapProps {
  data: {
    workplace: string;
    knowledge: string;
    collaborationAndNetwork: string;
    valuesAndMotivation: string;
    languagesAndCulture: string;
    strengths: string;
    challenges: string;
  };
}

export default function FutureVisionMap({ data }: FutureVisionMapProps) {
  const items = [
    { 
      title: "Professional Workplace", 
      text: data.workplace.trim(),
      icon: "💼",
      color: "from-blue-100 to-blue-50"
    },
    { 
      title: "Advanced Knowledge", 
      text: data.knowledge.trim(),
      icon: "💡",
      color: "from-cyan-100 to-cyan-50"
    },
    { 
      title: "Network & Collaboration", 
      text: data.collaborationAndNetwork.trim(),
      icon: "👥",
      color: "from-purple-100 to-purple-50"
    },
    { 
      title: "Values & Motivation", 
      text: data.valuesAndMotivation.trim(),
      icon: "❤️",
      color: "from-pink-100 to-pink-50"
    },
    { 
      title: "Languages & Culture", 
      text: data.languagesAndCulture.trim(),
      icon: "🌍",
      color: "from-green-100 to-green-50"
    },
    { 
      title: "Core Strengths", 
      text: data.strengths.trim(),
      icon: "📊",
      color: "from-orange-100 to-orange-50"
    },
    { 
      title: "Growth Areas", 
      text: data.challenges.trim(),
      icon: "🎯",
      color: "from-yellow-100 to-yellow-50"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Central Vision */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 mb-4">
          <div className="text-center">
            <div className="text-4xl mb-1">🎓</div>
            <div className="text-2xl font-bold text-gray-900">2030</div>
            <div className="text-xs text-gray-600">My Future Self</div>
          </div>
        </div>
      </div>

      {/* Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
