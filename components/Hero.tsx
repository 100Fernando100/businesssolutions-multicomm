export default function Hero() {
    return (
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            {/* Icon & Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                📍
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Nexus Detection & Multi-Jurisdictional Income
                </h1>
                <p className="text-white/90 text-lg">
                  AI automatically detects if a client has income in different provinces (e.g. Ontario vs Quebec) 
                  or states (e.g. Florida vs NY). Includes Cross-border case detection (USA-Canada) and automatic 
                  assignment of 'High Complexity' tags to maximize accountant billing
                </p>
              </div>
            </div>
  
            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-2xl mb-3">👥</div>
                <h3 className="text-white font-semibold mb-2">Multi-Estado/Provincia</h3>
                <p className="text-white/80 text-sm">
                  Detección automática de ingresos en múltiples jurisdicciones (Ontario vs Quebec, Florida vs NY)
                </p>
              </div>
  
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-2xl mb-3">⚠️</div>
                <h3 className="text-white font-semibold mb-2">Transfronterizo</h3>
                <p className="text-white/80 text-sm">
                  Identifica casos USA-Canadá que requieren atención especializada y coordinación fiscal internacional
                </p>
              </div>
  
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-2xl mb-3">💲</div>
                <h3 className="text-white font-semibold mb-2">Alta Complejidad</h3>
                <p className="text-white/80 text-sm">
                  Etiquetas automáticas para casos complejos, maximizando su facturación por servicios especializados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }