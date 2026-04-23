# Anti-Frauda 🛡️

**Anti-Frauda** is a high-performance, AI-powered cybersecurity tool designed to detect, analyze, and neutralize fraudulent messages. Built with Google's Gemini AI, it helps users identify phishing attempts, social engineering, and scams in seconds, while providing safe automated engagement strategies to protect their digital perimeter.

![Version](https://img.shields.io/badge/version-1.0.0-red)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)
![AI](https://img.shields.io/badge/AI-Gemini%203%20Flash-orange)

## 🚀 Features

- **Neural Analysis Engine**: Deep analysis of suspicious text to identify hidden risks and fraudulent patterns.
- **Risk Assessment**: Categorizes threats into Low, Medium, or High severity with immediate visual feedback.
- **Red Flag Detection**: Specific identification of social engineering tactics and technical phishing indicators.
- **Automated Counter-Engagement**: Generates 3 types of safe responses:
  - **Polite Decline**: Professional closure of the interaction.
  - **Protective Questioning**: Challenges the scammer without leaking user data.
  - **Creative Time-Waster**: Harmless scambaiting to waste the attacker's resources.
- **Hardware-Inspired UI**: A professional "Mission Control" aesthetic designed for focus and precision.
- **Mobile Responsive**: Fully functional on Android, iOS, and desktop browsers.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **AI Engine**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Gemini 3 Flash)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iondraghici/Anti-Frauda.git
   cd Anti-Frauda
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🛡️ Usage

1. **Paste**: Copy any suspicious email, SMS, or message.
2. **Analyze**: Click "Initialize Analysis" to start the AI scan.
3. **Review**: Check the Risk Severity, Red Flags, and Recommendations.
4. **Respond**: Choose a "Counter-Engagement Protocol" and click "Deploy" to copy the AI-generated response.

## 🤝 Contributing

Contributions are welcome! If you have ideas for new analysis patterns or engagement strategies, please open an issue or submit a pull request.

## ⚖️ License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

---

**Stay Vigilant. Trust Nothing.**
*Developed for the AI Studio community.*
