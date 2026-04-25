import React, { useState } from 'react';

export default function App() {
  const [toggles, setToggles] = useState({
    screen: true,
    audio: true,
    clipboard: false
  });

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"></div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between pt-6 pb-4 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="tracking-tighter font-medium text-lg text-white">DARWIS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">How it works</a>
          <a href="#features" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Features</a>
          <a href="#privacy" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Privacy</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex items-center justify-center text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200">
            Log in
          </button>
          <button className="inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-1.5 text-sm font-medium hover:bg-neutral-200 transition-colors duration-200">
            Get for macOS
          </button>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-xs font-medium text-neutral-300 mb-8">
            <iconify-icon icon="solar:apple-linear" width="14" height="14"></iconify-icon>
            <span>macOS Public Beta</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
            Stop explaining context to AI.<br className="hidden sm:block" /> Let it capture the moment.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-normal">
            Ask about what you see, hear, and need to understand — without manually copying text, taking screenshots, or rewinding audio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors duration-200 gap-2">
              <iconify-icon icon="solar:download-linear" width="18" height="18"></iconify-icon>
              Download for Mac
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-transparent border border-neutral-800 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-900 transition-colors duration-200 gap-2">
              View Demo <iconify-icon icon="solar:play-circle-linear" width="18" height="18" className="text-neutral-400"></iconify-icon>
            </button>
          </div>

          <p className="mt-4 text-xs text-neutral-500">Requires macOS 13.0 or later. Apple Silicon optimized.</p>

          {/* Hero Product Visual Mockup */}
          <div className="mt-20 relative max-w-3xl mx-auto text-left">
            {/* Background glow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-neutral-800 to-transparent opacity-30 blur-2xl rounded-3xl"></div>
            
            {/* Main App Window */}
            <div className="relative glass rounded-2xl shadow-2xl flex flex-col overflow-hidden">
              {/* Fake Top Bar */}
              <div className="h-10 border-b border-white/5 flex items-center px-4 bg-white/[0.01]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                </div>
                <div className="mx-auto flex items-center gap-3 text-xs text-neutral-500 font-medium">
                  <span className="flex items-center gap-1.5"><iconify-icon icon="solar:monitor-linear"></iconify-icon> Screen Active</span>
                  <span className="flex items-center gap-1.5"><iconify-icon icon="solar:record-circle-linear"></iconify-icon> Last 30s Audio</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {/* User Query */}
                <div className="flex gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                    <iconify-icon icon="solar:user-linear" className="text-neutral-400"></iconify-icon>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-neutral-200 mt-1.5">"What did the speaker just say about the numbers in this dashboard?"</p>
                  </div>
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center relative animate-pulse-ring">
                    <iconify-icon icon="solar:mic-linear" className="text-white" width="16"></iconify-icon>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 text-black font-medium tracking-tighter text-xs">
                    D
                  </div>
                  <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-xl p-4">
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Based on the audio just captured, the speaker noted that the <span className="text-white font-medium">Q3 churn rate (visible in the top right chart)</span> is an anomaly due to legacy account migrations, not a trend. They mentioned ignoring the 12% spike for forecasting purposes.
                    </p>
                    {/* Action bar */}
                    <div className="mt-4 flex items-center gap-3 pt-3 border-t border-white/5">
                      <button className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors">
                        <iconify-icon icon="solar:copy-linear"></iconify-icon> Copy
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors">
                        <iconify-icon icon="solar:refresh-linear"></iconify-icon> Retry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="how-it-works" className="py-24 relative border-t border-white/5 bg-neutral-950/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">In the moment. Without the friction.</h2>
              <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">DARWIS operates entirely in the background until you need it. No switching apps, no copy-pasting required.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-neutral-600 transition-colors duration-300">
                  <iconify-icon icon="solar:keyboard-linear" width="28" className="text-white"></iconify-icon>
                </div>
                <h3 className="text-base font-medium text-white mb-2">1. Press shortcut</h3>
                <p className="text-sm text-neutral-500 max-w-xs">Hit <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-xs text-neutral-300 font-sans">⌘</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-xs text-neutral-300 font-sans">Space</kbd> (or your custom key) to invoke the overlay instantly over any app.</p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-neutral-600 transition-colors duration-300">
                  <iconify-icon icon="solar:mic-linear" width="28" className="text-white"></iconify-icon>
                </div>
                <h3 className="text-base font-medium text-white mb-2">2. Ask your question</h3>
                <p className="text-sm text-neutral-500 max-w-xs">Speak naturally. Ask what a document means, what someone just said in a meeting, or to explain a snippet of code.</p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-neutral-600 transition-colors duration-300">
                  <iconify-icon icon="solar:lightbulb-bolt-linear" width="28" className="text-white"></iconify-icon>
                </div>
                <h3 className="text-base font-medium text-white mb-2">3. Get contextual answers</h3>
                <p className="text-sm text-neutral-500 max-w-xs">DARWIS analyzes your current screen and recent audio to provide a concise, actionable answer right where you are.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases / Bento Grid */}
        <section id="features" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-12">Designed for complex information flows.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(200px,auto)]">
            
            {/* Card 1: Visual Context */}
            <div className="md:col-span-4 bg-neutral-900/40 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row gap-8 overflow-hidden relative group hover:bg-neutral-900/60 transition-colors">
              <div className="flex-1 z-10">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-4 border border-white/5">
                  <iconify-icon icon="solar:eye-scan-linear" className="text-neutral-300" width="20"></iconify-icon>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">See what you see</h3>
                <p className="text-sm text-neutral-400">Point it at dashboards, technical specs, codebases, or complex UI. DARWIS understands the visual context instantly, without you needing to explain the layout.</p>
              </div>
              {/* Abstract visual for screen scan */}
              <div className="flex-1 relative flex items-center justify-center min-h-[150px]">
                <div className="w-full h-32 rounded-lg border border-neutral-700 bg-neutral-950 p-2 relative">
                  <div className="w-3/4 h-2 bg-neutral-800 rounded mb-2"></div>
                  <div className="w-1/2 h-2 bg-neutral-800 rounded mb-4"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-neutral-800 rounded border border-neutral-700"></div>
                    <div className="h-12 bg-neutral-800 rounded border border-neutral-700 relative overflow-hidden">
                      {/* Scanning line */}
                      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-[pulse_2s_ease-in-out_infinite] transform -translate-y-full group-hover:translate-y-full transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Audio Context */}
            <div className="md:col-span-2 bg-neutral-900/40 border border-white/5 rounded-3xl p-8 overflow-hidden relative hover:bg-neutral-900/60 transition-colors">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-4 border border-white/5">
                <iconify-icon icon="solar:volume-loud-linear" className="text-neutral-300" width="20"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Hear what you hear</h3>
              <p className="text-sm text-neutral-400 mb-6">Missed a detail in a zoom call or lecture video? Ask about what was just spoken.</p>
              {/* Fake Audio Waveform */}
              <div className="flex items-end gap-1 h-12 opacity-50">
                <div className="w-full bg-neutral-600 rounded-t-sm h-[20%]"></div>
                <div className="w-full bg-neutral-600 rounded-t-sm h-[40%]"></div>
                <div className="w-full bg-neutral-600 rounded-t-sm h-[80%]"></div>
                <div className="w-full bg-neutral-500 rounded-t-sm h-[100%]"></div>
                <div className="w-full bg-neutral-500 rounded-t-sm h-[60%]"></div>
                <div className="w-full bg-neutral-600 rounded-t-sm h-[30%]"></div>
                <div className="w-full bg-neutral-600 rounded-t-sm h-[50%]"></div>
              </div>
            </div>

            {/* Card 3: Multimodal Routing */}
            <div className="md:col-span-3 bg-neutral-900/40 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/60 transition-colors">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-4 border border-white/5">
                <iconify-icon icon="solar:layers-linear" className="text-neutral-300" width="20"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Combined Intelligence</h3>
              <p className="text-sm text-neutral-400">DARWIS seamlessly links what's on your screen with the audio you just heard. Perfect for following along with tutorials or reviewing presentations where visual and spoken context matter equally.</p>
            </div>

            {/* Card 4: Unobtrusive */}
            <div className="md:col-span-3 bg-neutral-900/40 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/60 transition-colors">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-4 border border-white/5">
                <iconify-icon icon="solar:minimize-square-3-linear" className="text-neutral-300" width="20"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Lightweight Overlay</h3>
              <p className="text-sm text-neutral-400">Not another window to manage. Answers appear in a minimalist, floating panel that gets out of your way as soon as you find what you need. Copy the result, or simply dismiss it.</p>
            </div>

          </div>
        </section>

        {/* Privacy Section */}
        <section id="privacy" className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
                <iconify-icon icon="solar:shield-check-linear" width="24" className="text-white"></iconify-icon>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Context built on explicit permission.</h2>
              <p className="text-sm text-neutral-400 mb-6">
                DARWIS is an interrupt tool, not a surveillance agent. It only captures context when you explicitly ask a question. Data is short-lived, and you control exactly what streams are available to the AI.
              </p>
              <a href="#" className="text-sm text-white font-medium hover:underline inline-flex items-center gap-1">
                Read our privacy commitment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>

            {/* Custom Privacy Settings Mockup */}
            <div className="flex-1 w-full bg-neutral-900/50 border border-white/5 rounded-2xl p-6 glass">
              <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4">Context Sources</h4>
              
              <div className="space-y-4">
                {/* Custom Toggle Item 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:monitor-linear" className="text-neutral-400"></iconify-icon>
                    <span className="text-sm text-neutral-200">Screen Capture</span>
                  </div>
                  <div 
                    onClick={() => handleToggle('screen')}
                    className={`w-9 h-5 rounded-full relative cursor-pointer flex items-center p-0.5 transition-colors duration-200 ${toggles.screen ? 'bg-white' : 'bg-neutral-700'}`}
                  >
                    <div className={`w-4 h-4 rounded-full shadow-sm transform transition-transform duration-200 ${toggles.screen ? 'bg-black translate-x-4' : 'bg-white translate-x-0'}`}></div>
                  </div>
                </div>

                {/* Custom Toggle Item 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:record-circle-linear" className="text-neutral-400"></iconify-icon>
                    <div className="flex flex-col text-left">
                      <span className="text-sm text-neutral-200">Recent Audio</span>
                      <span className="text-xs text-neutral-500">Rolling 60s buffer</span>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleToggle('audio')}
                    className={`w-9 h-5 rounded-full relative cursor-pointer flex items-center p-0.5 transition-colors duration-200 ${toggles.audio ? 'bg-white' : 'bg-neutral-700'}`}
                  >
                    <div className={`w-4 h-4 rounded-full shadow-sm transform transition-transform duration-200 ${toggles.audio ? 'bg-black translate-x-4' : 'bg-white translate-x-0'}`}></div>
                  </div>
                </div>

                {/* Custom Toggle Item 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:clipboard-text-linear" className="text-neutral-400"></iconify-icon>
                    <span className="text-sm text-neutral-200">Clipboard Contents</span>
                  </div>
                  <div 
                    onClick={() => handleToggle('clipboard')}
                    className={`w-9 h-5 rounded-full relative cursor-pointer flex items-center p-0.5 transition-colors duration-200 ${toggles.clipboard ? 'bg-white' : 'bg-neutral-700'}`}
                  >
                    <div className={`w-4 h-4 rounded-full shadow-sm transform transition-transform duration-200 ${toggles.clipboard ? 'bg-black translate-x-4' : 'bg-white translate-x-0'}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Clarify your context instantly.</h2>
          <p className="text-base text-neutral-400 mb-10">Join professionals using DARWIS to stay in the flow.</p>
          <button className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-4 text-sm font-medium hover:bg-neutral-200 transition-colors duration-200 gap-2">
            Download DARWIS for macOS
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-auto bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="tracking-tighter font-medium text-lg text-white">DARWIS</span>
            <p className="text-xs text-neutral-500">The macOS multimodal interrupt assistant.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}