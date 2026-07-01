export const projects = [
  {
    id: 10,
    title: "MAPLE — AI-Powered FIFA Analytics & Scouting Assistant",
    description: "An AI-assisted football analytics platform enabling natural language querying of FIFA player data. Ask questions like 'Show me top young midfielders under 23' or 'Generate a scouting report for Mbappé' and receive structured analytics, interactive visualizations, and AI-generated insights. Built with a hybrid LLM + local Pandas architecture to minimize hallucinations, featuring KNN-based player similarity, radar chart comparisons, and Groq-hosted LLaMA 3.3 for intent classification.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly", "scikit-learn", "LLMs", "Groq", "GenAI"],
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200", // Football analytics
    link: "https://github.com/Ananyaa00051/Maple---FIFA-analysis-assistant"
  },
  {
    id: 12,
    title: "DocsGPT – Multi-Document RAG Pipeline",
    description: "A Multi-Document RAG pipeline enabling semantic search and Q&A across large document collections. Ingests PDFs, TXT, and DOCX files into a FAISS/Qdrant vector database, then applies multi-query expansion, BGE reranking, and LangGraph-orchestrated query routing to deliver citation-backed answers, cross-document analysis, and conversation memory.",
    tech: ["Python", "Streamlit", "LangChain", "LangGraph", "Groq", "FAISS", "Qdrant", "HuggingFace Embeddings"],
    image: "/docsgpt_dashboard.png",
    link: "https://github.com/Ananyaa00051/Docsgpt-multi-document-RAG-pipeline"
  },
  {
    id: 11,
    title: "CodePilot AI – Autonomous Coding Agent",
    description: "An autonomous AI coding agent built in pure Python that uses Gemini API's native function-calling to plan, execute, and self-debug code without human intervention. Implements a ReAct (Reason + Act) agentic loop — reading files, running scripts, capturing tracebacks, writing fixes, and re-verifying — with sandboxed execution, path-traversal protection, a static code scanner, and full JSON run reports.",
    tech: ["Python", "Gemini API", "Function Calling", "Agentic AI", "ReAct Architecture", "subprocess", "pytest"],
    image: "/codepilot_ai_dashboard.png",
    link: "https://github.com/Ananyaa00051/-CLI-coding-agent"
  },
  {
    id: 10,
    title: "YouTube AI Summarizer",
    description: "Full-stack AI application that extracts YouTube video transcripts, processes long-form content using LangChain's chunking pipeline, and generates structured summaries with Gemini 2.5 Flash. Converts videos into executive summaries, key takeaways, action items, important quotes, and detailed notes through a scalable Map-Reduce summarization workflow.",
    tech: ["FastAPI", "React", "LangChain", "Gemini API", "Python", "LLM Applications", "NLP", "Prompt Engineering"],
    image: "/youtube_summarizer_dashboard.png",
    link: "https://github.com/Ananyaa00051/summoraAI"
  },
  {
    id: 1,
    title: "Smart Research Assistant",
    description: "A GenAI-based assistant capable of processing 100+ PDFs for rapid text extraction, summarization, and querying. Reduced manual review time by 75% using LLM-based workflows.",
    tech: ["Python", "NLP", "LLMs", "Data Processing", "GenAI"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200",
    link: "https://github.com/Ananyaa00051/Smart-Research-Assistant---Genai"
  },
  {
    id: 2,
    title: "Breast Cancer Detection",
    description: "Developed a clinical machine learning classification model to aid in early detection. Built a complete pipeline encompassing data preprocessing and feature selection, achieving 96.5% accuracy and 97% sensitivity.",
    tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    link: "https://github.com/Ananyaa00051/Breast-Cancer-Detection"
  },
  {
    id: 3,
    title: "Hate Speech Detection",
    description: "Built NLP and deep learning models to classify harmful content across 25,000+ tweets. Optimized preprocessing and tuning to elevate the F1-score from 0.78 to 0.89.",
    tech: ["Python", "NLP", "Deep Learning", "TensorFlow", "Keras"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    link: "https://github.com/Ananyaa00051/Hate-speech-prediction"
  },
  {
    id: 4,
    title: "Pneumonia Detection",
    description: "Trained a Convolutional Neural Network (CNN) with explainable outputs for medical image classification of Chest X-Rays, achieving ~92% accuracy.",
    tech: ["Python", "CNN", "Deep Learning", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
    link: "https://github.com/Ananyaa00051/Pneumonia-Detection-from-Chest-X-Ray-Images-using-Transfer-Learning"
  },
  {
    id: 5,
    title: "Virtual Whiteboard",
    description: "Developed a touchless, real-time gesture-based drawing system using Computer Vision and OpenCV, delivering intuitive writing interactions at 30+ FPS tracking performance.",
    tech: ["Python", "Computer Vision", "OpenCV"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 9,
    title: "Mosaic – Speculative Product Case Study",
    description: "An immersive React-based case study exploring a healthier, calmer internet. Blends product thinking, interaction design, and storytelling into a conceptual platform for mindful digital living — built end-to-end from product vision to frontend implementation.",
    tech: ["React", "Framer Motion", "Product Design", "Speculative Design", "Frontend Engineering"],
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200",
    link: "https://mosaic-delta-vert.vercel.app/"
  },
  {
    id: 6,
    title: "Project Astitva – Enactus Magazine",
    description: "Designed a cohesive impact magazine layout for social initiative storytelling. Transformed raw content into engaging visual narratives, establishing a clear visual identity and structured information hierarchy.",
    tech: ["Figma", "Canva", "Graphic Design", "Visual Storytelling"],
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=1200",
    link: "https://www.behance.net/gallery/223238497/Project-Astitva-For-Enactus"
  },
  {
    id: 7,
    title: "HIREFLO Product Redesign Case Study",
    description: "Redesigned HIREFLO's user experience by identifying workflow gaps, improving navigation, and optimizing recruiter journeys through user research, product analysis, and strategic feature recommendations.",
    tech: ["UX Research", "Product Design", "User Experience", "Product Analysis"],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200",
    link: "https://silly-jackfruit-d3c.notion.site/HIREFLO-PRODUCT-REDESIGN-CASE-STUDY-6ae4db4ce8698309be34010a710cf544?source=copy_link"
  },
  {
    id: 8,
    title: "boAt Unplugged – Product Teardown",
    description: "Analyzed boAt's product ecosystem, brand strategy, user experience, and market positioning to identify growth opportunities, customer engagement improvements, and strategic product recommendations.",
    tech: ["Product Management", "Brand Strategy", "Market Analysis", "UX Research"],
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=1200",
    link: "https://silly-jackfruit-d3c.notion.site/boAt-Unplugged-A-Product-Teardown-3584db4ce86980879efef4b8516b6317"
  }
];
