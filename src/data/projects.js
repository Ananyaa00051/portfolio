export const projects = [
  {
    id: 10,
    title: "MAPLE — AI-Powered FIFA Analytics & Scouting Assistant",
    description: "Natural language FIFA player analytics — ask 'top young midfielders under 23' and get structured insights, radar charts, and KNN-based scouting reports powered by LLaMA 3.3 + Pandas.",
    tech: ["GenAI", "Streamlit", "Pandas", "Python", "Plotly", "scikit-learn", "Groq", "LLMs"],
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200",
    link: "https://github.com/Ananyaa00051/Maple---FIFA-analysis-assistant"
  },
  {
    id: 12,
    title: "DocsGPT – Multi-Document RAG Pipeline",
    description: "Semantic Q&A across large document collections using FAISS/Qdrant vector search, multi-query expansion, BGE reranking, and LangGraph routing for citation-backed answers.",
    tech: ["RAG", "LangGraph", "Groq", "Python", "LangChain", "FAISS", "Qdrant", "HuggingFace Embeddings"],
    image: "/docsgpt_dashboard.png",
    link: "https://github.com/Ananyaa00051/Docsgpt-multi-document-RAG-pipeline"
  },
  {
    id: 11,
    title: "CodePilot AI – Autonomous Coding Agent",
    description: "Autonomous AI agent using Gemini's function-calling in a ReAct loop — reads files, runs scripts, captures tracebacks, writes fixes, and re-verifies without human intervention.",
    tech: ["Agentic AI", "Gemini API", "Python", "ReAct Architecture", "Function Calling", "subprocess", "pytest"],
    image: "/codepilot_ai_dashboard.png",
    link: "https://github.com/Ananyaa00051/-CLI-coding-agent"
  },
  {
    id: 13,
    title: "YouTube AI Summarizer",
    description: "Extracts YouTube transcripts and generates executive summaries, key takeaways, and action items using LangChain's Map-Reduce workflow with Gemini 2.5 Flash.",
    tech: ["LangChain", "Gemini API", "FastAPI", "React", "Python", "NLP", "Prompt Engineering"],
    image: "/youtube_summarizer_dashboard.png",
    link: "https://github.com/Ananyaa00051/summoraAI"
  },
  {
    id: 1,
    title: "Smart Research Assistant",
    description: "GenAI assistant that processes 100+ PDFs for text extraction, summarization, and querying — reducing manual review time by 75% using LLM-based workflows.",
    tech: ["LLMs", "NLP", "Python", "Data Processing", "GenAI"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200",
    link: "https://github.com/Ananyaa00051/Smart-Research-Assistant---Genai"
  },
  {
    id: 2,
    title: "Breast Cancer Detection",
    description: "Clinical ML classification model with full preprocessing pipeline achieving 96.5% accuracy and 97% sensitivity to aid early detection.",
    tech: ["Machine Learning", "Scikit-learn", "Pandas", "Python"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    link: "https://github.com/Ananyaa00051/Breast-Cancer-Detection"
  },
  {
    id: 3,
    title: "Hate Speech Detection",
    description: "NLP + deep learning models classifying harmful content across 25,000+ tweets, improving F1-score from 0.78 to 0.89 through optimized preprocessing and tuning.",
    tech: ["Deep Learning", "NLP", "TensorFlow", "Python", "Keras"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    link: "https://github.com/Ananyaa00051/Hate-speech-prediction"
  },
  {
    id: 4,
    title: "Pneumonia Detection",
    description: "CNN with explainable outputs for Chest X-Ray classification, achieving ~92% accuracy with transfer learning on medical imaging data.",
    tech: ["CNN", "TensorFlow", "Deep Learning", "Python"],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
    link: "https://github.com/Ananyaa00051/Pneumonia-Detection-from-Chest-X-Ray-Images-using-Transfer-Learning"
  },
  {
    id: 5,
    title: "Virtual Whiteboard",
    description: "Touchless gesture-based drawing system using Computer Vision and OpenCV, delivering real-time interactions at 30+ FPS with no physical input device.",
    tech: ["Computer Vision", "OpenCV", "Python"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 9,
    title: "Mosaic – Speculative Product Case Study",
    description: "React-based case study for a mindful internet platform — blending product thinking, interaction design, and storytelling from vision to live frontend.",
    tech: ["Product Design", "React", "Framer Motion", "Speculative Design", "Frontend Engineering"],
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200",
    link: "https://mosaic-delta-vert.vercel.app/"
  },
  {
    id: 6,
    title: "Project Astitva – Enactus Magazine",
    description: "Impact magazine layout for social initiative storytelling — raw content transformed into visual narratives with clear identity and information hierarchy.",
    tech: ["Graphic Design", "Figma", "Visual Storytelling", "Canva"],
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=1200",
    link: "https://www.behance.net/gallery/223238497/Project-Astitva-For-Enactus"
  },
  {
    id: 7,
    title: "HIREFLO Product Redesign Case Study",
    description: "Redesigned HIREFLO's UX by identifying workflow gaps, improving navigation, and optimizing recruiter journeys through research and strategic feature recommendations.",
    tech: ["UX Research", "Product Design", "User Experience", "Product Analysis"],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200",
    link: "https://silly-jackfruit-d3c.notion.site/HIREFLO-PRODUCT-REDESIGN-CASE-STUDY-6ae4db4ce8698309be34010a710cf544?source=copy_link"
  },
  {
    id: 8,
    title: "boAt Unplugged – Product Teardown",
    description: "Deep analysis of boAt's ecosystem, brand strategy, and market positioning to surface growth opportunities and strategic product recommendations.",
    tech: ["Product Management", "Market Analysis", "Brand Strategy", "UX Research"],
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=1200",
    link: "https://silly-jackfruit-d3c.notion.site/boAt-Unplugged-A-Product-Teardown-3584db4ce86980879efef4b8516b6317"
  }
];
