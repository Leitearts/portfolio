"use client";
import React from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Linux TTY Solver",
      description:
        "A specialized tool designed to handle pseudo-terminal exploits and TTY manipulation attacks in Linux environments.",
      tools: ["Python", "Linux", "Shell Scripting", "PTY"],
      details:
        "Developed automated detection and mitigation strategies for TTY-based privilege escalation attacks.",
      icon: "fas fa-terminal",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      title: "Malware Detector",
      description:
        "Advanced malware detection system built specifically for Linux environments using behavioral analysis.",
      tools: ["Python", "Machine Learning", "Linux", "YARA"],
      details:
        "Implemented signature-based and heuristic detection methods with real-time monitoring capabilities.",
      icon: "fas fa-virus",
      gradient: "from-red-500 to-orange-600",
    },
    {
      title: "Incident Response Toolkit",
      description:
        "Comprehensive toolkit for rapid incident response and digital forensics investigations.",
      tools: ["Python", "Bash", "Volatility", "Wireshark"],
      details:
        "Created automated workflows for evidence collection, analysis, and reporting in security incidents.",
      icon: "fas fa-search",
      gradient: "from-cyan-400 to-blue-600",
    },
  ];

  const skills = {
    technical: [
      "Ethical Hacking",
      "Digital Forensics",
      "Incident Response",
      "Network Security",
      "Python Programming",
      "Linux Administration",
      "Threat Analysis",
      "Data Protection",
      "Vulnerability Assessment",
      "SOC Operations",
    ],
    certifications: [
      "Mastermind Lead Auditor",
      "Security Analyst Certification",
      "SOC Operator Certification",
      "Computer Security & Forensics (In Progress)",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 font-mono text-green-400">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-green-500/30 z-50 shadow-lg shadow-green-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-green-400 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg mr-2 flex items-center justify-center shadow-lg shadow-green-500/30">
                <i className="fas fa-shield-alt text-black text-sm"></i>
              </div>
              <span className="text-green-400">[</span>KW
              <span className="text-green-400">]</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-200 font-mono ${
                      activeSection === section
                        ? "text-green-400 font-medium border-b-2 border-green-400 pb-1 shadow-sm shadow-green-400/50"
                        : "text-gray-400 hover:text-green-300 hover:border-b-2 hover:border-green-500/50 pb-1"
                    }`}
                  >
                    <span className="text-green-500">&gt;</span>{" "}
                    {section === "skills" ? "Skills & Certs" : section}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors border border-green-500/30"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-green-400 transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-green-400 mt-1 transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-green-400 mt-1 transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-green-500/30 bg-black/95 backdrop-blur-md">
              {["home", "about", "projects", "skills", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-3 px-4 capitalize text-gray-400 hover:text-green-300 hover:bg-gray-800/50 transition-colors rounded-lg mx-2 font-mono"
                  >
                    <span className="text-green-500">&gt;</span>{" "}
                    {section === "skills" ? "Skills & Certs" : section}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Cybersecurity Theme */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
      >
        {/* Matrix-style Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-red-400/10 to-orange-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/5 to-cyan-600/5 rounded-full blur-3xl"></div>

          {/* Binary code background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="text-green-400 text-xs font-mono leading-none select-none">
              {Array.from({ length: 50 }, (_, i) => (
                <div key={i} className="whitespace-nowrap">
                  01001000 01100001 01100011 01101011 01100101 01110010 00100000
                  01010100 01101000 01110010 01100101 01100001 01110100
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-mono mb-6 border border-green-500/30">
                <i className="fas fa-shield-alt mr-2"></i>
                [CYBERSECURITY_SPECIALIST]
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-mono">
                <span className="text-green-400">&gt; SECURITY_ANALYST</span>
                <br />
                <span className="text-cyan-400">&gt; DIGITAL_FORENSICS</span>
                <br />
                <span className="text-red-400">&gt; THREAT_RESPONSE</span>
              </h1>
              <div className="mt-8 space-y-4 text-lg text-gray-300 font-mono">
                <p>
                  <span className="text-green-400">$</span> whoami
                  <br />
                  <span className="text-cyan-400 ml-4">Kelvin_Wanyama</span> -
                  Cybersecurity specialist focused on incident response and
                  digital forensics.
                </p>
                <p>
                  <span className="text-green-400">$</span> cat mission.txt
                  <br />
                  <span className="ml-4">
                    Currently studying Computer Security and Forensics while
                    building tools that help organizations understand how their
                    systems fail—and more importantly, how to fix them.
                  </span>
                </p>
                <p className="font-medium text-green-300">
                  <span className="text-red-400">[PHILOSOPHY]</span> The best
                  defense comes from understanding the offense, one incident at
                  a time.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-black font-mono font-bold rounded-lg hover:from-green-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:-translate-y-0.5 border border-green-400/50"
                >
                  <i className="fas fa-code mr-2"></i>
                  ./view_projects.sh
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border-2 border-green-500 text-green-400 font-mono font-bold rounded-lg hover:bg-green-500/10 hover:border-green-400 transition-all duration-200 shadow-sm hover:shadow-green-500/30"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  ./contact.sh
                </button>
              </div>
            </div>

            {/* Enhanced Cybersecurity Visual Element */}
            <div className="lg:flex justify-center hidden">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/20 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-green-500/30">
                  <div className="text-center text-green-400">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-green-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-green-500/50">
                        <i className="fas fa-shield-alt text-green-400 text-3xl"></i>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-black text-xs"></i>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-mono">
                      [SECURING_SYSTEMS]
                    </h3>
                    <p className="text-green-300 font-mono">
                      One_Incident_At_A_Time
                    </p>
                    <div className="mt-6 flex justify-center space-x-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div
                        className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-red-400 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Floating Threat Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 border border-red-400/50">
                  <i className="fas fa-bug text-white text-xl"></i>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30 border border-green-400/50">
                  <i className="fas fa-lock text-black text-xl"></i>
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30 border border-yellow-400/50">
                  <i className="fas fa-eye text-black text-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Cybersecurity Theme */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-black to-gray-900 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono">
              [ABOUT_ME]
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-8 shadow-xl border border-green-500/30 backdrop-blur-sm">
            <div className="prose prose-lg max-w-none text-gray-300 space-y-6 font-mono">
              <p className="text-xl leading-relaxed">
                <span className="text-green-400">$</span> cat origin_story.txt
                <br />
                My path into cybersecurity started with a simple question:{" "}
                <span className="font-semibold text-cyan-400">
                  "How do things break?"
                </span>{" "}
                Currently pursuing Computer Security and Forensics, I've
                discovered that the most interesting problems live at the
                intersection of human behavior and system vulnerabilities.
              </p>
              <p className="leading-relaxed">
                <span className="text-green-400">$</span> cat mission.txt
                <br />
                My goal is straightforward: become a sharp, reliable Incident
                Responder who can walk into chaos and methodically piece
                together what happened, why it happened, and how to prevent it
                from happening again. I'm drawn to the detective work—the
                digital breadcrumbs that tell a story, the patterns that reveal
                intent.
              </p>
              <p className="leading-relaxed">
                <span className="text-green-400">$</span> cat skills.txt
                <br />
                What sets me apart is the combination of technical depth,
                leadership experience, and creative thinking. I approach
                security challenges like puzzles that need both analytical rigor
                and creative problem-solving. Whether I'm building detection
                tools or analyzing attack vectors, I bring curiosity and
                methodical thinking to every investigation.
              </p>
              <p className="leading-relaxed">
                <span className="text-green-400">$</span> cat personal.txt
                <br />
                Outside of cybersecurity, you'll find me on the rugby pitch or
                writing poetry. Both teach patience, strategy, and the
                importance of seeing patterns others might miss—skills that
                translate surprisingly well to incident response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section with Cybersecurity Theme */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono">
              [FEATURED_PROJECTS]
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              <span className="text-green-400">$</span> ls -la /projects/
              <br />
              Tools and systems I've built to understand, detect, and respond to
              security threats
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-green-500/30 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm hover:border-green-400/50"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-green-500/30`}
                >
                  <i className={`${project.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 group-hover:text-cyan-400 transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed font-mono text-sm">
                  {project.description}
                </p>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed font-mono">
                  <span className="text-green-400">&gt;</span> {project.details}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-300 text-sm rounded-lg font-mono font-medium hover:from-green-500/30 hover:to-cyan-500/30 transition-colors border border-green-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section with Cybersecurity Theme */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono">
              [SKILLS_&_CERTIFICATIONS]
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-xl border border-green-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center font-mono">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-cyan-600 rounded-lg mr-3 flex items-center justify-center border border-green-400/50">
                  <i className="fas fa-code text-black text-sm"></i>
                </div>
                [TECHNICAL_SKILLS]
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.technical.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-700/50 transition-colors font-mono"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-xl border border-green-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center font-mono">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mr-3 flex items-center justify-center border border-cyan-400/50">
                  <i className="fas fa-certificate text-black text-sm"></i>
                </div>
                [CERTIFICATIONS]
              </h3>
              <div className="space-y-6">
                {skills.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg border border-green-400/50">
                      <i className="fas fa-award text-black text-lg"></i>
                    </div>
                    <span className="text-gray-300 font-medium font-mono">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section with Cybersecurity Theme */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-green-400 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-mono">
              [ESTABLISH_CONNECTION]
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-mono">
                <span className="text-green-400">$</span> cat contact_info.txt
                <br />
                Interested in discussing cybersecurity, incident response, or
                potential collaborations? I'm always open to connecting with
                fellow security professionals and organizations serious about
                building robust defenses.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-colors border border-green-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl flex items-center justify-center border border-green-400/50">
                    <i className="fas fa-envelope text-black"></i>
                  </div>
                  <div>
                    <p className="font-medium text-green-400 font-mono">
                      [EMAIL]
                    </p>
                    <a
                      href="mailto:kelvin.wanyama@example.com"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors font-mono"
                    >
                      kelvinwanyama25@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-colors border border-green-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center border border-blue-400/50">
                    <i className="fab fa-linkedin text-white"></i>
                  </div>
                  <div>
                    <p className="font-medium text-green-400 font-mono">
                      [LINKEDIN]
                    </p>
                    <a
                      href="https://linkedin.com/in/kelvinwanyama"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors font-mono"
                    >
                      linkedin.com/in/kelvin-wanyama
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-colors border border-green-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center border border-gray-500/50">
                    <i className="fab fa-github text-white"></i>
                  </div>
                  <div>
                    <p className="font-medium text-green-400 font-mono">
                      [GITHUB]
                    </p>
                    <a
                      href="https://github.com/Leitearts"
                      className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-800 border border-transparent hover:border-green-500/30"
                    >
                       github.com/Leitearts
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-6 font-mono">
                [SEND_MESSAGE]
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    &gt; Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-green-500/30 rounded-xl text-green-400 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm font-mono"
                    placeholder="your_name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    &gt; Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-green-500/30 rounded-xl text-green-400 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm font-mono"
                    placeholder="your.email@domain.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    &gt; Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-green-500/30 rounded-xl text-green-400 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm resize-none font-mono"
                    placeholder="your_message_here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-black font-mono font-bold rounded-xl hover:from-green-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:-translate-y-0.5 border border-green-400/50"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  ./send_message.sh
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Cybersecurity Theme */}
      <footer className="bg-black border-t border-green-500/30 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg mr-3 flex items-center justify-center border border-green-400/50">
                <i className="fas fa-shield-alt text-black text-sm"></i>
              </div>
              <p className="text-gray-400 font-mono">
                <span className="text-green-400">[</span>© 2025 Kelvin_Wanyama
                <span className="text-green-400">]</span> - Building secure
                systems, one incident at a time.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="mailto:kelvinwanyama25@gmail.com"
                className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-800 border border-transparent hover:border-green-500/30"
              >
                <i className="fas fa-envelope text-lg"></i>
              </a>
              <a
                href="https://linkedin.com/in/kelvin-wanyama"
                className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-800 border border-transparent hover:border-green-500/30"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a
                href="https://github.com/Leitearts"
                className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-800 border border-transparent hover:border-green-500/30"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;